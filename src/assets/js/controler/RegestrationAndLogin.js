import CheckLogin from "./CheckLogin.js";
export default class RegestrationAndLogin {
    static confirmCreate = document.querySelector(".confirmCreate");
    static email_confirmation = document.querySelector(".email_confirmation");
    static password_confirmation = document.querySelector(".password_confirmation");
    static error = document.querySelector(".error");
    static regestration = document.querySelector(".regestration");
    static create = document.querySelector(".create");
    static login = document.querySelector("[value='login']");
    static backToLogin = document.querySelector("[value='Back to login']")
    static sign = document.querySelector(".sign");
    static success = document.querySelector(".success");
    static allPassword = document.querySelectorAll(".password");
    static allEmail = document.querySelectorAll('.email');
    static fname= document.querySelector(".fname");
    static backLogin() {

        this.regestration.style.display = "none";
        this.sign.style.display = "block";

        this.allPassword.forEach((prop) => {
            prop.style.display = "none";
        });
        this.allEmail.forEach((prop) => {
            prop.style.display = "block";
        });
        localStorage.removeItem("current");
        localStorage.setItem("current", "login");
    }
    static styleSuccess() {
        this.success.innerHTML = `your regestration mr : ${this.email_confirmation.value} is successfully created`
        this.success.style.color = "green";
        // setInterval(() => {

        //     setTimeout(() => {
        //         this.success.style.fontSize = "x-large"
        //     }, 1)
        //     setTimeout(() => {
        //         this.success.innerHTML = ''
        //     }, 900)
        // }, 1000)

    }
    static regestrationAndLogin() {

        this.confirmCreate.addEventListener("click", () => {
            // console.log(localStorage.getItem("regestratio"))
            if ((this.email_confirmation.value == '') && (this.password_confirmation.value == '')) {
                this.error.innerHTML = `fill in both email and password`

            } else if (CheckLogin.checkElementPattern(this.email_confirmation)) {
                this.error.innerHTML = `your email or Phone number is incorrect`
            }
            else {
                let storge = JSON.parse(localStorage.getItem("regestration"));
                if ((storge.email.indexOf(this.email_confirmation.value) <= -1) && (storge.password.indexOf(this.password_confirmation.value) <= -1)) {
                    storge.email.push(this.email_confirmation.value)
                    storge.password.push(this.password_confirmation.value)
                    storge.fname.push(this.fname.value)
                    localStorage.removeItem("regestration");
                    localStorage.setItem("regestration", JSON.stringify(storge));
                    this.styleSuccess();
                    this.backLogin();
                }
                else if ((storge.email.includes(this.email_confirmation.value)) && (storge.password.includes(this.password_confirmation.value))) {
                    this.error.innerHTML = `this email and password is already exists`

                }
                else if (storge.email.includes(this.email_confirmation.value)) {
                    this.error.innerHTML = `this email  is already exists`
                } else if (storge.password.indexOf(this.password_confirmation.value) > -1) {
                    this.error.innerHTML = `this password  is already exists`
                }



            }
            // setTimeout(() => {
            //     this.error.innerHTML = ""
            // }, 1500)

        })
        // this.regestration.style.display = "none";
        this.create.addEventListener("click", () => {

            this.regestration.style.display = "block";
            this.sign.style.display = "none";
            localStorage.removeItem("current");
            localStorage.setItem("current", "create");
        });
        this.login.addEventListener("click", () => {
            this.regestration.style.display = "none";
            this.sign.style.display = "block";
            localStorage.removeItem("current");
            localStorage.setItem("current", "login");
        })
        this.backToLogin.addEventListener("click", () => {
            this.backLogin()
        })
    }
}