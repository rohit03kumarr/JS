
const myObjects = {
    js: 'javascript',
    cp: 'C++',
    rb : 'ruby',
    swift: 'swift by apple'
}

for (const name in myObjects) {
  //console.log(`${name} shortcut is for ${myObjects[name]}`);
  
}

 const programming = ['js','java','c']
  for (const key in programming) {
    //console.log(`languages used in programming: ${programming}`);  
  }

/* 
const programming = ['js','java','c']
  for (const key in programming) {
    console.log(programming[key]);  
  }
    */

  const map = new Map()
  map.set('IN',"INDIA" )
  map.set('USA',"UNITED STATES OF AMERICA")
  map.set('FR',"FRANCE")
  
  for (const key in map) {
  //console.log(key);
  }