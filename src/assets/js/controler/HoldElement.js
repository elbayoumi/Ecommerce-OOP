import RegestrationAndLogin from "./RegestrationAndLogin.js";
import CheckLogin from "./CheckLogin.js";
class HoldElement {
    // static password = document.querySelector(".continue_pass");
    static password_val = document.querySelector("#password");
    static email = document.querySelector(".continue_email");
    static allPassword = document.querySelectorAll(".password");
    static allEmail = document.querySelectorAll('.email');
    static email_or_mobile = document.querySelector(".email_or_mobile");
    static continue_pass = document.querySelector(".continue_pass");
    static sign = RegestrationAndLogin.sign;
    static regestration = RegestrationAndLogin.regestration;
    static create = RegestrationAndLogin.create;
    static login = RegestrationAndLogin.login;
    static error = RegestrationAndLogin.error;
    static success =RegestrationAndLogin.success;

    static checkEmailRegester() {
        if ((this.email_or_mobile.value === "")) {
            this.error.innerHTML = `<p>confirm your email</p>`;
        } else if (this.email_or_mobile.value.split("").length <= 3) {
            this.error.innerHTML = `<p>confirm your lingth email</p>`;

        } else if (!CheckLogin.checkEmail()) {

            // console.log(!CheckLogin.checkEmail())
            this.error.innerHTML = `<p>your email not valid plz regstration</p>`;
        }
        else {
            this.allPassword.forEach((prop) => {
                prop.style.display = "block";
            });
            this.allEmail.forEach((prop) => {
                prop.style.display = "none";
            });
            localStorage.removeItem("current");
            localStorage.setItem("current", "password");
        }
    }
    static clickOnContinue() {
        this.email.addEventListener("click", () => {
            this.checkEmailRegester();

        });
        this.email_or_mobile.addEventListener('keypress', (e) => {
            e.key === "Enter" ? this.checkEmailRegester() : false
        })
        this.continue_pass.addEventListener("click", () => {
            // console.log(this.password_val.value)
            CheckLogin.checkPassword() ? false : this.error.innerHTML = `<p>your password not valid plz regstration</p>`
        })
        this.password_val.addEventListener('keypress', (e) => {
            if (e.key === "Enter") {
                console.log(CheckLogin.checkPassword())
                CheckLogin.checkPassword() ? false : this.error.innerHTML = `<p>your password not valid plz regstration</p>`
                // else return false
            }
        })
        // console.log(this.error.innerHTML!='')
        //  if (this.error.innerHTML!=''){
        //     setTimeout(() => {
        //         this.error.innerHTML=''
        //     },100)
        //  }

    }
    static regestrationAndLogin() {
        RegestrationAndLogin.regestrationAndLogin()
    }

}
export default HoldElement;
