console.log("Hello World!");
console.log("Sadi");
let pencilPrice = 10;
let eraserPrice = 5;
console.log("the total price is: ", pencilPrice +eraserPrice, "Rupees");
 let nes = `"the total
  price is: ", ${pencilPrice +eraserPrice}, "Rupees";`
console.log(nes);
let x = "green";

if (x == "red")
{
    console.log("stop");
}else if( x =="green"){
    console.log("go");
}else{
    console.log("waite");
}

let size = "S";

if(size =="XL"){
    console.log(`Price is ${250}`);
}else if(size == "L"){
    console.log("200 rs");
}else if(size == "M"){
    console.log("100"); 
}else{
    console.log("50");
}
// alert("something is wrong!");
console.error("this is an error messege");
console.warn("this is an warn messege");
let firstname = prompt("Enter your name: ")
console.log(firstname);