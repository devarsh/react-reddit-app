import path from 'path'
import {handleRender} from 'renderToString.js'

var express = require('express')


const app = express()
const port = 3000

app.use('/static',express.static('../static'))
app.get('/',handleRender)

app.listen(port,()=> {console.log('Started Listening on port 3000')})