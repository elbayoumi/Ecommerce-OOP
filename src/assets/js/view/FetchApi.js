export default class FechApi{
    static card =document.querySelector(".card")
    
    static fechApi(prop){
        fetch(`https://fakestoreapi.com/products?limit=${prop||5}`)
            .then(res=>res.json())
            .then(json=>{
                // card.innerHTML+=json. 
                // let jsonn=JSON.parse(json)   
                this.card.innerHTML=''
                json.forEach(element => {
                    this.card.innerHTML+=`<div> 
                    <img src=${element.image}>
                   <input type="button" value="${element.title}" name="lastddddddddddname" class="card_text">
                    </div>`
                });
                // console.log(json.length)
                // this.card.emit("helo")
                localStorage.setItem("pagenation",json.length);

            })
            
    }
}