import HoldElement from './controler/HoldElement.js';
import Current from './controler/Current.js';
import CheckLogin from './controler/CheckLogin.js';
// HoldElement.allPassword.forEach((prop)=>{
//     // prop.classList.add="password_none"
//     prop.style.display="none";
// });
// HoldElement.allPassword.classList = 'password_none';
Current.current();
HoldElement.clickOnContinue();

HoldElement.regestrationAndLogin();
document.body.addEventListener("click", () => {
    setInterval(() => {
        HoldElement.error.innerHTML = '';
        HoldElement.success.innerHTML='';
    }, 10000)
})
