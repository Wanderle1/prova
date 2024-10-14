import { Router } from "express"
import {store, index, update, destroy} from '../controller/maintenanceController.js'

const router = Router()

router.get('/', index)
router.post('/', store)
router.put('/:id', update)
router.delete('/:id', destroy)

export default router
