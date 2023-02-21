
let name= racecar;
let bag=""
for(let i=name.length-1; i>=0; i--){
bag=bag+name[i];
}
if(bag==name){
console.log("palindrome");
}
else{
console.log("Not Palindrome");
}


