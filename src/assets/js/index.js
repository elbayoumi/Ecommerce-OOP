import HoldElement from './controler/HoldElement.js';
import Current from './controler/Current.js';
import CheckLogin from './controler/CheckLogin.js';
import FetchApi from './view/FetchApi.js';
const signOut = document.querySelector(".signOut")

// HoldElement.allPassword.forEach((prop)=>{
//     // prop.classList.add="password_none"
//     prop.style.display="none";
// });
// HoldElement.allPassword.classList = 'password_none';
// window.addEventListener("load", (event) => {
//     console.log("page is fully loaded");
   
//   });
  
 FetchApi.fechApi()
Current.current();
HoldElement.clickOnContinue();

HoldElement.regestrationAndLogin();
document.body.addEventListener("click", () => {
    setInterval(() => {
        HoldElement.error.innerHTML = '';
        HoldElement.success.innerHTML='';
    }, 10000)
})

signOut.addEventListener("click", () => {
    localStorage.removeItem("user");
   Current.welcome_page.style.display = "block";
    localStorage.removeItem('current');
    Current.productesPage.style.display = "none";
});