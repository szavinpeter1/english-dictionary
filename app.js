import express from 'express'
import { fromEnglish } from './dictionary.js'
let app = express()

app.get('/:englishWord', function (request, response) {
    console.log(request.params.englishWord)
    console.log(request.path)
    let translateResult = fromEnglish(request.params.englishWord)
    response.send('translateResult')
 })

 app.listen(8080)