import db from '../database/index'
import Users from '../types/users.types'
import bcrypt from 'bcrypt'
import config from '../config'

const hashPassword = (password: string) => {
	const salt = parseInt(config.salt as unknown as string, 10)
	return bcrypt.hashSync(`${password}${config.pepper}`, salt)
}

class UsersModel {
	//create user
	async createUser(u: Users): Promise<Users> {
		try {
			//open connect with DB1
			const connect = await db.connect()
			const sql =
				'INSERT INTO users ( name, password, phone) values ($1, $2, $3) returning *'
			//run query
			const result = await connect.query(sql, [
				u.name,
				hashPassword(u.password),
				u.phone,
			])
			//release connect
			connect.release()
			//return created user
			return result.rows[0]
		} catch (err: any) {
			// throw new Error(`email already exists! `)
			throw new Error(`${err} `)
		}
	}
	//get all users
	async getAll(): Promise<Users[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT id, date, name, phone from users'
			//run query
			const result = await connect.query(sql)
			//release connect
			connect.release()
			//return created user
			return result.rows
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
	//get specific user
	async getOne(id: string): Promise<Users> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT id, date, name, phone from users WHERE id=($1)'
			//run query
			const result = await connect.query(sql, [id])
			//release connect
			connect.release()
			//return created user
			return result.rows[0]
		} catch (err) {
			throw new Error(`.could not find user ${id}, ${err}`)
		}
	}

	async updatePass(u: Users): Promise<Users> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = `UPDATE users SET  password=$1  WHERE id=$2 RETURNING *`
			//run query
			const result = await connect.query(sql, [hashPassword(u.password), u.id])
			//release connect
			connect.release()
			//return created user
			return result.rows[0]
		} catch (err) {
			throw new Error(`could not update  user , ${err}`)
		}
	}

	//delete user
	async delete(id: string): Promise<Users> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'DELETE from users  WHERE id=($1) RETURNING *'
			//run query
			const result = await connect.query(sql, [id])
			//release connect
			connect.release()
			//return created user
			return result.rows[0]
		} catch (err) {
			throw new Error(`could not delete  user ${id}, ${err}`)
		}
	}
	//authenticate user
	async auth(phone: string, password: string): Promise<Users | null> {
		try {
			const connect = await db.connect()
			const sql = `SELECT password FROM users WHERE phone=$1`
			const res = await connect.query(sql, [phone])
			if (res.rows.length) {
				const {password: hashPassword} = res.rows[0]
				const isPassValid = bcrypt.compareSync(
					`${password}${config.pepper}`,
					hashPassword
				)
				if (isPassValid) {
					const userInfo = await connect.query(
						`SELECT id, name, phone FROM users WHERE phone=($1)`,
						[phone]
					)
					return userInfo.rows[0]
				} else {
					throw new Error(`The password don't match`)
				}
			} else {
				throw new Error(`The phone number is not correct`)
			}
			connect.release()
			return null
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
}
export default UsersModel
