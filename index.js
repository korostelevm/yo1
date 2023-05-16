const path = require('path')
const express = require('express')
const app = express()
const router = express.Router()



app.use('/',router)
router.post('/', (req, res)=>{
   
res.send('yo')
}) 


router.get('/', (req, res)=>{
      console.log(req.headers)
    return res.json({
       hello:'world'
    })
})


router.get('/fs', (req, res)=>{
   require('fs').writeFileSync('./file.txt', 'asdfasdf')
   res.send('ok')
})

router.get('/process_exit', (req, res)=>{
     process.exit()

})


app.listen(3000)
