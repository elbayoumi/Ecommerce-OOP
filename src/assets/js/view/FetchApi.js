export default class FechApi{
    static card =document.querySelector(".card")
    static seemore = document.querySelector(".seemore")
    
    static fechApi(){
        fetch(`https://fakestoreapi.com/products?limit=${localStorage.getItem("pagenation")||5}`)
            .then(res=>res.json())
            .then(json=>{
                // card.innerHTML+=json. 
                // let jsonn=JSON.parse(json)   
                json.forEach(element => {
                    this.card.innerHTML+=`<div> 
                    <img src=${element.image}>
                   <input type="button" value="${element.title}" name="lastddddddddddname" class="card_text">
                    </div>`
                });
                console.log(json.length)
                // this.card.emit("helo")
                localStorage.setItem("pagenation",json.length);
                this.seemore.addEventListener("click",()=>{
                    let count=localStorage.getItem("pagenation");
                    localStorage.removeItem("pagenation");
                    localStorage.setItem("pagenation",Number(count)+5)
                    location.reload();
                    
                })
            })
            
    }
}