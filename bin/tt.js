//"use strict";
const Rejson = require('../fun/rejson')
//var myout = {}
module.exports = () => {
	Rejson.myget('network').then((myout) => {
		Object.entries(myout).forEach(([key, value]) => console.log(value))
	})
}

const myObjs = require('./playground/show-networks.json')

console.dir(myObjs)
console.log(typeof myObjs)
console.log(myObjs.length)
for (var i in myObjs) {
        for (var j in myObjs[i]) {
                const myObj = Object.keys(myObjs[i][j]).reduce((p, c) => ({...p, [c
]: myObjs[i][j][c]}), {})
                console.dir(myObj[0])
        }
}

var jsonfile = require('jsonfile')
var file = '/tmp/data.json'
jsonfile.readFile(file, function(err, obj) {
  console.dir(obj)
})

//rejson.close()
