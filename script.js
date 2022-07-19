//---------------------------variables---------------------------//

let title = document.getElementById('title')
let price = document.getElementById('price')
let taxes = document.getElementById('taxes')
let ads = document.getElementById('ads')
let discount = document.getElementById('discount')
let total = document.getElementById('total')
let count = document.getElementById('count')
let category = document.getElementById('category')
let createBtn = document.getElementById('create')







//---------------------------getTotal---------------------------//

function getTotal(){

  if(price.value != ''){

    let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
    total.innerHTML = result ;
    total.style.background = '#040' ;

  }
  else{

    total.innerHTML = '';
    total.style.background = '#a00d02' ;
 
  }
}


//---------------------------create---------------------------//

let productInfo

if(localStorage.product != null){
  productInfo=JSON.parse(localStorage.product)
}
else{
  productInfo = [];
}


 createBtn.onclick = function(){
   let productObject = {
     title :title.value,
     price : price.value,
     taxes : taxes.value,
     ads : ads.value,
     discount : discount.value,
     total :total.innerHTML,
     count : count.value,
     category : category.value  
   }

    productInfo.push(productObject)
    localStorage.setItem("product",JSON.stringify(productInfo));

    clearInputs()
    readData()
  }


  //---------------------------clear inputs---------------------------//

   function clearInputs(){
    title.value= '';
    price.value= '';
    taxes.value= '';
    ads.value= '';
    discount.value= '';
    total.innerHTML= '';
    count.value= '';
    category.value= '';

  }



  ////---------------------------read//---------------------------//


  function readData(){
    let table =''
    for(i=0 ; i<productInfo.length;i++){
      table+=`  <tr>
      <td>${i}</td>
      <td>${productInfo[i].title}</td>
      <td>${productInfo[i].price}</td>
      <td>${productInfo[i].taxes}</td>
      <td>${productInfo[i].ads}</td>
      <td>${productInfo[i].discount}</td>
      <td>${productInfo[i].total}</td>
      <td>${productInfo[i].category}</td>
      <td><button id="update">update</button></td>
      <td><button id="delete">delete</button></td>
    </tr>`


      document.getElementById('tbody').innerHTML = table
    }
  }

  readData()