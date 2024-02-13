const Router=require('express')
const router=Router.Router()
const authmiddleware=require('../middlewares/auth')
const  bookcontroller=require('../Controller/bookcontroller')


router.post('/api/books',authmiddleware  ,bookcontroller.Addbook)
router.get('/api/books',authmiddleware  ,bookcontroller.getallbooks)
router.get('/api/books/:id',authmiddleware  ,bookcontroller.getonebook)
router.put('/api/books/:id',authmiddleware  ,bookcontroller.updatebook)
router.delete('/api/books/:id',authmiddleware  ,bookcontroller.deletebook)
module.exports= router