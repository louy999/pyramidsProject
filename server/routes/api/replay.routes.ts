import {Router, Request, Response} from 'express'
import config from '../../config'
import ReplayModel from '../../models/replay.model'
const replayModel = new ReplayModel()

const routes = Router()

routes.post('/', async (req: Request, res: Response, next) => {
	try {
		const Req = await replayModel.createReplay(req.body)
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
		const Req = await replayModel.getAll()
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
		const Req = await replayModel.getOne(req.params.id as unknown as string)
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
		const Req = await replayModel.getByUserId(
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
routes.get('/req/:request_id', async (req: Request, res: Response, next) => {
	try {
		const Req = await replayModel.getByReqId(
			req.params.request_id as unknown as string
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
		const Req = await replayModel.updateReplay(req.body)
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
		const Req = await replayModel.delete(req.params.id as unknown as string)
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
