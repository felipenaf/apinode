const express = require('express')
const app = express()
 
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.get('/cliente/:id', function (req, res) {
  if(req.params['id'] == 1){
    res.send({
      nome: "Felipe",
      cargo: "Dev",
      tel: "11 95420-6364"
    })
  }else{
    res.send(req.params)
  }
})
 
app.listen(3000)