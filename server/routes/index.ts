import {Router} from 'express'
import usersRoutes from './api/users.routes'
import RequestsRoutes from './api/request.routes'
import ProjectsRoutes from './api/projects.routes'
import OffersRoutes from './api/offers.routes'

const routes = Router()
routes.use('/req', RequestsRoutes)
routes.use('/users', usersRoutes)
routes.use('/project', ProjectsRoutes)
routes.use('/offer', OffersRoutes)

export default routes
