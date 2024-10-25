import db from '../database/index'
import OffersType from '../types/offers.types'

class OffersModel {
	//create Req
	async createOffers(u: OffersType): Promise<OffersType> {
		try {
			//open connect with DB1
			const connect = await db.connect()
			const sql =
				'INSERT INTO offer ( type, project_id, floor, unit_space, img, project_name, code, down_payment, retuning ) values ($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *'
			//run query
			const result = await connect.query(sql, [
				u.type,
				u.project_id,
				u.floor,
				u.unit_space,
				u.img,
				u.project_name,
				u.code,
				u.down_payment,
				u.retuning,
			])
			//release connect
			connect.release()
			//return created Req
			return result.rows[0]
		} catch (err: any) {
			// throw new Error(`email already exists! `)
			throw new Error(`${err} `)
		}
	}
	//get all offer
	async getAll(): Promise<OffersType[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from offer'
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
	async getOne(id: string): Promise<OffersType> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from offer WHERE id=($1)'
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
	async getByProjectId(project_id: string): Promise<OffersType[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from offer WHERE project_id=($1)'
			//run query
			const result = await connect.query(sql, [project_id])
			//release connect
			connect.release()
			//return created Req
			return result.rows
		} catch (err) {
			throw new Error(`.could not find Req ${name}, ${err}`)
		}
	}
	async updateOffer(u: OffersType): Promise<OffersType> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql =
				'UPDATE offer SET  type=$1, floor=$2, unit_space=$3, img=$4, project_name=$5, code=$6, down_payment=$7 retuning=$8 WHERE id=$9 RETURNING *'
			//run query
			const result = await connect.query(sql, [
				u.type,
				u.floor,
				u.unit_space,
				u.img,
				u.project_name,
				u.code,
				u.down_payment,
				u.retuning,
				u.id,
			])
			//release connect
			connect.release()
			//return created Req
			return result.rows[0]
		} catch (err) {
			throw new Error(`.could not find Req ${u.id}, ${err}`)
		}
	}

	//delete Req
	async delete(id: string): Promise<OffersType> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'DELETE from offer  WHERE id=($1) RETURNING *'
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
}
export default OffersModel
