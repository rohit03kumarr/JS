

//  ++++++++++++++++ truthy and falsy value +++++++++++++++

const userEmail = "rohit@ai"

if (userEmail) {
    console.log("got User Email");
} else{
    console.log("Don't have User Email");
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0 ) {
    console.log("object is empty");
}

/* 

falsy values 
    false, 0, BigInt 0n, "",  null, undefined, NAN 

    truthy values
    "0", "false", true, " ", [], {}, function(){},
    
    */