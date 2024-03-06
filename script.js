
const button = document.getElementById("Button");
 button.addEventListener('click', async ()=> {
    const randomUser =  await fetchdata();
    displaydata(randomUser);

 });

const url = "https://randomuser.me/api/";

async function fetchdata()
{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data.results[0];
}
function displaydata(user){
    if(user){
        const {name, email, picture} = user;
        const show = document.getElementById("user-container");
        show.innerHTML = `
        <img src="${picture.large}">
        <p> Name: ${name.first} ${name.last}</p>
        <p> Email : ${email}</p>
        `;

    }
}





  