export default class CheckLogin{
    static email_or_mobile =document.getElementById("email_or_mobile");
    static pass = document.getElementById("password");
    static checkEmail(){
        let storge = JSON.parse(localStorage.getItem("regestration"))||false;
        let email=(storge?.email?.indexOf(this.email_or_mobile.value))||-1
        return email > -1? true: false;
    }
    static checkPassword(){
        let storge = JSON.parse(localStorage.getItem("regestration"))||false;
        // let passwo=(storge?.email?.indexOf(this.email_or_mobile.value))||-1
        return (storge.password.indexOf(this.pass.value) > -1)?true:false;
    }
}