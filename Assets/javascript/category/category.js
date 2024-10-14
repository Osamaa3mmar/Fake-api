import {getAllProductsInHTMLFormat} from './getAllProducts.js';
const products_box=document.querySelector('.products');
const params = new URLSearchParams(window.location.search).get('Category');
console.log(params);
products_box.innerHTML=await getAllProductsInHTMLFormat(params);