let fullDetails = document.querySelector(".alldetails");
let backbtnn = document.querySelector(".back");

// --------------------create details description page --------------------//
function createdtlcard(items){
    // console.log(items);
    let dtlpage = document.createElement("div");
    dtlpage.classList.add("dtlpage");
    dtlpage.innerHTML=`<div class="leftsideImg">
    <img src="${items.image.large}" alt="img">
    <h2>Price History</h2>
    </div>
    <div class="rightsideDtls">
    <div class="onlynames">
    <h1>${items.name}<span>(${items.symbol})</span></h1>
    </div>
    <div class="priceValue">
    <p>₹ ${items.market_data.current_price.inr}</p>
    <p>$ ${items.market_data.current_price.usd}</p>
    <p>€ ${items.market_data.current_price.eur}</p>
    <p>£ ${items.market_data.current_price.gbp}</p>
    </div>
    <div class="discrip">Discription:<br>
    <p class="discripPara">${items.description.en}</p></div>
    </div>`
    fullDetails.append(dtlpage);
}

//----------------fetching data with id of description-------------------//
async function fetchdata(id){
    let dataa = await fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`);
    dataa = await dataa.json();
    // console.log(dataa);
    createdtlcard(dataa);
}

// --------------for get the data in search.js ---------------//
const params = new URLSearchParams(window.location.search);
let names = params.get("q");
fetchdata(names);

// -------------------back events---------------//
backbtnn.addEventListener("click", ()=>{
    window.location =`search.html`;
})