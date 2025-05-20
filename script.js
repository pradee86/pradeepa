var a=70;
var b=55;
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a>b)
console.log(a<b)
console.log(a=b)
console.log(a>=b)
console.log(a<=b)
console.log(a>>b)
console.log(a==b)
console.log(a!=b)
console.log(a!==b)
function add(){
    var a=70;
    var b=55;
    console.log(a+b)
}
add()
function add(a,b){
    console.log(a+b)
}
add(30,20)
add(40,60)
add(70,55)

var a=10;
var b=20;
console.log(`${a}+${b}=${a+b}`)

n=10;
if(n%2==0)
{
    console.log("is odd");
}else
{
    console.log("is even");
}

for(n=1;n<=10;n++) {
   if(n%2==0){
    console.log(`${n}is even`)
   }else{
   console.log(`${n}is odd`)
   }n++;
}

n=1;
while(n<=10)
{
    if(n%2==0){
 console.log(`${n}is even`)
   }else{
   console.log(`${n}is odd`)
   }n++; 
}     

   n=1;
   do{
    if(n%2==0){
      console.log(`${n}is even`)
     }else{
         console.log(`${n}is odd`)
   }n++; 
    }
   while(n<=10);
   n=5;
   switch(n){
    case 1:
        console.log("monday")
        break;
        case 2:
        console.log("Tuesday")
        break;
        case 3:
        console.log("Wednesday")
        break;
        case 4:
        console.log("Thusday")
        break;
        case 5:
        console.log("Friday")
        break;
        case 6:
        console.log("Saturday")
        break;
        case 7:
        console.log("sunday")
        break;
        default:
            console.log("enter a valid number")
   }