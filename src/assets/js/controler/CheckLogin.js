export default class CheckLogin{
    static email_or_mobile =document.getElementById("email_or_mobile");
    static pass = document.getElementById("password");
    static checkEmail(){
        let storge = JSON.parse(localStorage.getItem("regestration"));
        return (storge.email.includes(this.email_or_mobile.value));
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