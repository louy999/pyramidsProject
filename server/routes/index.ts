import {Router} from 'express'
import usersRoutes from './api/users.routes'
import RequestsRoutes from './api/request.routes'

const routes = Router()
routes.use('/req', RequestsRoutes)
routes.use('/users', usersRoutes)

export default routes
