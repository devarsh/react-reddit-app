import path from 'path'
import Express from 'express'
import handleRender from 'renderToString.js'

const app = Express()
const port = 3000
app.use('/static',express.static(__dirname + '/static'))
app.use(handleRender)

app.listen(port)