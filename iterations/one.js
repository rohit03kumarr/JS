
//  ++++++++++++++++++  for loop  ++++++++++++++

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element == 5) {
//       //  console.log("5 is best number");
        
//     }
//     //console.log(element); 
// }

for (let i = 0; i <= 10; i++) {
   // console.log(`outer loop values: ${i}`);
    for (let j = 0; j <=10; j++) {
     //console.log(`Inner loop value ${j} `);   
   //console.log(i + '*' + j + ' = ' + i*j );
   
    }  
}

// +++++++++++++++++= break and continue  +++++++++++++++++++

/* 
for (let index = 1; index <20; index++) {
  if (index == 5 ) {
    console.log(`Detected 5`);
  break
  }
  console.log(`value of i is ${index}`);  
}
output: Detected 5  */

for (let index = 1; index <20; index++) {
  if (index == 5 ) {
    console.log(`Detected 5`);
  continue
  }
  console.log(`value of i is ${index}`);  
}