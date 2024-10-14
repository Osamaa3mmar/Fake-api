import {getAllProductsInHTMLFormat,getAllCategoryInHTMLFormat} from './getAllProducts.js';
const products_box=document.querySelector('.products');
const category_box=document.querySelector(".category-list")
products_box.innerHTML=await getAllProductsInHTMLFormat();
category_box.innerHTML= await getAllCategoryInHTMLFormat();

