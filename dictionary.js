import fs from "fs"

/*- be: 'alma' (kulcs)

1. be kell olvasni az english.json fájlt
	- típusa: szöveg
			"{ "alma": "apple" }"
2. a JSON szöveget objektummá alakítjuk (parse)
          { alma: 'apple' }
3. az objektumban megkeressük kulcs értékét
4. visszaadjuk a kulcs értékét (apple) */

export function fromEnglish(englishWord) {
    let dictionary =  fs.readFileSync('./english.json')
    let dictionaryObject = JSON.parse(dictionary)
    let lower = englishWord.toLowerCase().trim()
    return dictionaryObject[lower]
}

function addToEnglish(eng, hun) {
    let english = fs.readFileSync('./english.json')
    let parsedEnglish = JSON.parse(english)
    console.log(parsedEnglish)
    /*if (fromEnglish(eng)) {
        console.log('word already exists...', eng)
    } else {
        english[eng.toLowerCase().trim()] = hun
    }*/ 
    parsedEnglish[eng] = hun
    let stringified = JSON.stringify(parsedEnglish)
    fs.writeFileSync('./english.json', stringified)
}

function deleteFromEnglish(eng) {
    delete english[eng.toLowerCase().trim()]
}

function editEnglishKey(oldEng, newEng) {
    let hunValue = fromEnglish(oldEng)
    deleteFromEnglish(oldEng)
    addToEnglish(newEng, hunValue)
}

function editHunValue(engKey, hunVal) {
    english[engKey] = hunVal.toLowerCase().trim()
}

//addToEnglish('apple', 'alma')
console.log(fromEnglish(' Apple  '))