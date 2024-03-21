// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const test = require('./test')
const calc = require('./calc')

router.use('/', test)

router.use('/calc', calc)

// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router

