import {Router, Request, Response} from 'express'
import ProjectsModel from '../../models/project.model'
const projectsModel = new ProjectsModel()

const routes = Router()

routes.post('/', async (req: Request, res: Response, next) => {
	try {
		const project = await projectsModel.createProject(req.body)
		res.json({
			status: 'success',
			data: {...project},
			message: 'project created successfully',
		})
	} catch (err) {
		next(err)
	}
})
//create
routes.get('/', async (req: Request, res: Response, next) => {
	try {
		const project = await projectsModel.getAll()
		res.json({
			status: 'success',
			data: project,
			message: 'users retrieved successfully',
		})
	} catch (err: any) {
		next(err.message)
	}
})
routes.get('/:id', async (req: Request, res: Response, next) => {
	try {
		const project = await projectsModel.getOne(req.params.id as unknown as string)
		res.json({
			status: 'success',
			data: project,
			message: 'project retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})
routes.get('/name/:name', async (req: Request, res: Response, next) => {
	try {
		const project = await projectsModel.getByName(
			req.params.user_id as unknown as string
		)
		res.json({
			status: 'success',
			data: project,
			message: 'project retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})

routes.patch('/', async (req: Request, res: Response, next) => {
	try {
		const project = await projectsModel.updateProject(req.body)
		res.json({
			status: 'success',
			data: project,
			message: 'project updated successfully',
		})
	} catch (err) {
		next(err)
	}
})
routes.delete('/:id', async (req: Request, res: Response, next) => {
	try {
		const project = await projectsModel.delete(req.params.id as unknown as string)
		res.json({
			status: 'success',
			data: project,
			message: 'project deleted successfully',
		})
	} catch (err) {
		next(err)
	}
})

export default routes
