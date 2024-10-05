import db from '../database/index'
import RequestsType from '../types/requests.types'

class RequestsModel {
	//create Req
	async createReq(u: RequestsType): Promise<RequestsType> {
		try {
			//open connect with DB1
			const connect = await db.connect()
			const sql = 'INSERT INTO request ( user_id, req) values ($1, $2) returning *'
			//run query
			const result = await connect.query(sql, [u.user_id, u.req])
			//release connect
			connect.release()
			//return created Req
			return result.rows[0]
		} catch (err: any) {
			// throw new Error(`email already exists! `)
			throw new Error(`${err} `)
		}
	}
	//get all request
	async getAll(): Promise<RequestsType[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from request'
			//run query
			const result = await connect.query(sql)
			//release connect
			connect.release()
			//return created Req
			return result.rows
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
	//get specific Req
	async getOne(id: string): Promise<RequestsType> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from request WHERE id=($1)'
			//run query
			const result = await connect.query(sql, [id])
			//release connect
			connect.release()
			//return created Req
			return result.rows[0]
		} catch (err) {
			throw new Error(`.could not find Req ${id}, ${err}`)
		}
	}
	async getByUserId(user_id: string): Promise<RequestsType[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from request WHERE user_id=($1)'
			//run query
			const result = await connect.query(sql, [user_id])
			//release connect
			connect.release()
			//return created Req
			return result.rows
		} catch (err) {
			throw new Error(`.could not find Req ${user_id}, ${err}`)
		}
	}
	async updateReq(u: RequestsType): Promise<RequestsType> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'UPDATE request SET  req=$1  WHERE id=$2 RETURNING *'
			//run query
			const result = await connect.query(sql, [u.req, u.id])
			//release connect
			connect.release()
			//return created Req
			return result.rows[0]
		} catch (err) {
			throw new Error(`.could not find Req ${u.id}, ${err}`)
		}
	}

	//delete Req
	async delete(id: string): Promise<RequestsType> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'DELETE from request  WHERE id=($1) RETURNING *'
			//run query
			const result = await connect.query(sql, [id])
			//release connect
			connect.release()
			//return created Req
			return result.rows[0]
		} catch (err) {
			throw new Error(`could not delete  Req ${id}, ${err}`)
		}
	}
	//authenticate Req
}
export default RequestsModel
