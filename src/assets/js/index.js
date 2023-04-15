import HoldElement from './controler/HoldElement.js';
import Current from './controler/Current.js';
import CheckLogin from './controler/CheckLogin.js';
import FetchApi from './view/FetchApi.js';
const signOut = document.querySelector(".signOut")
const seemore = document.querySelector(".seemore")
const seeless = document.querySelector(".seeless")
window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    FetchApi.fechApi(localStorage.getItem("pagenation"))
  });

  const pagination=(prop,opreator)=>{

    return prop.addEventListener("click",()=>{
        
            let count=localStorage.getItem("pagenation")||5;

            switch (opreator) {
                case "+":count=Number(count)+5;break;
                case "-":count=Number(count)-5;break;
            };

            localStorage.removeItem("pagenation");
            localStorage.setItem("pagenation",count);
            localStorage.getItem("pagenation")>=20?seemore.style.display="none":seemore.style.display="block";
            // localStorage.getItem("pagenation")<=5?seemore.style.display="block":seemore.style.display="none";
            // location.reload();
            // console.log("sssssssss")
            FetchApi.fechApi(localStorage.getItem("pagenation"));

        });
    
  }  
pagination(seemore,"+");
pagination(seeless,"-");
// HoldElement.allPassword.forEach((prop)=>{
//     // prop.classList.add="password_none"
//     prop.style.display="none";
// });
// HoldElement.allPassword.classList = 'password_none';
// window.addEventListener("load", (event) => {
//     console.log("page is fully loaded");
   
//   });
  
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
    localStorage.removeItem("pagenation");
   Current.welcome_page.style.display = "block";
    localStorage.removeItem('current');
    Current.productesPage.style.display = "none";
});