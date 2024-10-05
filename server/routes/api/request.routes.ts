import {Router, Request, Response} from 'express'
import config from '../../config'
import RequestsModel from '../../models/requests.model'
const requestsModel = new RequestsModel()

const routes = Router()

routes.post('/', async (req: Request, res: Response, next) => {
	try {
		const Req = await requestsModel.createReq(req.body)
		res.json({
			status: 'success',
			data: {...Req},
			message: 'Req created successfully',
		})
	} catch (err) {
		next(err)
	}
})
//create
routes.get('/', async (req: Request, res: Response, next) => {
	try {
		const Req = await requestsModel.getAll()
		res.json({
			status: 'success',
			data: Req,
			message: 'users retrieved successfully',
		})
	} catch (err: any) {
		next(err.message)
	}
})
routes.get('/:id', async (req: Request, res: Response, next) => {
	try {
		const Req = await requestsModel.getOne(req.params.id as unknown as string)
		res.json({
			status: 'success',
			data: Req,
			message: 'Req retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})
routes.get('/user/:user_id', async (req: Request, res: Response, next) => {
	try {
		const Req = await requestsModel.getByUserId(
			req.params.user_id as unknown as string
		)
		res.json({
			status: 'success',
			data: Req,
			message: 'Req retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})

routes.patch('/', async (req: Request, res: Response, next) => {
	try {
		const Req = await requestsModel.updateReq(req.body)
		res.json({
			status: 'success',
			data: Req,
			message: 'Req updated successfully',
		})
	} catch (err) {
		next(err)
	}
})
routes.delete('/:id', async (req: Request, res: Response, next) => {
	try {
		const Req = await requestsModel.delete(req.params.id as unknown as string)
		res.json({
			status: 'success',
			data: Req,
			message: 'Req deleted successfully',
		})
	} catch (err) {
		next(err)
	}
})

export default routes
