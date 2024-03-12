const search_input = document.getElementById('search-input');
const card_wrapper = document.getElementsByClassName('card-wrapper');

const products = {
data: [{
    productName: 'Regular White T-Shirt',
    category: 'Topwear',
    price: '30',
    image: 'white-tshirt.jpg'
},
{
    productName: 'Beige Short Skirt',
    category: 'Bottomwear',
    price: '49',
    image: 'short-skirt.jpg'
},
{
    productName: 'Sporty SmartWatech',
    category: 'Watch',
    price: '99',
    image: 'sporty-smart-watch.jpg'
},
{
    productName: 'Basic Knitted Top',
    category: 'Topwear',
    price: '29',
    image: 'knitted-top.jpg'
},
{
    productName: 'Black Leather Jacket',
    category: 'Jacket',
    price: '89',
    image: 'black-leather-jacket.jpg'
},
{
    productName: 'Stylish Pink Trousers',
    category: 'Bottomwear',
    price: '49',
    image: 'pink-trousers.jpg'
},
{
    productName: 'Brown Man`s Jacket',
    category: 'Jacket',
    price: '189',
    image: 'brown-jacket.jpg'
},
{
    productName: 'Comfy Gray Pants',
    category: 'Bottomwear',
    price: '49',
    image: 'comfy-gray-pants.jpg'
},
{
    productName:'Beggy Carrgo Jeans',
    category:'Bottomwear',
    price: '60',
    image:'beggy-carggo-jeans.jpg'
}
],
}

function crateAllElements(){
    products.data.forEach((product) => {
        const card = document.createElement('div');
        card.classList.add('card');
    
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('image-container');
        
        const image = document.createElement('img');
        image.setAttribute('src', product.image);
        imgContainer.appendChild(image);
        card.appendChild(imgContainer);
        
        const productName = document.createElement('p');
        productName.innerHTML = product.productName;
        productName.classList.add('text');
    
        const category = document.createElement('p')
        category.innerHTML = product.category;
        category.classList.add('text');
    
        const price = document.createElement('p');
        price.style.color = '#C51605'
        price.innerHTML = ` $ ${product.price}`;
        price.classList.add('text');
    
        card.appendChild(productName);
        card.appendChild(category);
        card.appendChild(price);
        document.body.appendChild(card);


    })
}
crateAllElements();

function crateAddToCartButton(obj){

    obj.forEach((item) => {
        let shopingCart = 0;
        const productPrice = item.price;
        const floatPrice = Math.floor(productPrice);

        console.log(floatPrice) 
    });
    
}

crateAddToCartButton(products.data)

function filterProduct(filterBy){
    const object = products.data;
    const filterData = object.filter((type) => type.category === filterBy);

    filterData.forEach((item) => {
        const div = document.createElement('div');
        div.classList.add('card');

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('image-container');
        
        const image = document.createElement('img');
        image.setAttribute('src', item.image);
        imgContainer.appendChild(image);
        div.appendChild(imgContainer);

        const productName = document.createElement('p');
        productName.innerHTML = item.productName;
        productName.classList.add('text');
    
        const category = document.createElement('p')
        category.innerHTML = item.category;
        category.classList.add('text');

        const price = document.createElement('p');
        price.innerHTML = ` $ ${item.price}`;
        price.classList.add('text');
        
        div.appendChild(productName);
        div.appendChild(category);
        div.appendChild(price);
        document.body.appendChild(div)
        return;
    })

}

filterProduct();


function crateButton(obj){
    obj.forEach((object) => {
        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.setAttribute('class', 'addToCart');
        button.innerHTML = 'Add TO CART';
        button.classList.add('addToCart');
        card.appendChild(button);
        document.body.appendChild(card);

        const addToCart = document.querySelector('.addToCart');
    })
}

crateButton(products.data)