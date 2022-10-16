const allTabsBody = document.querySelectorAll('.tab-body-single');
const allTabsHead = document.querySelectorAll('.tab-head-single');
const searchForm = document.querySelector('.app-header-search');
// let searchList = document.getElementById('search-list');

let activeTab = 1, allData,allData1,allData2,allData3,allData4,allData5,allData6;
myArray=[];
myArray1=[];
myArray2=[];
myArray3=[];
myArray4=[];
myArray5=[];
myArray6=[];


const init = () => {
    showActiveTabBody();
    showActiveTabHead();
}

const showActiveTabHead = () => allTabsHead[activeTab - 1].classList.add('active-tab');

const showActiveTabBody = () => {
    hideAllTabBody();
    allTabsBody[activeTab - 1].classList.add('show-tab');
}

const hideAllTabBody = () => allTabsBody.forEach(singleTabBody => singleTabBody.classList.remove('show-tab'));
const hideAllTabHead = () => allTabsHead.forEach(singleTabHead => singleTabHead.classList.remove('active-tab'));

// even listeners
window.addEventListener('DOMContentLoaded', () => init());
// button event listeners
allTabsHead.forEach(singleTabHead => {
    singleTabHead.addEventListener('click', () => {
        hideAllTabHead();
        activeTab = singleTabHead.dataset.id;
        showActiveTabHead();
        showActiveTabBody();
    });
});

const getInputValue = (event) => {
    event.preventDefault();
    let searchText = searchForm.search.value;
    fetchAllSuperHero(searchText);
    console.log(searchText)
}

// search form submission
searchForm.addEventListener('submit', getInputValue);

// api key => 727054372039115
const fetchAllSuperHero = async(searchText) => {
    let url = `https://api.opensea.io/api/v1/collection/${searchText}`;
    try{
        const response=await fetch(url);
        allData = await response.json();
        console.log(allData.collection.featured_image_url);
        myArray=allData
        header(myArray)
    }
    catch(error){
        console.log(error)
    }
    // try{
    //     const response = await fetch(url);
    //     allData = await response.json();
    //     if(allData.response === 'success'){
    //         // console.log(allData);
    //         showSearchList(allData.results);
    //     }
    // } catch(error){
    //     console.log(error);
    // }

}

function header(allData){
    console.log(allData)
    document.querySelector('.app-body-content-thumbnail').innerHTML = `
        <img src = "${allData.collection.image_url ? allData.collection.image_url : ""}">
    `;
    document.querySelector('#result').textContent = allData.collection.name;
    document.querySelector('.connections').innerHTML = `
    <li>
        <span>collection name / Slug identification</span>
        <span>${allData.collection.name ? allData.collection.name : "_ _"} / ${allData.collection.slug ? allData.collection.slug : "_ _"}</span>
    </li>
    <li>
    <span>description</span>
    <span>${allData.collection.description ? allData.collection.description : "No Description Available"}</span>
    </li>
    `;
    document.querySelector('.appearance').innerHTML = `
    <li>
        <span>
            <i class = "fas fa-star"></i> Market cap(in ETH)
        </span>
        <span>${allData.collection.stats.total_volume ? allData.collection.stats.total_volume.toFixed(1) : "No Update"}</span>
    </li>
    <li>
        <span>
            <i class = "fas fa-star"></i>Average price(in ETH)
        </span>
        <span>${allData.collection.stats.average_price ? allData.collection.stats.average_price.toFixed(1) : "Not Updated"}</span>
    </li>
    <li>
        <span>
            <i class = "fas fa-star"></i>Floor Price(in Eth)
        </span>
        <span>${allData.collection.stats.floor_price ? allData.collection.stats.floor_price.toFixed(1) : "_ _"}</span>
    </li>
    <li>
        <span>
            <i class = "fas fa-star"></i>total items
        </span>
        <span>${allData.collection.stats.count ? allData.collection.stats.count : "Not Updated"}</span>
    </li>
    <li>
        <span>
            <i class = "fas fa-star"></i>saled items
        </span>
        <span>${allData.collection.stats.total_sales ? allData.collection.stats.total_sales : "Not Updated"}</span>
    </li>
    <li>
        <span>
            <i class = "fas fa-star"></i>total owners
        </span>
        <span>${allData.collection.stats.num_owners ? allData.collection.stats.num_owners : "Not Updated"}</span>
    </li>
    `;
    document.querySelector('.powerstats').innerHTML = `
    <li>
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
        </svg>
        <span>Telegram</span>
    </div>
    <span>${allData.collection.telegram_url ? allData.collection.telegram_url : "&#10069Not available"}</span>
    </li>
    <li>
    <div>
        <i class="fab fa-twitter"></i>
        <span>Twitter</span>
    </div>
    <span>${allData.collection.twitter_username ? allData.collection.twitter_username : "&#10069Not available"}</span>
    </li>
    <li>
    <div>
        <i class="fab fa-instagram"></i>
        <span>Instagram</span>
    </div>
    <span>${allData.collection.instagram_username ? allData.collection.instagram_username : "&#10069Not available"}</span>
    </li>
`;

    document.querySelector('.biography').innerHTML = `
    <li>
    <p class = "stats_title">Market Volume (in ETH)</p>                                    
    </li>
    <li>
        <span>in Last 1h</span>
        <span>${allData.collection.stats.one_hour_volume ? allData.collection.stats.one_hour_volume.toFixed(1)  : "-"}</span>
        <span>6h</span>
        <span>${allData.collection.stats.six_hour_volume ? allData.collection.stats.six_hour_volume.toFixed(1) : "-"}</span>
        <span>1d</span>
        <span>${allData.collection.stats.one_day_volume ? allData.collection.stats.one_day_volume.toFixed(1) : "-"}</span>
        <span>7d</span>
        <span>${allData.collection.stats.seven_day_volume ? allData.collection.stats.seven_day_volume.toFixed(1) : "-"}</span>
        <span>30d</span>
        <span>${allData.collection.stats.thirty_day_volume ? allData.collection.stats.thirty_day_volume.toFixed(1) : "-"}</span>
    </li>
    <li>
    <p class = "stats_title">Change in Market Volume (%)</p>                                    
    </li>
    <li>
    <span>in Last 1h</span>
    <span>${allData.collection.stats.one_hour_change ? allData.collection.stats.one_hour_change.toFixed(1): "-"}</span>
    <span>6h</span>
    <span>${allData.collection.stats.six_hour_change ? allData.collection.stats.six_hour_change.toFixed(1): "-"}</span>
    <span>1d</span>
    <span>${allData.collection.stats.one_day_change ? allData.collection.stats.one_day_change.toFixed(1) : "-"}</span>
    <span>7d</span>
    <span>${allData.collection.stats.seven_day_change ? allData.collection.stats.seven_day_change.toFixed(1) : "-"}</span>
    <span>30d</span>
    <span>${allData.collection.stats.thirty_day_change ? allData.collection.stats.thirty_day_change.toFixed(1) : "-"}</span>
    </li>
    <li>
    <p class = "stats_title">Total number of Sales<p>                                    
    </li>
    <li>
    <span>in Last 1h</span>
    <span>${allData.collection.stats.one_hour_sales ? allData.collection.stats.one_hour_sales.toFixed(1): "-"}</span>
    <span>6h</span>
    <span>${allData.collection.stats.six_hour_sales ? allData.collection.stats.six_hour_sales.toFixed(1): "-"}</span>
    <span>1d</span>
    <span>${allData.collection.stats.one_day_sales ? allData.collection.stats.one_day_sales.toFixed(1) : "-"}</span>
    <span>7d</span>
    <span>${allData.collection.stats.seven_day_sales ? allData.collection.stats.seven_day_sales.toFixed(1) : "-"}</span>
    <span>30d</span>
    <span>${allData.collection.stats.thirty_day_sales ? allData.collection.stats.thirty_day_sales.toFixed(1) : "-"}</span>
    </li>
    <li>
    <p class = "stats_title">Change in Sales (%)</p>                                    
    </li>
    <li>
    <span>in Last 1h</span>
    <span>${allData.collection.stats.one_hour_sales_change ? allData.collection.stats.one_hour_sales_change.toFixed(1): "-"}</span>
    <span>6h</span>
    <span>${allData.collection.stats.six_hour_sales_change ? allData.collection.stats.six_hour_sales_change.toFixed(1): "-"}</span>
    <span>1d</span>
    <span>${allData.collection.stats.one_day_sales_change ? allData.collection.stats.one_day_sales_change.toFixed(1) : "-"}</span>
    <span>7d</span>
    <span>${allData.collection.stats.seven_day_sales_change ? allData.collection.stats.seven_day_sales_change.toFixed(1) : "-"}</span>
    <span>30d</span>
    <span>${allData.collection.stats.thirty_day_sales_change ? allData.collection.stats.thirty_day_sales_change.toFixed(1) : "-"}</span>
    </li>
    <li>
    <p class = "stats_title">Average Sales Price</p>                                    
    </li>
    <li>
    <span>in Last 1h</span>
    <span>${allData.collection.stats.one_hour_average_price ? allData.collection.stats.one_hour_average_price.toFixed(1): "-"}</span>
    <span>6h</span>
    <span>${allData.collection.stats.six_hour_average_price ? allData.collection.stats.six_hour_average_price.toFixed(1): "-"}</span>
    <span>1d</span>
    <span>${allData.collection.stats.one_day_average_price ? allData.collection.stats.one_day_average_price.toFixed(1) : "-"}</span>
    <span>7d</span>
    <span>${allData.collection.stats.seven_day_average_price ? allData.collection.stats.seven_day_average_price.toFixed(1) : "-"}</span>
    <span>30d</span>
    <span>${allData.collection.stats.thirty_day_average_price ? allData.collection.stats.thirty_day_average_price.toFixed(1) : "-"}</span>
    </li>
    `;
    document.querySelector('.galleryx').innerHTML = `
    <li>
    <p class = "stats_title">Featured Images</p>                                    
</li>
<li>
    <div class="gallery">
    <span >
    <img src = "${allData.collection.image_url ? allData.collection.image_url : ""}">
    </span>
    </div>
    <span class="gallery">
    <img src = "${allData.collection.large_image_url ? allData.collection.large_image_url : ""}">
    </span>
</li>
`;
}

// const showSearchList = (allData) => {
//     searchList.innerHTML = "";
//     allData.forEach(allDataItem => {
//         const divElem = document.createElement('div');
//         divElem.classList.add('search-list-item');
//         divElem.innerHTML = `
//             <img src = "${allDataItem.image.url ? allDataItem.image.url : ""}" alt = "">
//             <p allData-id = "${allDataItem.id}">${allDataItem.name}</p>
//         `;
//         searchList.appendChild(divElem);
//     });
// }

// searchForm.search.addEventListener('keyup', () => {
//     if(searchForm.search.value.length > 1){
//         fetchAllSuperHero(searchForm.search.value);
//     } else {
//         searchList.innerHTML = "";
//     }
// });

// searchList.addEventListener('click', (event) => {
//     let searchId = event.target.allDataset.id;
//     let singleallData = allData.results.filter(singleallData => {
//         return searchId === singleallData.id;
//     })
//     showSuperheroDetails(singleallData);
//     searchList.innerHTML = "";
// });

// const showSuperheroDetails = (allData) => {
//     console.log(allData);
//     document.querySelector('.app-body-content-thumbnail').innerHTML = `
//         <img src = "${allData.collection.featured_image_url}">
//     `;

//     document.querySelector('.name').textContent = allData[0].name;
//     document.querySelector('.powerstats').innerHTML = `
//     <li>
//         <div>
//             <i class = "fa-solid fa-shield-halved"></i>
//             <span>intelligence</span>
//         </div>
//         <span>${allData[0].powerstats.intelligence}</span>
//     </li>
//     <li>
//         <div>
//             <i class = "fa-solid fa-shield-halved"></i>
//             <span>strength</span>
//         </div>
//         <span>${allData[0].powerstats.strength}</span>
//     </li>
//     <li>
//         <div>
//             <i class = "fa-solid fa-shield-halved"></i>
//             <span>speed</span>
//         </div>
//         <span>${allData[0].powerstats.speed}</span>
//     </li>
//     <li>
//         <div>
//             <i class = "fa-solid fa-shield-halved"></i>
//             <span>durability</span>
//         </div>
//         <span>${allData[0].powerstats.durability}</span>
//     </li>
//     <li>
//         <div>
//             <i class = "fa-solid fa-shield-halved"></i>
//             <span>power</span>
//         </div>
//         <span>${allData[0].powerstats.power}</span>
//     </li>
//     <li>
//         <div>
//             <i class = "fa-solid fa-shield-halved"></i>
//             <span>combat</span>
//         </div>
//         <span>${allData[0].powerstats.combat}</span>
//     </li>
//     `;

//     document.querySelector('.biography').innerHTML = `
//     <li>
//         <span>full name</span>
//         <span>${allData[0].biography['full-name']}</span>
//     </li>
//     <li>
//         <span>alert-egos</span>
//         <span>${allData[0].biography['alter-egos']}</span>
//     </li>
//     <li>
//         <span>aliases</span>
//         <span>${allData[0].biography['aliases']}</span>
//     </li>
//     <li>
//         <span>place-of-birth</span>
//         <span>${allData[0].biography['place-of-birth']}</span>
//     </li>
//     <li>
//         <span>first-apperance</span>
//         <span>${allData[0].biography['first-appearance']}</span>
//     </li>
//     <li>
//         <span>publisher</span>
//         <span>${allData[0].biography['publisher']}</span>
//     </li>
//     `;

//     document.querySelector('.appearance').innerHTML = `
//     <li>
//         <span>
//             <i class = "fas fa-star"></i> gender
//         </span>
//         <span>${allData[0].appearance['gender']}</span>
//     </li>
//     <li>
//         <span>
//             <i class = "fas fa-star"></i> race
//         </span>
//         <span>${allData[0].appearance['race']}</span>
//     </li>
//     <li>
//         <span>
//             <i class = "fas fa-star"></i> height
//         </span>
//         <span>${allData[0].appearance['height'][0]}</span>
//     </li>
//     <li>
//         <span>
//             <i class = "fas fa-star"></i> weight
//         </span>
//         <span>${allData[0].appearance['weight'][0]}</span>
//     </li>
//     <li>
//         <span>
//             <i class = "fas fa-star"></i> eye-color
//         </span>
//         <span>${allData[0].appearance['eye-color']}</span>
//     </li>
//     <li>
//         <span>
//             <i class = "fas fa-star"></i> hair-color
//         </span>
//         <span>${allData[0].appearance['hair-color']}</span>
//     </li>
//     `;

//     document.querySelector('.connections').innerHTML = `
//     <li>
//         <span>group--affiliation</span>
//         <span>${allData[0].connections['group-affiliation']}</span>
//     </li>
//     <li>
//         <span>relatives</span>
//         <span>${allData[0].connections['relatives']}</span>
//     </li>
//     `;
// }


// let url1 = `https://api.opensea.io/api/v1/collection/renga`;
// try{
//     const response1=await fetch(url1);
//     allData1 = await response1.json();
//     // console.log(allData1.collection);
//     myArray1=allData1
//     header1(myArray1)
// }
// catch(error1){
//     console.log(error1)
// }

// function header1(allData1){
//     console.log(allData1)
//     document.querySelector('.card bg-c-purple order-card whale-card').innerHTML = `
//     <div class="card-body">
//     <h2 class="text-white">${allData1.collection.primary_asset_contracts.name}</h2>
//     </div>

//     `;
// }
