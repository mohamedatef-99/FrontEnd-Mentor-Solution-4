const links = document.getElementsByClassName("links")
const items = links[0].querySelectorAll("li")
for (let i = 0; i < items.length; i++){
    items[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active")
        current[0].classList.remove("active")

        for (let j = 0; j < items.length; j++) {
            items[j].classList.remove("active");
            items[j].style.color = "";
        }

        this.classList.add("active")
        this.style.color = "black"
    })
}



const smallImages = document.querySelectorAll('.small-images img')
const largeImage = document.querySelector('.large-image img')
smallImages[0].style.opacity = "0.5"
let selectedImage = smallImages[0];

smallImages.forEach(function(img) {
    img.addEventListener('click', function() {
        const newSrc = this.src;
        largeImage.src = newSrc;
        this.style.opacity = "0.5";

        if (selectedImage !== null && selectedImage !== this) {
            selectedImage.style.opacity = "1";
        }
        
        selectedImage = this;
    });
});




const nextArrow = document.querySelector('.next');
const prevArrow = document.querySelector('.prev');


let currentImageIndex = 0;
largeImage.src = smallImages[currentImageIndex].src;

prevArrow.addEventListener('click', () => {
    currentImageIndex++;
    if (currentImageIndex >= smallImages.length) {
        currentImageIndex = 0;
    }
    largeImage.src = smallImages[currentImageIndex].src;
});

nextArrow.addEventListener('click', () => {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = smallImages.length - 1;
    }
    largeImage.src = smallImages[currentImageIndex].src;
});




const decreaseBtn = document.querySelector('.minus');
const increaseBtn = document.querySelector('.plus');
const quantityInput = document.querySelector('.quantity-input');

let quantity = 0
decreaseBtn.addEventListener("click", () => {
    if (quantity > 0)
        quantity--;
    quantityInput.value = quantity;
    updatePrice();
})

increaseBtn.addEventListener("click", () => {
    quantity++;
    quantityInput.value = quantity;
    updatePrice();
})

let price = 125.00
let totalPrice = 0
function updatePrice() {
     totalPrice = quantity * price
}


const addToCart = document.querySelector('.addcart')
addToCart.addEventListener('click', () => {
    updatePrice()
    alert(`the cart price is ${totalPrice}`)
})



const menuButton = document.querySelector('.burger-menu .menu');
const closeButton = document.querySelector('.burger-menu .close');
const nav = document.querySelector('nav .links ul');

menuButton.addEventListener('click', function() {
    nav.classList.add('active');
    menuButton.classList.add('hidden')
    closeButton.style.display = "block"
    closeButton.classList.remove('hidden')
})

closeButton.addEventListener('click', function() {
    nav.classList.remove('active');
    closeButton.classList.add('hidden')
    closeButton.style.display = "none"
    menuButton.classList.remove('hidden')
})
