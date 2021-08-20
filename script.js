console.log('script loaded');


document.querySelector('#generate-card').addEventListener('click', () => {
   getHsInfo();
   
   //load screen when click generate card
   document.querySelector('#screen-load').style.display = 'block';
   document.querySelector('#start-content').style.display = 'none';


   setTimeout(() => {
       
       document.querySelector('#screen-load').style.display = 'none';
   }
   , 1850);


   document.querySelector('#generate-card').disabled = true;
   setTimeout(() => {
       document.querySelector('#generate-card').disabled = false;
   }
   , 1850);

});



async function getHsInfo() {
    const response = await fetch('./hsInfo');
    const data = await response.json();

    

    let hsCardName = data[Math.floor(Math.random()*data.length)].name;

    let hsCardDesc = data[Math.floor(Math.random()*data.length)].description;

    let hsCardObtain = data[Math.floor(Math.random()*data.length)].howToGet;

    let hsCardImg = data[Math.floor(Math.random()*data.length)].img;

    // if hsCardImg == null, then use default image
    if (hsCardImg == null) {
        hsCardImg = 'https://i.imgur.com/4g6h1Ig.png';
    }
    
    

    document.querySelector('.title-card').innerHTML = hsCardName;
    document.querySelector('.desc-card').innerHTML = hsCardDesc;
    document.querySelector('.img-card').src = hsCardImg;
    document.querySelector('.obtain-card').innerHTML = hsCardObtain;

    // console.log(hsCardName);
    // console.log(hsCardDesc);
    // console.log(hsCardImg);
    // console.log(hsCardObtain);
   

}






