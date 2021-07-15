import { Ingredient } from '../models/ingredient.js'

export {
    createIngredient,
    ingredientIndex,
}

function ingredientIndex(req, res) {
    Ingredient.find({})
    .then(ingredients => res.json(ingredients))
    .catch(err => {
        res.json(err)
    })
}

function createIngredient(req, res) {
    Ingredient.create(req.body)
    .then((ingredient)=> res.json(ingredient))
    .catch(err => {
        console.log(err)
        res.json(err)
    })
}