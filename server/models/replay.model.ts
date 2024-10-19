import db from '../database/index'
import ReplayTypes from '../types/replay.types'

class ReplayModel {
	//create Replay
	async createReplay(u: ReplayTypes): Promise<ReplayTypes> {
		try {
			//open connect with DB1
			const connect = await db.connect()
			const sql =
				'INSERT INTO replay ( user_id, request_id , replay) values ($1, $2, $3) returning *'
			//run query
			const result = await connect.query(sql, [u.user_id, u.request_id, u.replay])
			//release connect
			connect.release()
			//return created Replay
			return result.rows[0]
		} catch (err: any) {
			// throw new Error(`email already exists! `)
			throw new Error(`${err} `)
		}
	}
	//get all replay
	async getAll(): Promise<ReplayTypes[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from replay'
			//run query
			const result = await connect.query(sql)
			//release connect
			connect.release()
			//return created Replay
			return result.rows
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
	//get specific Replay
	async getOne(id: string): Promise<ReplayTypes> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from replay WHERE id=($1)'
			//run query
			const result = await connect.query(sql, [id])
			//release connect
			connect.release()
			//return created Replay
			return result.rows[0]
		} catch (err) {
			throw new Error(`.could not find Replay ${id}, ${err}`)
		}
	}
	async getByUserId(user_id: string): Promise<ReplayTypes[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from replay WHERE user_id=($1)'
			//run query
			const result = await connect.query(sql, [user_id])
			//release connect
			connect.release()
			//return created Replay
			return result.rows
		} catch (err) {
			throw new Error(`.could not find Replay ${user_id}, ${err}`)
		}
	}
	async getByReqId(request_id: string): Promise<ReplayTypes[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from replay WHERE request_id=($1)'
			//run query
			const result = await connect.query(sql, [request_id])
			//release connect
			connect.release()
			//return created Replay
			return result.rows
		} catch (err) {
			throw new Error(`.could not find Replay ${request_id}, ${err}`)
		}
	}
	async updateReplay(u: ReplayTypes): Promise<ReplayTypes> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'UPDATE replay SET  replay=$1  WHERE id=$2 RETURNING *'
			//run query
			const result = await connect.query(sql, [u.replay, u.id])
			//release connect
			connect.release()
			//return created replay
			return result.rows[0]
		} catch (err) {
			throw new Error(`.could not find Replay ${u.id}, ${err}`)
		}
	}

	//delete Replay
	async delete(id: string): Promise<ReplayTypes> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'DELETE from replay  WHERE id=($1) RETURNING *'
			//run query
			const result = await connect.query(sql, [id])
			//release connect
			connect.release()
			//return created Replay
			return result.rows[0]
		} catch (err) {
			throw new Error(`could not delete  Replay ${id}, ${err}`)
		}
	}
	//authenticate Replay
}
export default ReplayModel
