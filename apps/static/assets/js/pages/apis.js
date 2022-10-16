
// API number 1 for fetching the COLLECTIONS LEADERBOARD from ETHEREUM blockchain
// variable used 'none'
fetch("https://api.rarible.org/v0.1/data/leaderboards/collections?blockchain=ETHEREUM&period=D1&sort=VOLUME_USD_DESC&limit=20&offset=0").then((data)=>{
    // console.log(data)
    return data.json();
}).then((objectData)=>{
    let tableData="";
    objectData.map((values,index)=>{
        tableData+=`
        <tr>
            <th scope='row'>${values.id}</th>
            <td>${values.volumeUsd.currency} ${values.volumeUsd.value}</td>
            <td>${values.volumeUsd.changePercent}
            <div class="progress mt-1" style="height:4px;">
            <div class="progress-bar bg-warning rounded" role="progressbar" style="width:${values.volumeUsd.changePercent}% ;" aria-valuenow=${values.volumeUsd.changePercent} aria-valuemin="-100" aria-valuemax="100"></div>
            </div>
            </td>
            <td>${values.floorPrice.currency} ${values.floorPrice.value}</td>
            <td>${values.totalItemSupply}</td>
            <td>${values.ownersCount}</td>

            </tr>
          `;
    });
    document.getElementById("api1").innerHTML=tableData;
})



// API number 3 for fetching the COLLECTIONS LEADERBOARD from POLYGON blockchain
// variable used 'y'
fetch("https://api.rarible.org/v0.1/data/leaderboards/collections?blockchain=POLYGON&period=D1&sort=VOLUME_USD_DESC&limit=15&offset=0").then((datay)=>{
    // console.log(datay)
    return datay.json();
}).then((objectDatay)=>{
    let tableDatay="";
    objectDatay.map((valuesy,index)=>{
        tableDatay+=`
        <tr>
            <th scope='row'>${valuesy.id}</th>
            <td>${valuesy.volumeUsd.currency} ${valuesy.volumeUsd.value}</td>
            <td>${valuesy.volumeUsd.changePercent}
            <div class="progress mt-1" style="height:4px;">
            <div class="progress-bar bg-warning rounded" role="progressbar" style="width: 60%;" aria-valuenow="{values.volumeUsd.changePercent}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </td>
            <td>${valuesy.totalItemSupply}</td>
            <td>${valuesy.ownersCount}</td>
          </tr>
          `;
    });
    document.getElementById("api3").innerHTML=tableDatay;
})





// API number 4 for fetching the SELLERS LEADERBOARD from Opensea
// varible used 'a'
fetch("https://api.rarible.org/v0.1/data/leaderboards/sellers?blockchain=ETHEREUM&source=OPEN_SEA&period=D1&limit=10").then((dataa)=>{
    // console.log(dataa)
    return dataa.json();
}).then((objectDataa)=>{
    let tableDataa="";
    objectDataa.map((valuesa,index)=>{
        tableDataa+=`
        <tr>
            <th scope='row'>${valuesa.id}</th>
            <td>${valuesa.volumeUsd.currency} ${valuesa.volumeUsd.value}
            <div class="progress mt-1" style="height:4px;">
            <div class="progress-bar bg-warning rounded" role="progressbar" style="width: 60%;" aria-valuenow="{values.volumeUsd.changePercent}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </td>
            <td>${valuesa.items}
            </td>
            <td>${valuesa.transactions}</td>
        </tr>
          `;
    });
    document.getElementById("api4").innerHTML=tableDataa;
})


// API number 5 for fetching the SELLERS LEADERBOARD from Rarible
// varible used 'b'
fetch("https://api.rarible.org/v0.1/data/leaderboards/sellers?blockchain=ETHEREUM&source=RARIBLE&period=D1&limit=10").then((datab)=>{
    // console.log(dataa)
    return datab.json();
}).then((objectDatab)=>{
    let tableDatab="";
    objectDatab.map((valuesb,index)=>{
        tableDatab+=`
        <tr>
            <th scope='row'>${valuesb.id}</th>
            <td>${valuesb.volumeUsd.currency} ${valuesb.volumeUsd.value}
            <div class="progress mt-1" style="height:4px;">
            <div class="progress-bar bg-warning rounded" role="progressbar" style="width: 60%;" aria-valuenow="{values.volumeUsd.changePercent}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </td>
            <td>${valuesb.items}
            </td>
            <td>${valuesb.transactions}</td>
        </tr>
          `;
    });
    document.getElementById("api5").innerHTML=tableDatab;
})


// API number 6 for fetching the BUYERS LEADERBOARD from Opensea
// varible used 'c'
fetch("https://api.rarible.org/v0.1/data/leaderboards/buyers?blockchain=ETHEREUM&source=OPEN_SEA&period=D1&limit=10").then((datac)=>{
    // console.log(datac)
    return datac.json();
}).then((objectDatac)=>{
    let tableDatac="";
    objectDatac.map((valuesc,index)=>{
        tableDatac+=`
        <tr>
            <th scope='row'>${valuesc.id}</th>
            <td>${valuesc.volumeUsd.currency} ${valuesc.volumeUsd.value}
            <div class="progress mt-1" style="height:4px;">
            <div class="progress-bar bg-warning rounded" role="progressbar" style="width: 60%;" aria-valuenow="{values.volumeUsd.changePercent}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </td>
            <td>${valuesc.items}
            </td>
            <td>${valuesc.transactions}</td>
          </tr>
          `;
    });
    document.getElementById("api6").innerHTML=tableDatac;
})



//////NOT WORKING////////
// // // API number 8 for fetching the SELLERS LEADERBOARD from Opensea
// // // varible used 'e'
// fetch("https://api.rarible.org/v0.1/data/trending/collections?blockchain=ETHEREUM&period=D1&limit=10").then((datae)=>{
//     // console.log(dataa)
//     return datae.json();
// }).then((objectDatae)=>{
//     let tableDatae="";
//     objectDatae.map((valuese,index)=>{
//         tableDatae+=`
//         <tr>
//             <th scope='row'>${valuese.id}</th>
//             <td>${valuese.volumeUsd.currency} ${valuese.volumeUsd.value}
//             <div class="progress mt-1" style="height:4px;">
//             <div class="progress-bar bg-warning rounded" role="progressbar" style="width: 60%;" aria-valuenow="{values.volumeUsd.changePercent}" aria-valuemin="0" aria-valuemax="100"></div>
//             </div>
//             </td>
//             <td>${valuese.volumeUsd.changePercent}
//             <div class="progress mt-1" style="height:4px;">
//             <div class="progress-bar bg-warning rounded" role="progressbar" style="width: 60%;" aria-valuenow="{values.volumeUsd.changePercent}" aria-valuemin="0" aria-valuemax="100"></div>
//             </div>
//             </td>
//             <td>${valuese.floorPrice.currency} ${valuese.floorPrice.value}</td>
//             <td>${valuese.numberOfSales.value}
//             <p><b>Change Percent:</b> ${valuese.numberOfSales.changePercent}</p>
//             </td>

//           </tr>
//           `;
//     });
//     document.getElementById("api8").innerHTML=tableDatae;
// })


// // // API number 9 for fetching the SELLERS LEADERBOARD from Opensea
// // // varible used 'f'
// fetch("https://api.rarible.org/v0.1/data/trending/collections?blockchain=ETHEREUM&period=D7&limit=10").then((dataf)=>{
//     // console.log(dataa)
//     return dataf.json();
// }).then((objectDataf)=>{
//     let tableDataf="";
//     objectDataf.map((valuesf,index)=>{
//         tableDataf+=`
//         <tr>
//             <th scope='row'>${valuesf.id}</th>
//             <td>${valuesf.volumeUsd.currency} ${valuesf.volumeUsd.value}
//             <div class="progress mt-1" style="height:4px;">
//             <div class="progress-bar bg-warning rounded" role="progressbar" style="width: 60%;" aria-valuenow="{values.volumeUsd.changePercent}" aria-valuemin="0" aria-valuemax="100"></div>
//             </div>
//             </td>
//             <td>${valuesf.volumeUsd.changePercent}
//             <div class="progress mt-1" style="height:4px;">
//             <div class="progress-bar bg-warning rounded" role="progressbar" style="width: 60%;" aria-valuenow="{values.volumeUsd.changePercent}" aria-valuemin="0" aria-valuemax="100"></div>
//             </div>
//             </td>
//             <td>${valuesf.floorPrice.currency} ${valuesf.floorPrice.value}</td>
//             <td>${valuesf.numberOfSales.value}
//             <p><b>Change Percent:</b> ${valuesf.numberOfSales.changePercent}</p>
//             </td>

//           </tr>
//           `;
//     });
//     document.getElementById("api9").innerHTML=tableDataf;
// })


// // API number 10 for fetching the SELLERS LEADERBOARD from Opensea
// // varible used 'g'
fetch("https://api.rarible.org/v0.1/data/trending/collections?blockchain=ETHEREUM&period=D30&limit=10").then((datag)=>{
    // console.log(dataa)
    return datag.json();
}).then((objectDatag)=>{
    let tableDatag="";
    objectDatag.map((valuesg,index)=>{
        tableDatag+=`
        <tr>
            <th scope='row'>${valuesg.id}</th>
            <td>${valuesg.volumeUsd.currency} ${valuesg.volumeUsd.value}
            <div class="progress mt-1" style="height:4px;">
            <div class="progress-bar bg-warning rounded" role="progressbar" style="width: 60%;" aria-valuenow="{values.volumeUsd.changePercent}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </td>
            <td>${valuesg.volumeUsd.changePercent}
            <div class="progress mt-1" style="height:4px;">
            <div class="progress-bar bg-warning rounded" role="progressbar" style="width: 60%;" aria-valuenow="{values.volumeUsd.changePercent}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </td>
            <td>${valuesg.floorPrice.currency} ${valuesg.floorPrice.value}</td>
            <td>${valuesg.numberOfSales.value}
            <p><b>Change Percent:</b> ${valuesg.numberOfSales.changePercent}</p>
            </td>

          </tr>
          `;
    });
    document.getElementById("api10").innerHTML=tableDatag;
})


// // API number 11 for fetching the SELLERS LEADERBOARD from Opensea
// // varible used 'h'
fetch("https://api.rarible.org/v0.1/data/leaderboards/collections/mints?blockchain=ETHEREUM&period=D7&sort=COLLECTION_DESC&limit=10&offset=0").then((datah)=>{
    // console.log(dataa)
    return datah.json();
}).then((objectDatah)=>{
    let tableDatah="";
    objectDatah.map((valuesh,index)=>{
        tableDatah+=`
        <tr>
            <th scope='row'>${valuesh.id}</th>
            <td>${valuesh.minted}
            </td>
            <td>${valuesh.totalItemSupply}
            </td>
          </tr>
          `;
    });
    document.getElementById("api11").innerHTML=tableDatah;
})








