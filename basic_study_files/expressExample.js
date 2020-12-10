const express = require('express')
const app = express()
const port = 3000

// 요청 경로와  핸들러 함수를 매핑해줌
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    res.send('Hello User World!')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})