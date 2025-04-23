//J S O N
//JSON.stringyfy = coverts a js object to json string
//json.parse = converts a js string to jso object


// Stringafy
//array
const names = ["Spongebob", "Patrick", "Squidward", "Sandy"]
console.log(names)

const jsonStrNms = JSON.stringify(names)
console.log(jsonStrNms)

//object
const Spongebob = {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "Cooking"]
}
console.log(Spongebob)

const jsonStrSponge = JSON.stringify(Spongebob)
console.log(jsonStrSponge)

// array of objects
const bB = [
    {
        "name": "Spongebob",
        "age": 30,
        "isEmployed": true
    },
    {
        "name": "Patrick",
        "age": 34,
        "isEmployed": false
    },
    {
        "name": "Squidward",
        "age": 50,
        "isEmployed": true
    },
    {
        "name": "Sandy",
        "age": 27,
        "isEmployed": false
    }
]
console.log(bB)

const jsonStrBb = JSON.stringify(bB)
console.log(bB)

// Parse
const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`
console.log(jsonNames)
const jsonParseName = JSON.parse(jsonNames)
console.log(jsonParseName)

const jsonSB = `{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "Cooking"]
}`
console.log(jsonSB)
const jsonParseSB = JSON.parse(jsonSB)
console.log(jsonParseSB)

const jsonBB = `[
    {
        "name": "Spongebob",
        "age": 30,
        "isEmployed": true
    },
    {
        "name": "Patrick",
        "age": 34,
        "isEmployed": false
    },
    {
        "name": "Squidward",
        "age": 50,
        "isEmployed": true
    },
    {
        "name": "Sandy",
        "age": 27,
        "isEmployed": false
    }
]`
console.log(jsonBB)
const jsonParseBB = JSON.parse(jsonBB)
console.log(jsonParseBB)

//---------------------------------------------------
//NO more COPY PASTE!!!
// fetch()
fetch("./person.json") //fetches the person.json file
    .then(response => response.json()) // Tells that it is a json object
    .then(value => console.log(value)) // logs the parsed json object

// ieteradr thru an arsay of object s iwt fetch using for each
fetch("bikini-bottom.json").then(response => response.json).then(values => value.forEach(element => { console.log(element.name)}))
    .catch(error => console.log(error)) // Good  practace to errr catch













































