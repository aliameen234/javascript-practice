//  var fname = "aliameen";
// var age=17;
// var shootingscore = 45.6;

// var message=" Hi, my name is " + fname + " and i am " + age + " years old!";

// var firstname = "john";
// var lastname = "jacobjingleheimersmith";
// var dateOfbirth = "10-09-82";
// var age = 23;
// var profileimgurl = 'http://coolpicks.com/johnjacob.jpg';

// var loginwelcomemessage = "welcome, " + firstname + ".happy " + age + "rd birthday!" ;

// console.log(message);

// var sum = 10 + 15;
// var sub = 15-10;
// var mul = 10*3
// var div = 10 / 3;
// var mod = 10 % 3;

// var msg = "10 / 3 = 3 with a remainder of " + mod;

// var result = 10 * ((5 + 3) - 4);

// console.log()

// var myAccountBalance = 300;
// var nikeSBShoes = 799.23;
// var coupon = 500
// //== equal to
// //===??
// //<= less than or equal to
// //>= greater than or equal to
// // != not equal to

// var val1=23;
// var val2 ="23"

// if (val1 !== val2) {
//     console.log("these are the same!");
// } else {
//     console.log("one of these is  like the other...")
// }


//  if (nikeSBShoes <= myAccountBalance) {
//     myAccountBalance -= nikeSBShoes
//     console.log("We just bought some dope shoes");
//     console.log("Account Balance: " + myAccountBalance);
// }else if (nikeSBShoes - coupon <= myAccountBalance) {
//     console.log("We just bought some dope shoes with a coupon");
//     myAccountBalance -= nikeSBShoes - coupon;
//     console.log("Account Balance: " + myAccountBalance);
// } else {
//     console.log("You too broke fo shoes bra!")
// }


// if (1 === 1 && 2 === 2 || "joe" === "joe"){
//     console.log("these are both true!");
// }

// if (true && true){
//     console.log("these aare the same")
// }

// if (1 === 3 || "joe" === "joe"){
//     console.log("one of these are true");
// }

// var cat1 = 5;
// var cat2 = 10;
// var cat3 = 1;
// var cat3disabledHandicap = true;

// if (cat1 > cat2 && cat1 > cat3 && !cat3disabledHandicap) {
//     console.log("cat 1 is the cutest!" );
// } else if (cat2 > cat1 && cat2 > cat3 && !cat3disabledHandicap){
//     console.log("cat2 is the cutest!");
// }else if (cat3 > cat1 && cat3 > cat2 || cat3disabledHandicap) {
//     console.log("cat3 is the cutest!");
// }

// var student1 = "Timmy";
// var student2 = "Janessa";
// var student3 = "Arun";

// var balances = [50.45, 4000.12, -300.50];

// var studentsNames = ["Timmy", "Janessa", "Arun"];

// var naughtylist = [];
// naughtylist.push(studentsNames[0]); 

// var index = naughtylist.indexOf("Timmy");
// console.log(naughtylist);

// if (index > -1){
//     naughtylist.splice(index, 1);
// }

// console.log(naughtylist);

// var total = 10;
// for (var X = 0; X < total; X++) {
//   console.log(X);
// }


// var length1 = 15;
// var width1 = 10;
// var area1 = length1 * width1;

// var length2 = 12;
// var width2 = 14;
// var area2 = length2 * width2;

// console.log(area1)
// console.log(area2)

// function area(length, width) {
    //     return length * width;
    // }
    
    // var rectanglesAreas = []
    // rectanglesAreas.push(area(10, 15));
    // rectanglesAreas.push(area(14, 2));
    // rectanglesAreas.push(area(4,5));
    
    
    // console.log(rectanglesAreas)
    
    // var bankBalance = 500;

// function makeTransaction(priceOfSale) {
    //     if (priceOfSale <= bankBalance){
        //         bankBalance -= priceOfSale;
        //         console.log("purchase succesful");
        //     } else {
            //         console.log("insufficient funds")
            //     }
            // }
            // console.log(bankBalance);
            // makeTransaction(79.00);
            
            // console.log(bankBalance);
            // makeTransaction(2.32);
            
            // console.log(bankBalance);
            // makeTransaction(10.45);
            
            // console.log(bankBalance);
            // makeTransaction(450.00);
            
            // var transaction = function(priceOfSale) {
                //     if (priceOfSale <= bankBalance){
                    //         bankBalance -= priceOfSale;
                    //         console.log("purchase succesful");
                    //     } else {
                        //         console.log("insufficient funds")
                        //     }
                        // };
                        
                        // var printCustomerName = function(first, last) {
                            //     console.log("First Name: " + first + "Last Name: " +last);
                            // }
                            
                            // var applyForCreditCard = function(creditScore, soul) {
                                //     //call some function to process application
// }

// var bankOperations = []
// bankOperations.push(transaction);
// bankOperations.push(printCustomerName);
// bankOperations.push(applyForCreditCard);



// var student0 = {
//     firstName: "Jayne",
//     lastName: "loo",
//     age: 8,
//     greeting: () => {
//         return 'Hello there'
//     }
// };

// console.log(student0.greeting());

//create a new empty object
// var student1 = new Object();
// student1.firstName = "John";
// student1.lastName = "Parker";
// student1.age = 7;

// var student2 = {};
// student2.firstName = "zack";
// student2.lastName = "Bobo";
// student2.age = 5;

// var students = [];

//for in
// function student(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.greeting = function() {
//          return "Hi, i'm " + this.firstName + " and i'm " + this.age + "years old.";    
//         }
// }
// students.push(new student("Jenny","laga",5));
// students.push(new student("Timmy","turner",8))
// students.push(new student("carl","Jr",4));

// // var student = students[0];

// for (var key in student) {
//     console.log(student[key]);
// }

// var s1 = new student("jenny","laga",5)
// console.log(s1);
// console.log(s1.greeting())
// students.push(student0);
// students.push(student1);
// students.push(student2);

// console.log('students: ',students)
// 
// for (var index = 0; index < students.length; index++) {
//     var student = students[index];
//     console.log(student.greeting());
// }

// console.log(student.firstName);
// console.log(student.lastName);
// console.log(student["firstName"]);
// console.log(student["lastName"]);


