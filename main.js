 function submitForm() {
  let phone = document.getElementById('phone').value;
  let email = document.getElementById('email').value;
  let date = document.getElementById('date').value;
  let text = document.getElementById('text').value;
  let regexEmail=/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
 let regexPhone=/^\+212[0-9]{9}$/;
  
  if (phone == "") {
            document.getElementById("error1").innerHTML="Enter your Phone No. (starting with +212)";      
  }
  else if(!regexPhone.test(phone)){
    document.getElementById("error1").innerHTML="Invalid phone number should start with +212*********";
   }
   else {
     document.getElementById("error1").innerHTML="valid";
   }
  
  
 if (email == "") {
           document.getElementById("error2").innerHTML="Enter your email  ";
         
      }
      else if(!regexEmail.test(email)){
       document.getElementById("error2").innerHTML="Invalid email should be like that *********@******.***";
      }
      else {
        document.getElementById("error2").innerHTML="valid";
      }


 if (date == "") { 
           document.getElementById("error3").innerHTML="Enter your Birthdate ";
          
      }
      else {
        document.getElementById("error3").innerHTML="valid";
      }
    let getDate = new Date(date);
    let year = getDate.getFullYear();

 if (year < 2000 || year > 2023) {
           document.getElementById("error3").innerHTML = "the year should be between 2000 and 2023";
         
    }
  if (text == "") {
           document.getElementById("error4").innerHTML="Enter your Message";
          
        }
        else {
          document.getElementById("error4").innerHTML="valid";
        }
  }