import db from '../database/index'
import ProjectsType from '../types/projects.types'

class ProjectsModel {
	//create Req
	async createProject(u: ProjectsType): Promise<ProjectsType> {
		try {
			//open connect with DB1
			const connect = await db.connect()
			const sql =
				'INSERT INTO project ( name, description, img, type , price_meter, meter_start, delivery, installment, percentage, rate_down, batch, distention) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *'
			//run query
			const result = await connect.query(sql, [
				u.name,
				u.description,
				u.img,
				u.type,
				u.price_meter,
				u.meter_start,
				u.delivery,
				u.installment,
				u.percentage,
				u.rate_down,
				u.batch,
				u.distention,
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
	//get all project
	async getAll(): Promise<ProjectsType[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from project'
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
	async getOne(id: string): Promise<ProjectsType> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from project WHERE id=($1)'
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
	async getByName(name: string): Promise<ProjectsType[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from project WHERE name=($1)'
			//run query
			const result = await connect.query(sql, [name])
			//release connect
			connect.release()
			//return created Req
			return result.rows
		} catch (err) {
			throw new Error(`.could not find Req ${name}, ${err}`)
		}
	}
	async updateProject(u: ProjectsType): Promise<ProjectsType> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql =
				'UPDATE project SET  name=$1, description=$2, img=$3, type=$4, price_meter=$5, meter_start=$6, delivery=$7, installment=$8, percentage=$9, rate_down=$10, batch=$11, distention=12 WHERE id=$13 RETURNING *'
			//run query
			const result = await connect.query(sql, [
				u.name,
				u.description,
				u.img,
				u.type,
				u.price_meter,
				u.meter_start,
				u.delivery,
				u.installment,
				u.percentage,
				u.rate_down,
				u.batch,
				u.distention,
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
	async delete(id: string): Promise<ProjectsType> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'DELETE from project  WHERE id=($1) RETURNING *'
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
export default ProjectsModel
