import { Router } from 'express'
import * as tacosCtrl from '../controllers/tacos.js'
import { isLoggedIn } from '../middleware/middleware.js'

export {
    router
}

const router = Router()

router.get('/', )
router.get('/', tacosCtrl.index)
router.get('/:id', tacosCtrl.show)
router.post('/', isLoggedIn, tacosCtrl.create)