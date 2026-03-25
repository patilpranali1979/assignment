const  fruits =["apple" , "banana", "mango"];
const [a1,a2,a3] =fruits;
console.log(a1);
console.log(a2);
console.log(a3);

//b
const student=[
    {name :"Pranali" , age :18, salary :12000},
    {name :"Patil" , age :19, salary :13000},
];
const [x1,x2] =student;
console.log(x1);
console.log(x2);


//q2
class Emp{
    name ; 
    id;
    salary;
    constructor(a,b,c){
        this.name=a;
        this.id=b;
        this.salary=c;
    }
    displayInfo(){
        console.log(this.name + " " + this.id +" " +this.salary);
        
    }
}
const emp = new Emp("pranali", 1, 12000);
emp.displayInfo();

//q3

function result(marks) {
    return new Promise ((resolve,reject)=>{
        if (marks>=50) {
            resolve("passed");
        } else {
            reject("faild");
        }
    });
}
result(80)
.then((result) =>{
    console.log(result);
    
})
.catch ((err) =>{
    console.log(err);
    
})


//q4
function payment(status) {
    return new Promise ((resolve , reject) =>{
        setTimeout(() =>{
            if (status) {
                resolve("payment successful");
            }
            else{
                reject ("payment failed");
            }
        } , 2000)
    });
}

async function test() {
    try{
        let data =await payment(true)
         console.log(data);
    } catch (error){
          console.log(error);
          
    }
}
test();

//q5
function calculateTotalPrice(...prices) {
    let total=0;
    for (let p of prices){
        total = total + p;
    }
    return total
}
 const total = calculateTotalPrice(10,20,30,40,50);
 console.log(total);
 
 //q6-q7
 function validAge(age) {
   try {
    
    if (age >=18) {
        console.log("age is valid");
        
    } else {
        console.log("age is invalid");
        
    }
    
   } catch (error) {
      console.log(error.name + " " + error.messge);
      
   }
   finally{
    console.log("excuted...");
    
   }

 }
validAge(17);

//q7
function meth() {
    console.log(a);
    
}
function meth1() {
    meth();
}
function meth2() {
    try {
        meth1();
    } catch (error) {
        console.log(error.name + " " + error.messge) ;
        
    }
}
 meth2();

//q9-q10
class validdateAge extends Error {
    constructor (message){
        super (message);
        this.name ="validteAge";
    }
}
function isvalid(age) {
    if (age <18 ){
        try{
            throw new validdateAge ("age is <18");
        }
        catch (error) {
            console.log(error.name + " :" + error.message);
            
        }
    }
    else{
        console.log("age is valid");
        
    }
}
isvalid(4);

