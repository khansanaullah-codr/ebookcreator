const express = require('express');
const { registerUser, loginUser, getProfile, updateUserProfile } = require('../controller/authController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getProfile); // <-- protect middleware added here
router.put('/profile', protect, updateUserProfile);

module.exports = router;
