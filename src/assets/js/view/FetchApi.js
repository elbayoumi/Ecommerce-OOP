export default class FechApi{
    static card =document.querySelector(".card")

    static fechApi(){
        fetch('https://fakestoreapi.com/products')
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
                console.log(json[0])
            })
    }
}