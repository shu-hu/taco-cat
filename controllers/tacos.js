import { Taco } from '../models/taco.js'

export {
    index
}

function index(req, res) {
    Taco.find({})
    .then(tacos => {
        res.render('tacos/index', {
            tacos,
            title: "🌮"
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect("/tacos")
    })
}