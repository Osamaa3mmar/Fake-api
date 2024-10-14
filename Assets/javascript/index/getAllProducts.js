const getAllProducts=async ()=>{
    const {data}=await axios.get('https://dummyjson.com/products');
    return data.products;
}

export const getAllProductsInHTMLFormat=async ()=>{
const data=await getAllProducts();
const HTMLFormat=data.map((item)=>{
return `
  <div class="product">



              <div class="product-image">
                <img
                  src="${item.thumbnail}"
                  alt=""
                />
              </div>





              <div class="product-t-b">
                <p class="product-title">${item.title}</p>
                <p class="product-brand">${item.brand}</p>
              </div>





              <div class="product-description">
                <p>
                ${item.description}
                </p>
              </div>




              <div class="product-p-r">
                <p class="product-price">${item.price} <span>$</span></p>
                <div class="product-rate">
                  <p>${item.rating}</p>
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>





              <div class="product-dimentions">
                <p>width: ${item.dimensions.width}</p>
                <p>height: ${item.dimensions.height}</p>
                <p>depth: ${item.dimensions.depth}</p>
              </div>




              
              <div class="btn">
                <button>Buy Now</button>
              </div>
            </div>
`;
}).join('');
return HTMLFormat;
}

const getCategorys=async ()=>{
  const {data}=await axios.get('https://dummyjson.com/products/categories');
  return data;
};

export const getAllCategoryInHTMLFormat=async ()=>{
const data=await getCategorys();
const HTMLFormat=data.map((item)=>{
  return `
  <a href="category.html?Category=${item.slug}">${item.name}</a>
  `;
}).join('');
return HTMLFormat;
};