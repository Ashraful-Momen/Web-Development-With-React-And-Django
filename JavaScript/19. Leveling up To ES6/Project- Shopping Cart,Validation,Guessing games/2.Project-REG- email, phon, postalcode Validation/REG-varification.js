
let Choose = parseInt(prompt(`
Choose Option for Varification: 
-------------------------------
1.Email 
2.Phone 
3.Postal Code

=> Enter Your Choice: `));

switch(Choose){

    case 1:
        let mail = prompt(`Enter Your Email: `);
        
        ValidateEmail(mail);

        break;

    case 2:
        let phone = (prompt(`Enter Your Phone Number: `));

        ValidatePhone(phone);

        break;
    case 3:
        let postalCode = (prompt(`Enter Your Postal Code: `));

        ValidatePostalCode(postalCode);
        break;
    default:{
        alert(`Invalid input ${Choose}`);
    }

}




function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    alert(`${mail} is valid Mail!`)
  }
  else{
    alert("You have entered an invalid email address!");
  }
    
   
}

function ValidatePhone(phone) 
{
 if (/^(?:\+88|88)?(01[3-9]\d{8})$/.test(phone))
  {
    alert(`Your phone number : ${phone} is Valid`)
  }
  else{
    alert("You have entered an invalid Phone Number!");

  }
    
}

function ValidatePostalCode(postalCode) 
{

 if (/^\d{4}$/.test(postalCode))
  {
    alert(`You entered valid Postal Code : ${postalCode}`);
   
  }
  else{
    alert("You have entered an invalid Postal Code!")
   
  }
    
}