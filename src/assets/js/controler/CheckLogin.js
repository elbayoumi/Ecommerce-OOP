export default class CheckLogin{
    static email_or_mobile =document.getElementById("email_or_mobile");
    static pass = document.getElementById("password");
    static error = document.querySelector(".error");
    static ValidateEmail(input) {

        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      
        if (input.value.match(validRegex)) {
      
            // this.error.innerHTML="Valid email address!";
        //   document.form1.text1.focus();
      
          return true;
      
        } else {
      
          this.error.innerHTML="Invalid email address!";

        //   document.form1.text1.focus();
      
          return false;
      
        }
      
      }
      static checkEmail(){
        let storge = JSON.parse(localStorage.getItem("regestration"));
let condition= (storge.email.includes(this.email_or_mobile.value)&&(this.ValidateEmail(this.email_or_mobile)||((!isNaN(this.email_or_mobile.value))&&(this.email_or_mobile.value.length==11))))?true:false;
// console.log("codition",condition);
// console.log("lenth",(this.email_or_mobile.value.length==11))
        return condition;
    }
    static checkPassword(){
        let storge = JSON.parse(localStorage.getItem("regestration"));
        if(storge.password.includes(this.pass.value)&&(storge.email.indexOf(this.email_or_mobile.value)==storge.password.indexOf(this.pass.value))){
            localStorage.removeItem("user");
            localStorage.setItem("user",JSON.stringify( {
                username:this.email_or_mobile.value,
                id:storge.email.indexOf(this.email_or_mobile.value)
            }));

            return true;


    }else{
        localStorage.removeItem("user");
        localStorage.removeItem("pagenation");

        return false;
    } 
    
}
}