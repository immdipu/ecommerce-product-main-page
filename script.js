const thumnail = document.querySelectorAll('.thumnail');
const product = document.querySelectorAll('.product');
const productImageContainer = document.querySelector('.product_image_container');
const arrow = document.querySelectorAll('.arrow');
const prevarrow = document.querySelector('.prevarrow')
const nextarrow = document.querySelector('.nextarrow')
const overlay = document.querySelector('.overlay')
const close = document.querySelector('.close')
const imageContainer = document.querySelector('.image_container')
const numberOfItem = document.querySelector('.number_of_item')
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const addToCart = document.querySelector('.add_to_cart')
const cart = document.querySelector('.cart')
const count = document.querySelector('.count')
const itemToCheckoutNumber = document.querySelector('.item_to_checkout_number')
const itemToCheckoutTotalCost = document.querySelector('.item_to_checkout_totalCost')
const deleteBtn = document.querySelector('.delete_button')
const emptyCart = document.querySelector('.emptycart')
const cartQuery = document.querySelector('.cart_query')
const sectionTwo = document.querySelector('.section_two')


// SLIDER

product.forEach((item, i) => (item.style.transform = `translateX(${i * 100}%)`))
let currslide = 0;
const maxSlide = product.length;


const gotoSlide = function (slides) {
    product.forEach((item, i) => (item.style.transform = `translateX(${100 * (i - slides)}%)`))
}

const nextSlide = function () {
    if (currslide === maxSlide - 1) {
        currslide = 0;
    }
    else {
        currslide++;
    }
    gotoSlide(currslide);
    thumnailActive(currslide);
}
const PrevSlide = function () {
    if (currslide === 0) {
        currslide = maxSlide - 1;
    }
    else {
        currslide--;
    }
    gotoSlide(currslide);
    thumnailActive(currslide);
}


prevarrow.addEventListener('click', PrevSlide);
nextarrow.addEventListener('click', nextSlide);



const thumnailActive = function (slide) {
    thumnail.forEach(item => (item.classList.remove('active')));
    document.querySelector(`.thumnail[data-slide="${slide}"]`).classList.add('active');
};

thumnail.forEach((item) => {
    item.addEventListener('click', function () {
        const target = item.dataset.slide;
        gotoSlide(target);
        thumnailActive(target);
    })
})

thumnailActive(0)


product.forEach(item => {
    item.addEventListener('click', function () {
        overlay.classList.add('activeDisplay');
        imageContainer.classList.add('overlayACtive');
        close.classList.add('activeDisplay');
        arrow.forEach(item => (item.classList.add('activeDisplay')));

    })
})

close.addEventListener('click', function () {
    overlay.classList.remove('activeDisplay');
    imageContainer.classList.remove('overlayACtive');
    close.classList.remove('activeDisplay');
    arrow.forEach(item => (item.classList.remove('activeDisplay')));
})







let currNumItem = 0;

// TO ADD ITEM 

function adder() {
    currNumItem += 1;
    numberOfItem.textContent = currNumItem;

}

// TO MINUS ITEMS

function subtractor() {
    if (currNumItem > 0) {
        currNumItem -= 1;
    }

    numberOfItem.textContent = currNumItem;
}


plus.addEventListener('click', adder)
minus.addEventListener('click', subtractor)


// TO SHOW ADDED ITEM ITS DOT NOTIFICATION ON CART

let contnum = 0;
const counter = function () {
    if (currNumItem === 0) {
        count.classList.remove('countactive');
        count.textContent = currNumItem;
    }

    else {
        count.classList.add('countactive');
        contnum += currNumItem;
        count.textContent = contnum;
        itemToCheckoutNumber.textContent = contnum;
    }
}

// TO CALCULATE TOTAL COST

const totalCost = function () {
    itemToCheckoutTotalCost.textContent = `$${contnum * 125}.00`
}


// TO ADD IN THE CART

const addtoCartf = function () {
    if (!currNumItem == 0) {
        counter();
        totalCost();
        emptyCartf();
        numberOfItem.textContent = 0;
        currNumItem = 0;
    }
}



addToCart.addEventListener('click', addtoCartf)


// SHOW EMPTY CART IF THERE IS NO ITEMS IN THE CART

const emptyCartf = function (cu) {
    if (cu === 0) {
        emptyCart.classList.add('activempty');
        count.classList.remove('countactive');
    }
    else {
        emptyCart.classList.remove('activempty');
        count.classList.add('countactive');
    }
}
emptyCartf(currNumItem);


// DELETE ITEM FROM THE CART


const delitem = function () {
    if (contnum > 0) {
        contnum -= 1
        count.textContent = contnum;
        itemToCheckoutNumber.textContent = contnum;

    }
}

deleteBtn.addEventListener('click', function () {
    delitem();
    emptyCartf(contnum);
    totalCost();

})


// CLOSE CART MENU 

sectionTwo.addEventListener('click', function () {
    cartQuery.classList.remove('activempty')
})





cart.addEventListener('click', function () {
    cartQuery.classList.toggle('activempty')

})