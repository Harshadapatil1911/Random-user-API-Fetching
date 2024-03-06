const button = document.getElementById("Button");


async function fetchdata(){
    const response = await fetch(url);
    const data = await response.json();
    return data.results[0];
    console.log(data.results[0]);
};
function displaydata(user){
    const div = document.getElementById("user-container");
    if(user){
        const {name, email,picture,city} = user;
    div.innerHTML = `
    <img src ="${picture.large}">
    <p>Name: ${name.first}</p>
    <p>Email: ${email}</p>
    `;

    };
    
   
    

};
const url = "https://randomuser.me/api/";
button.addEventListener('click', async ()=>{
    const randomuser = await(fetchdata());
    displaydata(randomuser);

});
