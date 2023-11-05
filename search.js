let backbtn = document.querySelector(".back");
let inputs = document.querySelector("input");
let mainbtn = document.querySelector(".mainsearchbtn");
let allcoinses = document.querySelector(".allCoins");

function moreinfo(allbtns){
    // console.log(allbtns);
    allbtns.forEach(button=>{
        button.addEventListener("click",detailbtn);
    })
}

function detailbtn(e){
    // console.log(e.target)
    let val = e.target.parentElement.children[1].innerText;
    // console.log(val);
    window.location =`details.html?q=${val}`;

}



function Coinscontainer(result){
    allcoinses.innerHTML="";
    // console.log(result.coins);
    let Allcoins = result.coins;
    Allcoins.forEach((item)=>{
        // console.log(item);
        let onecoin = document.createElement("div");
        onecoin.classList.add("cards");
        onecoin.innerHTML=`<div class="leftside"><img src="${item.thumb}">
        <h1>${item.name}</h1><h1>${item.symbol}</h1></div>
        <a>${item.api_symbol}</a>
        <button class="morbtn">More Info</button>` 

        let dtsbtn = document.querySelectorAll(".morbtn");
        allcoinses.appendChild(onecoin);
        moreinfo(dtsbtn);
    })
}

async function  makefuntion(){
    let fetchdata =  await fetch(`https://api.coingecko.com/api/v3/search?query=${inputs.value}`)
    fetchdata = await fetchdata.json();
    //   console.log(fetchdata);
    Coinscontainer(fetchdata);
}


mainbtn.addEventListener("click",()=>{
    makefuntion();
})

backbtn.addEventListener("click", ()=>{
    window.location =`index.html`;
})