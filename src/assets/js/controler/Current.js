export default class Current {
    static sign = document.querySelector(".sign");
    static regestration = document.querySelector(".regestration");
    static allPassword = document.querySelectorAll(".password");
    static allEmail = document.querySelectorAll('.email');
    static current() {
        if (localStorage.getItem('current') == "create") {
            this.regestration.style.display = "block";
            this.sign.style.display = "none";
        } else if (localStorage.getItem('current') == "login") {
            this.regestration.style.display = "none";
            this.sign.style.display = "block";
        } else if (localStorage.getItem('current') == "password") {
            this.regestration.style.display = "none";
            this.allPassword.forEach((prop) => {
                prop.style.display = "block";
            });
            this.allEmail.forEach((prop) => {
                prop.style.display = "none";
            });
        }
    }
}