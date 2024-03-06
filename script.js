const url = "https://api.thecatapi.com/v1/images/search";
const img = document.getElementById("catImage");
async function displayimage(){
    const response = await fetch(url);
    const data = await response.json();
     img.src =data[0].url;

}
displayimage();
