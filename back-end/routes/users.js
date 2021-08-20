import express from "express";

import { login, signup } from '../controllers/posts.js'

const router = express.Router()

router.post('/login', login)
router.post('/signup', signup)