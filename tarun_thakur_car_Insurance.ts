let x = true;
let premium = 0;
const readlineSync = require("readline-Sync");
let carBrand = " ";
let carModel = " ";
let y =true;
let name2 = " ";
let email = " ";
let phoneno = " ";
let age = 0;
let yearPlan =" ";
let z =true;
let conf = true;
let finalAmount = "";
let carName:string;
let carArr = " ";
let confir = '';
let v = true;

const IndiaCost = new Intl.NumberFormat('hi-IN',{
    style: 'currency'
    ,currency: 'INR',
     });
     

function userDetails()
{
     
     let Input = true;
     let Input1 = true;
     let Input2 = true;
     let Input3 = true;
    while(Input)
    {
        name2 = readlineSync.question("Enter your name: ");
        let func = new RegExp("^[a-z A-Z]+$");
        if(name2.length > 0 && name2.toString().match(func))
        {
            Input = false;
        }
        else
        {
            console.log("Enter a valid name");
        }
    }
    while(Input1)
    {
        email = readlineSync.question("Enter your email address : ");
        let emailReg = new RegExp("^[a-zA-Z0-9]+[@][a-zA-Z][.com]")
        if(email.length > 0 && email.toString().match(emailReg))
        {
            Input1 = false;
        }  
        else
        {
            console.log("Enter a valid email address");
        }
    }
    while(Input2)
    {      
        phoneno = readlineSync.question("Enter your phone number : ");
        let phoneReg = new RegExp("^[1-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$")
        if(phoneno.match(phoneReg))
        {
            Input2 = false;
        }
        else
        {
            console.log("Enter a valid phone number");
        }
    }
    while(Input3)
    {
        age = readlineSync.question("Enter your age: ") as number;
        if(16 < age && age < 70)
        {
            Input3 = false
        }
        else
        {
            console.log("Car cannot be ensured for the age group");
        }
    }
}

   function brand(){
    while(x)
     {         
       console.log("Car Brands we Ensure:");
       console.log("Mercedes");
       console.log("Lexus");
       console.log("Jaguar");
       console.log("BMW");
       carArr = readlineSync.question("Enter the name of the brand : ");  
        switch(carArr)
        {
            case "Mercedes":
                carBrand = "Mercedes";
                userCarModel(carBrand);
                x=false;

                break;

            case "Lexus":
                carBrand = "Lexus";
                userCarModel(carBrand);
                x=false;
                break;


            case "Jaguar":
                carBrand = "Jaguar";
                userCarModel(carBrand);
                x=false;
                break; 


            case "BMW":
                carBrand = "BMW";
                userCarModel(carBrand);
                x=false;
                break;


            default:
                console.log("Car not eligible for insurance");
        }
    }
 }

function userCarModel(makeName:string)
{
    while(y)
        {
            if(makeName == "Mercedes")
            {
                console.log("Mercedes models we ensure : ");
                console.log("A-Class");
                console.log("E-Class");
                console.log("Maybach");
                carName = readlineSync.question("Enter the car name : ");
                switch(carName)
                {
                    case "A-Class":
                        carName = "A-Class";
                        premium += 580000/12;
                        console.log("Base monthly premium : " + IndiaCost.format(premium));
                        userPlan(premium);
                        y = false;
                        break;

                    case "E-Class":
                        carName = "E-Class";
                        premium += 630000/12;
                        console.log("Base monthly premium : " + IndiaCost.format(premium));
                        userPlan(premium);
                        y = false;
                        break;
                        
                    case "Maybach":
                        carName = "Maybach";
                        premium += 1850000/12;
                        console.log("Base monthly premium : " + IndiaCost.format(premium));
                        userPlan(premium);
                        y = false;
                        break;
                        
                    default :
                    console.log("Not eligible for insurance due to amount being low");
                    break;    
                }
            }
            else if(makeName == "Lexus")
            {
                console.log("Lexus models we ensure : ");
                console.log("ES");
                console.log("LX");
                console.log("NS");
                carName = readlineSync.question("Enter the car name : ");
             
                switch(carName)
            {
                    case "ES":
                    carName = "ES";
                    premium += 340000/12;
                    console.log("Base monthly premium : " + IndiaCost.format(premium));
                    userPlan(premium);
                    y = false;
                    break;

                    case "LX":
                    carName = "LX";
                    premium += 570000/12;
                    console.log("Base monthly premium : " + IndiaCost.format(premium));
                    userPlan(premium);
                    y = false;
                    break;
                    
                    case "NS":
                    carName = "NS";    
                    premium += 8600000/12;
                    console.log("Base monthly premium : " + IndiaCost.format(premium));
                    userPlan(premium);
                    y = false;
                    break;
                    
                   default :
                   console.log("Not eligible for insurance due to amount being low");
                   break;    
            }  
        }
        else if(makeName == "Jaguar")
            {
                console.log("Jaguar models we ensure : ");
                console.log("XE");
                console.log("XF");
                console.log("F-Type");
                carName = readlineSync.question("Enter the car name : ");
             
                switch(carName)
            {
                    case "XE":
                    carName = "XE";    
                    premium += 400000/12;
                    console.log("Base monthly premium : " + IndiaCost.format(premium));
                    userPlan(premium);
                    y = false;
                    break;

                    case "XF":
                    carName = "XF";
                    premium += 600000/12;
                    console.log("Base monthly premium : " + IndiaCost.format(premium));
                    userPlan(premium);
                    y = false;
                    break;
                    
                    case "F-Type":
                    carName = "F-Type";
                    premium += 1000000/12;
                    console.log("Base monthly premium : " + IndiaCost.format(premium));
                    userPlan(premium);
                    y = false;
                    break;
                    
                   default :
                   console.log("Not eligible for insurance due to amount being low");
                   break;    
            }  
        }
        else if(makeName == "BMW")
        {
            console.log("BMW models we ensure : ");
            console.log("3-Series");
            console.log("6-Series");
            console.log("X7");
            carName = readlineSync.question("Enter the car name : ");
         
            switch(carName)
        {
                case "3-Series":
                carName = "3-Series";
                premium += 420000/12;
                console.log("Base monthly premium : " + IndiaCost.format(premium));
                userPlan(premium);
                y = false;
                break;

                case "6-Series":
                carName = "6-Series";
                premium += 680000/12;
                console.log("Base monthly premium : " + IndiaCost.format(premium));
                userPlan(premium);
                y = false;
                break;
                
                case "X7":
                carName = "X7";
                premium += 1500000/12;
                console.log("Base monthly premium : " + IndiaCost.format(premium));
                userPlan(premium);
                y = false;
                break;
                
               default :
               console.log("Not eligible for insurance due to amount being low");
               break;    
        }  
    }
    else
    {
        console.log("Not a valid option")
    }
}
}

function userPlan(Monthly:number)

    {
        while(z)
        {
            
      console.log("For how many years would you like to insure your car(Tenure must be atleast 1 year and atmost 10 years):");

      let yearPlan = readlineSync.question("Enter the years for which you want to ensure your vehicle : ");
      if(yearPlan == 1)
      {
        console.log("Discount Cannot be Availed : " + IndiaCost.format(Monthly));
        finalAmount = IndiaCost.format(Math.round(Monthly));
        confirmation();
        z = false;
      }
      else if(yearPlan > 1 && yearPlan <= 5)
      {
        console.log("Discount Availed : " + IndiaCost.format(Monthly*0.05));
        console.log(IndiaCost.format(Math.round(Monthly - Monthly*0.05)) + " is the discounted price ");
        finalAmount = IndiaCost.format(Math.round(Monthly - Monthly*0.05));
        confirmation();
        z = false;
      }
      else if(yearPlan > 5 && yearPlan <= 10)
      {
        console.log("Discount Availed : " + IndiaCost.format(Monthly*0.1));
        console.log(IndiaCost.format(Math.round(Monthly - Monthly*0.1)) + " is the discounted price");
        finalAmount = IndiaCost.format(Math.round(Monthly - Monthly*0.1));
        confirmation();
        z = false;
      }
      else
      {
        console.log("Enter the number of years between 1 and 10")
      }
    
    //   }
     }
    }
function confirmation()
{
    while(conf)
    {
      confir = readlineSync.question(" Would you like to buy the insurance? (Y/N) ");
      if (confir == "Yes" || confir == "yes" || confir == "y" || confir == "Y")
                {
                    console.log("Name : " + name2);
                    console.log("Email : " + email);
                    console.log("Phone Number : " + phoneno);
                    console.log("Age : " + age);
                    console.log("Brand : " + carBrand);
                    console.log("Model : " + carName);
                    console.log("Monthly Premium : " + finalAmount);
                    finalPayment();
                    conf = false;  
                    break;  
                }
                else if(confir == "NO" || confir == "no" || confir == "n" || confir == "N")
                {
                    console.log("Not bought, Thank You");
                    conf = false;
                    break;
                }
                else
                {
                    console.log("Y/N expected");
                }
}
}

function finalPayment()
{
    while(v)
    {
        if (confir == "Yes" || confir == "yes" || confir == "y" || confir == "Y")
        {
            console.log("Please pay 1st month premium  : " + finalAmount);
            let cardReg = new RegExp("^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$");
            let cardDetail = readlineSync.question("Enter card details : ");
            if (cardDetail.match(cardReg))
            {
                setTimeout(
                function()
                { 
                    console.log("Payment Received"); 
                    console.log("\r\n \r\n Here's your reciept:")
                    console.log("\r\nName : " + name2);
                    console.log("Email : " + email);
                    console.log("Phone Number : " + phoneno);
                    console.log("Age : " + age);
                    console.log("Brand : " + carBrand);
                    console.log("Model : " + carName);
                    console.log("Monthly Premium : " + finalAmount);
                }, 3000);
                v = false;
            }
            else
            {
                console.log("Card number must be atleast 12 digits long");
            }            
        }        
    }
}


userDetails();
brand();
