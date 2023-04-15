import HoldElement from './controler/HoldElement.js';
import Current from './controler/Current.js';
import CheckLogin from './controler/CheckLogin.js';
const card =document.querySelector(".card")
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
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                // card.innerHTML+=json. 
                // let jsonn=JSON.parse(json)   
                json.forEach(element => {
                    card.innerHTML+=`<div> 
                    <img src=${element.image}>
                   <input type="button" value="${element.title}" name="lastddddddddddname" class="card_text">
                    </div>`
                });
                console.log(json[0])
            })