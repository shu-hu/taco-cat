import { Taco } from '../models/taco.js'

export {
    index,
    create,
}

function create(req, res) {
    req.body.owner = req.user.profile
    req.body.tasty = !!req.body.tasty
    Taco.create(req.body)
    .then(taco => {
        res.redirect('/tacos')
    })
    .catch(err => {
        console.log(err)
        res.redirect('/tacos')
    })
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