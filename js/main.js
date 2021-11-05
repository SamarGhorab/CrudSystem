

var productName=document.getElementById("productName")
var productPrice=document.getElementById("productPrice")
var productCategory=document.getElementById("productCategory")
var productDesc=document.getElementById("productDesc")
var btnCases=document.getElementById("btnCases")
var searchInput=document.getElementById("search")
var products=[]; //3shan lw 3yza a3ml delete l 7aga mn list aw a3ml search msaln 3n mobile msh haro7 l object object
var inputs=document.getElementsByClassName("form-control") //classname htrg3ly list feha kol el wa5ed form control


productName.onkeyup=function(){
     var nameRejex=/^[A-Z][a-z]{1,9}$/
     if(!nameRejex.test(productName.value)){
            btnCases.disabled="true";
            productName.classList.add("is-invalid");
            productName.classList.remove("is-valid")

     }
     else{
       btnCases.removeAttribute("disabled");
       productName.classList.add("is-valid");
       productName.classList.remove("is-invalid")     }

}
productPrice.onkeyup=function(){
       var priceRejex=/^([1-4][0-9]{3,4}|50000)$/
       if(!priceRejex.test(productPrice.value)){
              btnCases.disabled="true";
              productPrice.classList.add("is-invalid");
              productPrice.classList.remove("is-valid")
  
       }
       else{
         btnCases.removeAttribute("disabled");
         productPrice.classList.add("is-valid");
         productPrice.classList.remove("is-invalid")     }
  
  }
  productCategory.onkeyup=function(){
       var categoryRejex=/^[A-Z][a-z0-9]{4,8}$/
       if(!categoryRejex.test(productCategory.value)){
              btnCases.disabled="true";
              productCategory.classList.add("is-invalid");
              productCategory.classList.remove("is-valid")
  
       }
       else{
         btnCases.removeAttribute("disabled");
         productCategory.classList.add("is-valid");
         productCategory.classList.remove("is-invalid")     }
  
  }
  productDesc.onkeyup=function(){
  var descriptionRejex=/^[1-9][0-9]{2,3}px,[1-9][0-9]{2,3}g$/
  if(!descriptionRejex.test(productDesc.value)){
         btnCases.disabled="true";
         productDesc.classList.add("is-invalid");
         productDesc.classList.remove("is-valid")

  }
  else{
    btnCases.removeAttribute("disabled");
    productDesc.classList.add("is-valid");
    productDesc.classList.remove("is-invalid")     }

}
if(JSON.parse(localStorage.getItem("productList"))!=null)
{
       products=JSON.parse(localStorage.getItem("productList"));
       displayData();

}
btnCases.onclick=function(){
       if(btnCases.innerHTML=="add product")
       {
              addProduct();
              displayData();
              formClear();

       }
       else{
              updateProduct();
              displayData();
              formClear();

       }
      
 
    


}
function addProduct(){
       var product={
              name:productName.value,
              price:productPrice.value,
              category:productCategory.value,
              description:productDesc.value
       }

       if ((!productName.value == "") && (!productPrice == "") && (!productCategory == "")&& (!productDesc.value == "")) {
          
       products.push(product); //array of object (json)
       localStorage.setItem("productList",JSON.stringify(products));
           
       formClear();

       }
       else {
              btnCases.disabled = "true"
              alert("fill all inputs..")
           

       }


       
}
function displayData(){
       var trs='';
       for(var i=0; i<products.length;i++)
       {
           trs+=`<tr><td>${i+1}</td><td>${products[i].name}</td>
           <td>${products[i].price}</td>
           <td>${products[i].category}</td>
           <td>${products[i].description}</td>
           <td><buttom class="btn btn-danger" onclick="deleteProduct(${i})"> delete</buttom></td>
           <td><buttom class="btn btn-warning" onclick="editProduct(${i})"> update</buttom></td>

           </tr>`  ;
       }
       document.getElementById("tableBody").innerHTML=trs;
}

function formClear(){
       for(var i=0;i<inputs.length;i++){
              inputs[i].value="";
       }
}
function deleteProduct(index){
       products.splice(index,1);
       displayData(); 
       localStorage.setItem("productList",JSON.stringify(products));

}
searchInput.onkeyup=function(){    
         var trs='';
         var val=searchInput.value;

for(var i=0; i<products.length;i++)
{
      
    trs+=`<tr><td>${i+1}</td><td>${products[i].name}</td>
    <td>${products[i].price}</td>
    <td>${products[i].category}</td>
    <td>${products[i].description}</td>
    <td><buttom class="btn btn-danger" onclick="deleteProduct(${i})"> delete</buttom></td>
    </tr>`  ;
    
}
document.getElementById("tableBody").innerHTML=trs;

}

function editProduct(index){

   productName.value=products[index].name;
   productPrice.value=products[index].price; 
   productCategory.value=products[index].category;
   productDesc.value=products[index].description;
   btnCases.innerHTML="product update";
}


var y;
function editProduct(index){
y=index;
productName.value=products[index].name;
productPrice.value=products[index].price; 
productCategory.value=products[index].category;
productDesc.value=products[index].description;
btnCases.innerHTML="product update";
    }

    
    function updateProduct(){
       products[y]={
              name:productName.value,
              price:productPrice.value,
              category:productCategory.value,
              description:productDesc.value
          
       }
  
       localStorage.setItem("siteList",JSON.stringify(products));

    }
 
