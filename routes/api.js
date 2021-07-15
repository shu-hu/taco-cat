import { Router } from 'express'
import * as apiCtrl from '../controllers/api.js'

export {
    router
}

const router = Router()

router.post('/ingredients', apiCtrl.createIngredient)
router.get('/ingredients', apiCtrl.ingredientIndex)