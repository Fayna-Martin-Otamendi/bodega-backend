const router = require('express').Router()

const {
  checkAuth,
  checkAdmin
} = require('../utils/middlewares')

const {
    getAllUsers,
    getOneUser,
    getOwnProfile,
    createUser,
    updateUser,
    updateOwnProfile,
    deleteUser,
    deleteOwnProfile,
    resetPassword
} = require('../controllers/user.controller')

router
  .get('/', checkAuth, checkAdmin, getAllUsers)
  .post('/', checkAuth, checkAdmin, createUser)
  .get('/profile', checkAuth, getOwnProfile)  
  .put('/profile', checkAuth, updateOwnProfile)
  .delete('/profile', checkAuth, deleteOwnProfile)
  .get('/:userId', checkAuth, checkAdmin, getOneUser)
  .put('/:userId', checkAuth, checkAdmin, updateUser)
  .delete('/:userId', checkAuth, checkAdmin, deleteUser)
  .put('/password', checkAuth, resetPassword)

module.exports = router
