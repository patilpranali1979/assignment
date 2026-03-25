//q1
const student =
    {fullName : "pranali" , grade :"A+", section :"IT"}
    
console.log(student.grade);

//q2
const doubleScore =(score) =>{
    return score*2;
}
console.log(doubleScore(2));

//q3
const arr =[10,20,30,40,50];
const increseByFive= arr.map((arr) =>{
    return arr*2;
})
console.log(increseByFive);

//q4
const filterPassingMarks = arr.filter((arr) =>{
    return arr>=40;
})
console.log(filterPassingMarks);

//q5
const score =[20,40,30,50];
const covert =arr.map((arr) =>{
    return arr*10;
})
console.log(covert);

//b
const sco =[10,30,50,60,70 ];
const above = arr.filter((arr) =>{
    return sco <=50;
})

console.log(above);

//c
const sum = score.reduce ((total,score) =>{
    return total = total +score
})
console.log(sum);

//q6
const highScore=[10,20,40,30,50];
function maxScore() {
    return Math.max(...highScore)
}
console.log(maxScore());

//q7
const movie =[
    { name :"xyz" , rating :3},
    { name :"rst" , rating :4},
    { name :"pqr" , rating :5},
];
const filtername = movie.filter((movie) =>{
    return movie.rating >=5;
})
console.log(filtername);

//q8


//q9
function  announceWinner(playerName) {
    if (playerName) {
        console.log(playerName +" is the winner");
        
    } else {
        console.log("unknow player");
        
    }
}
announceWinner("pranali");

//q10
const basball =["aaa","kkk","lll"]
const football =["kkk" ,"uuu","qqq"]
console.log(basball + football);
const d= [...basball]
const f=[...football] +d
console.log(f);

//q11
const name = "avenger"
console.log(`${name}has a rating of 9.5 and a budget of $250 million`);

//q12
const student1 =[
    {name:"pranali", maks:12 },
    {name:"Disha", maks:11 },
    {name:"Anjali", maks:10 },
]
const highestMarks =student1.filter((student1) =>{
    return student1.maks>=11
})
console.log(highestMarks);

//q13
const temprature =[20,40,20,10,40]
const avrageTemprature = temprature.filter((temprature)=>{
    return temprature /10;
})
console.log(avrageTemprature);

//q14
const goals =[10,20,30,40,50];
const totalGoal = goals.reduce((total , goals) =>{
    return (total = total +goals);
});
console.log(totalGoal);

//q15
const book =["one ", "two","three ", "four"];
const [b1,b2,b3,b4] =book;
console.log(b1,b2);

const library ={
    libraryname :"abc",
    branch :"mumbai",
    location:"borivali",
    emailid:"abc@gamil.com",
};
const { libraryname , branch , location , emailid} =library;
console.log(libraryname ,branch);

//q16
class book1 {
    title;
    author;
    price;
    constructor(title,author,price){
        this.title=title;
        this.author=author;
        this.price=price;
        }
        showdratiles(){
            console.log(this.title +" " +this.author +" " +this.price);
            
        }
}
const b= new book1("abc", "xyz",12300);
b.showdratiles();

//q17
function app(seats) {
    return new Promise ((resolve, reject) =>{
        if (seats >0){
            resolve("successful");
        } else{
           reject ("erro occured ");
        }
    });
}
 app(56)
 .then((result)=>{
    console.log(result);
    
 })
 .catch ((err) =>{
    console.log(err);
    
 });

 //q18
 function hotel(book) {
    return new Promise ((resolve) =>{
        setTimeout(() =>{
            if (book){
                resolve("register succefully");
            } else{
                console.log("error occured");
                
            }
        } , 2000)
    });
 }
  async function final() {
    try {
        let data = await hotel(true);
        console.log(data);
        
    } catch (error) {
        console.log(error.name+" " +error.meaage);
        
    }
  }

  final();

  //q19
  function system(memberId) {
    try {
        if (memberId) {
            console.log("member id is valid");
            
        } else {
            console.log("the member id is invalid");
            
        }
    } catch (error) {
        console.log(error.name+" " +error.message);
        
    }
  }
  system();

  //q20
  function confirmBookIng() {
    console.log(ticket);
    
  }
  function checkpaymnet() {
    confirmBookIng();
  }
   function confirmpayment() {
    try {
        checkpaymnet();
    } catch (error) {
        console.log(error.name+ " " +error.meaage);
        
    }
   }
   confirmpayment();

   //q21
   function library1() {
    try {
        console.log("connect to data");
        
    } catch (error) {
        console.log("error occured");
        
    } finally{
        console.log("cloting data connection");
        
    }
   }
   library1();

   //q22
   class InvalidBookError extends Error{
    constructor (message){
        super(message);
        this.name ="Invalid Price ";
    }
   }
   function Isvalid(price) {
    if (price<=0){
        try {
            throw new InvalidBookError();
            
        } catch (error) {
            console.log(error.name+ " " + error.message);
            
        }
    } else {
        console.log("ticket book successfully");
        
    }
   }
   Isvalid(-1200);

   //q23
   function  validateDestination(city) {
    if (!city) {
        try {
            throw new  "invalid destination name "
            
        } catch (error) {
            console.log( error.name + " " +error.message);
            
        }
    } else {
        console.log("valid destinatinon name ");
        
    }
   }
    validateDestination();