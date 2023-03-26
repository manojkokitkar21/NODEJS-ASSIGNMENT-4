const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3001

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.post('/add', (req, res) => {
  const { num1, num2 } = req.body
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.json({ status: 'error', message: 'Invalid data types' })
  }
  const sum = num1 + num2
  if (sum < -1000000) {
    return res.json({ status: 'error', message: 'Underflow' })
  } else if (sum > 1000000) {
    return res.json({ status: 'error', message: 'Overflow' })
  }
  return res.json({ status: 'success', message: 'the sum of given two numbers', sum })
})

app.post('/sub', (req, res) => {
  const { num1, num2 } = req.body
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.json({ status: 'error', message: 'Invalid data types' })
  }
  const difference = num1 - num2
  if (difference < -1000000) {
    return res.json({ status: 'error', message: 'Underflow' })
  } else if (difference > 1000000) {
    return res.json({ status: 'error', message: 'Overflow' })
  }
  return res.json({ status: 'success', message: 'the difference of given two numbers', difference })
})

app.post('/multiply', (req, res) => {
  const { num1, num2 } = req.body
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.json({ status: 'error', message: 'Invalid data types' })
  }
  const result = num1 * num2
  if (result < -1000000) {
    return res.json({ status: 'error', message: 'Underflow' })
  } else if (result > 1000000) {
    return res.json({ status: 'error', message: 'Overflow' })
  }
  return res.json({ status: 'success', message: 'The product of given numbers', result })
})

app.post('/divide', (req, res) => {
  const { num1, num2 } = req.body
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.json({ status: 'error', message: 'Invalid data types' })
  } else if (num2 === 0) {
    return res.json({ status: 'error', message: 'Cannot divide by zero' })
  }
  const result = num1 / num2
  if (result < -1000000) {
    return res.json({ status: 'error', message: 'Underflow' })
  } else if (result > 1000000) {
    return res.json({ status: 'error', message: 'Overflow' })
  }
  return res.json({ status: 'success', message: 'The division of given numbers', result })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
