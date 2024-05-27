let products = document.currentScript.dataset.products
products = JSON.parse(products);

const total = document.getElementById("total");

let totalCost = 0;

for(const product of products){
    totalCost +=  Number.parseFloat(product.product.price) * product.quantity;
}

if(total)
    total.innerText = `Total Cost: $ ${totalCost}`;