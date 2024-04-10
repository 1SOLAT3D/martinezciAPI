const yaml = require('yaml');
const fs = require('fs');
const path = require('path');

const objetoyaml = fs.readFileSync(path.join(__dirname, 'objeto.yml'), 'utf8');
const objetojson = yaml.parse(objetoyaml);

const arregloyaml = fs.readFileSync(path.join(__dirname, 'arreglo.yml'), 'utf8');
const arreglojson = yaml.parse(arregloyaml);

const objjson = JSON.stringify(objetojson, null, 2);
const arrjson = JSON.stringify(arreglojson, null, 2); 

console.log(objjson);
console.log(arrjson);
