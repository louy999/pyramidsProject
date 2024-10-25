import {Router, Request, Response} from 'express'
import OffersModel from '../../models/offers.model'
const offersModel = new OffersModel()

const routes = Router()

routes.post('/', async (req: Request, res: Response, next) => {
	try {
		const offer = await offersModel.createOffers(req.body)
		res.json({
			status: 'success',
			data: {...offer},
			message: 'offer created successfully',
		})
	} catch (err) {
		next(err)
	}
})
//create
routes.get('/', async (req: Request, res: Response, next) => {
	try {
		const offer = await offersModel.getAll()
		res.json({
			status: 'success',
			data: offer,
			message: 'users retrieved successfully',
		})
	} catch (err: any) {
		next(err.message)
	}
})
routes.get('/:id', async (req: Request, res: Response, next) => {
	try {
		const offer = await offersModel.getOne(req.params.id as unknown as string)
		res.json({
			status: 'success',
			data: offer,
			message: 'offer retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})
routes.get('/project/:project', async (req: Request, res: Response, next) => {
	try {
		const offer = await offersModel.getByProjectId(
			req.params.project as unknown as string
		)
		res.json({
			status: 'success',
			data: offer,
			message: 'offer retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})

routes.patch('/', async (req: Request, res: Response, next) => {
	try {
		const offer = await offersModel.updateOffer(req.body)
		res.json({
			status: 'success',
			data: offer,
			message: 'offer updated successfully',
		})
	} catch (err) {
		next(err)
	}
})
routes.delete('/:id', async (req: Request, res: Response, next) => {
	try {
		const offer = await offersModel.delete(req.params.id as unknown as string)
		res.json({
			status: 'success',
			data: offer,
			message: 'offer deleted successfully',
		})
	} catch (err) {
		next(err)
	}
})

export default routes
