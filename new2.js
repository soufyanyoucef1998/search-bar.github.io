/*let datausertemplate = document.querySelector('[data-user-template]');
let cardContainer = document.querySelector('[data-user-cards-container]');
let search = document.querySelector('[data-search]');
let users = [];

search.addEventListener('input', e =>{
    let value = e.target.value.toLowerCase();
    users.forEach(userc =>{
    let isVisible = userc.name.toLowerCase().includes(value) 
                              ||
                    userc.email.toLowerCase().includes(value)
    
    userc.elem.classList.toggle('hide',!isVisible)
    })
})






fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    return res.json()
   
})
.then((data)=>{
   users =  data.map(user => {
        
        let rr = datausertemplate.content.cloneNode(true).children[0];
        let header = rr.querySelector('[data-header]');
        let body =rr.querySelector('[data-body]');
        header.textContent = user.name;
        body.textContent = user.email;
        cardContainer.append(rr);
        return {name:user.name,email:user.email,elem:rr}

    });
})*/
let searcBar = document.querySelector('[data-search]');
let dataTemplate = document.querySelector('[data-user-template]');
let dataUserCards = document.querySelector('[data-user-cards-container]');
let  dataHEADER = document.querySelector('[data-header]');
let USERS = []

searcBar.addEventListener('input',e =>{


USERS.forEach(user1 =>{
    let inputValue = e.target.value.toLowerCase(); 
    let isVisible = user1.username.toLowerCase().includes(inputValue) 
    ||
user1.email.toLowerCase().includes(inputValue)

if(!isVisible){
    user1.ele.classList.add('hide')
}else{
    user1.ele.classList.remove('hide')
}
    
})

})




let  dataCard = document.querySelector('.card');
 fetch('https://jsonplaceholder.typicode.com/users')
 .then(res =>{
    return res.json();
 })
 .then(data =>{

   
    USERS = data.map(user => {
    let userCard = dataTemplate.content.cloneNode(true).children[0];
    dataUserCards.appendChild(userCard);
    let header = userCard.querySelector('[data-header]');
    let body = userCard.querySelector('[data-body]');
    header.textContent = user.username;
    body.textContent = user.email;
    return {username:user.username,email:user.email,ele:userCard}
    });
    
    console.log(USERS)

 })
