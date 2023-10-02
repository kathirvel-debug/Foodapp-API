
let randomDish=[]
let searchDish=[]
let favlist=[]
let anime=0
let homepage = document.getElementById('homepage');
let title=document.getElementById("dishs")
console.log(homepage);
console.log(title);
//DOM CLICK EVENT 
document.addEventListener('click',inputItems)
function inputItems(e){
const target=e.target
console.log(target);
search
if(target.id=="search"){
let text=e.target.value
search(text)
}
else if(target.id=='addfavs'){
    const text=target.dataset.id
    const img=target.dataset.img
    const fav={
        text:text,
        img:img,
    }
    favlist.push(fav)

}
else if(target.id=='favView'){
    console.log("hi");
    
    fav() 
}
else if(target.className=='view'){
    let values=target.getAttribute('namesid');
    let newvalues=searchDish.filter(function(task){
        return task.idMeal ==values

    })
    console.log(newvalues);
    console.log(newvalues);
    viewed(newvalues[0])
}
else if(target.id=='removeaddfavs'){
console.log("removed");
let text=target.dataset.id
console.log(text);
let newvalues=favlist.filter(function(task){
    return task.text!=text

})
favlist=newvalues
fav()
}
}

//FUNCTION oF VIEW
function viewed(list){
    homepage.innerHTML=""
    let card=document.createElement('div'); 
    card.innerHTML= `<div class="viewdish">
    <div class="block1">
        <h2>${list.strMeal}</h2>
        <div style=" background-image: url('${list.strMealThumb}${"/preview"}');"id="preview">  
        </div>  
    </div>
    <div class="block2">
        <h2>Ingredients</h2>
         <div class="Ingredients">
            <div class="Ingredients-card" style="display: flex;flex-direction: column;align-items: center;">
                <div  style=" background-image: url('https://www.themealdb.com/images/ingredients/${list.strIngredient1}.png');" class="Ingredients-img">
                    
                </div>
                <h3>${list.strIngredient1}</h3>

            </div>
            <div class="Ingredients-card" style="display: flex;flex-direction: column;align-items: center;">
            <div  style=" background-image: url('https://www.themealdb.com/images/ingredients/${list.strIngredient2}.png');" class="Ingredients-img">
                
            </div>
            <h3>${list.strIngredient2}</h3>

        </div>
<div class="Ingredients-card" style="display: flex;flex-direction: column;align-items: center;">
                <div  style=" background-image: url('https://www.themealdb.com/images/ingredients/${list.strIngredient3}.png');" class="Ingredients-img">
                    
                </div>
                <h3>${list.strIngredient3}</h3>

            </div>
            <div class="Ingredients-card" style="display: flex;flex-direction: column;align-items: center;">
                <div  style=" background-image: url('https://www.themealdb.com/images/ingredients/${list.strIngredient4}.png');" class="Ingredients-img">
                    
                </div>
                <h3>${list.strIngredient4}</h3>
    
            </div>
            <div class="Ingredients-card" style="display: flex;flex-direction: column;align-items: center;">
                <div  style=" background-image: url('https://www.themealdb.com/images/ingredients/${list.strIngredient5}.png');" class="Ingredients-img">
                    
                </div>
                <h3>${list.strIngredient5}</h3>
    
            </div>
            <div class="Ingredients-card" style="display: flex;flex-direction: column;align-items: center;">
                <div  style=" background-image: url('https://www.themealdb.com/images/ingredients/${list.strIngredient6}.png');" class="Ingredients-img">
                    
                </div>
                <h3>${list.strIngredient6}</h3>
    
            </div>
            <div class="Ingredients-card" style="display: flex;flex-direction: column;align-items: center;">
                <div  style=" background-image: url('https://www.themealdb.com/images/ingredients/${list.strIngredient7}.png');" class="Ingredients-img">
                    
                </div>
                <h3>${list.strIngredient7}</h3>
    
            </div>
            </div>
            
            

            </div>
         </div>
         
    </div>
    
</div>
<div class="block3">
    <h2>
        Instructions
    </h2>
    <p>${list.strInstructions}</p>
</div>`
  homepage.append(card)
}
//Function of fav
function fav(){
    homepage.innerHTML=""
    for (let i=0;i<favlist.length;i++){
        favDom(favlist[i])
    }
}
//DOM FAV
function favDom(list){
    let card=document.createElement('div');
    
    
    
  card.innerHTML= 
   `<div id="cards">
   <div class="imgblock">
   <img src="${list.img}"/>
   </div>
   <div class="title"><h3 class="dish"id="dishs" style="cursor: pointer;">${list.text}</h3></div>
   <div class="words">
   <div class="title2"><h3 class="addfav"id="removeaddfavs" data-id="${list.text}"style="cursor: pointer;">Remove</h3></div>
  </div>`
    homepage.append(card)
}
//API CALL FOR 14-DISH
async function dish(){
    const todolist= await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    const jsonv=await todolist.json();
    randomDish=jsonv.categories
    rendering()
    console.log(randomDish);
    console.log(jsonv);
 }
 dish();
//API CALL FOR SEARCH DISH
async function search(dishname){
    const todolist= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dishname}`)
    const jsonv=await todolist.json();
    searchDish=jsonv.meals
    searchRendering();
    console.log(searchDish);
    
 }
 
//RENDERING THE DOM
function rendering(){
    homepage.innerHTML=""
    for (let i=0;i<randomDish.length;i++){
        dom(randomDish[i])

    }
}
//DOM
function dom(list){
    let card=document.createElement('div');
    card.id="cards" 
  card.innerHTML= 
   `<div class="imgblock">
    <img src="${list.strCategoryThumb}"/>
    </div>
    <div class="title"><h3 class="dish" id="dishs" style="cursor: pointer;">${list.strCategory}</h3></div>
    <div class="title"><h3 class="addfav"id="addfavs"data-id="${list.strCategory}"  data-img='${list.strCategoryThumb}'style="cursor: pointer;">addfav</h3></div>`
    homepage.append(card)
}
//SEARCH RENDERING
function searchRendering(){
    homepage.innerHTML=""
    for (let i=0;i<searchDish.length;i++){
        searchDom(searchDish[i])

    }
}
//DOM
function searchDom(list){
    let card=document.createElement('div');
    card.id="cards" 
  card.innerHTML= 
   `<div class="imgblock">
    <img src="${list.strMealThumb}"/>
    </div>
    
    <div class="title"><h3 class="dish"id="dishs" style="cursor: pointer;">${list.strMeal}</h3></div>
    <div class="words">
    <div class="title1"><h3 class="view" namesid="${list.idMeal}"style="cursor: pointer;">view</h3></div>
    <div class="title2"><h3 class="addfav"id="addfavs" data-id="${list.strMeal}"  data-img='${list.strMealThumb}' style="cursor: pointer;">addfav</h3></div>
    </div>
    </div>
    `
    
    homepage.append(card)
}