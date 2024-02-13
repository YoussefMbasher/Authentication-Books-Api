const Router=require('express')
const router=Router.Router()
const  usercontroller=require('../Controller/usercontroller')


router.post('/api/users/register',usercontroller.register)
router.post('/api/users/login',usercontroller.login)

module.exports= router