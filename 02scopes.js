
//+++++++++++++++++   scopes   +++++++++++++++
/*
let a = 300
if (true)  {
    let a = 10
const b = 20 
console.log("Inner: ",a);
}

 console.log(a);
 //console.log(b);

 output: Inner: 10
         300  */
 
    
         //    +++++++++++++++++  nested scope  +++++++++++

         /*
         function one(){
            const username = "rohitkumar"

            function two(){
                const website ="youtube"
                console.log(username);
            }
            //console.log(website);
            two()
         }
         //one()
         output: rohitkumar */

     // +++++++++++++++  if statement   ++++++++++++++

 /*
        if (true) {
    const username  = "rohitkumar"
    if (username === "rohitkumar"){
        const website = " youtube"
        console.log(username + website)
    }
    //console.log(website);
 }       
 //console.log(username);

 output: rohitkumar youtube */

 //  +++++++++++++++++++++ interesting  ++++++++++++++++++

 /*const addTwo = function(num){
  return num + 2
  console.log(addTwo);
 }
addTwo(5)*/