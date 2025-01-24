

let products = {
    data: [
        {

            productName: "Light color Top",
            category: "Topwear",
            price: "28",
            image: "image 1.jpg",
        },
        {
            productName: "Titan Silver",
            category: "Watch",
            price: "50",
            image: "image-13.jpg",

        },

        {
            productName: "Orange Top",
            category: "Topwear",
            price: "27",
            image: "image-3.jpg",

        },
        {
            productName: "Floral Top",
            category: "Topwear",
            price: "32",
            image: "image-4.webp",

        },


        {
            productName: "Blue Jeans",
            category: "Bottomwear",
            price: "26",
            image: "image-5.jpg",

        },

        {
            productName: "White Top",
            category: "Topwear",
            price: "22",
            image: "image-2.jpg"
        },
        {
            productName: "Skirt Multi color",
            category: "Bottomwear",
            price: "26",
            image: "image-6.jpg",

        },
        {
            productName: "Grey Jacket",
            category: "Jacket",
            price: "100",
            image: "image-10.jpg",

        },

        {
            productName: "Divided Skirt",
            category: "Bottomwear",
            price: "40",
            image: "image-7.webp",

        },
        {
            productName: "Black pant",
            category: "Bottomwear",
            price: "35",
            image: "image-8.jpg",

        },
        {
            productName: "Simple Watch",
            category: "Watch",
            price: "40",
            image: "image-16.jpg",

        },

        {
            productName: "Black Jacket",
            category: "Jacket",
            price: "100",
            image: "image-9.jpg",

        },

        {
            productName: "Brown Jacket",
            category: "Jacket",
            price: "105",
            image: "image-11.jpg",

        },
        {
            productName: "Stylish Watch",
            category: "Watch",
            price: "100",
            image: "image-15.jpg",

        },
        {
            productName: "Green Jacket",
            category: "Jacket",
            price: "110",
            image: "image-12.jpg",

        },


        {
            productName: "Golden watch",
            category: "Watch",
            price: "80",
            image: "image-14.jpg",

        },




    ]

}

for (let i of products.data) {
    //create card
    let card = document.createElement("div")
    //card should have a category and should have hidden initialy
    card.classList.add("card", i.category, "hide");

    //image div
    let imgContainer = document.createElement("div")
    imgContainer.classList.add("img-container")

    //img tag

    let image = document.createElement("img")
    image.setAttribute("src", "images/" + i.image);

    imgContainer.appendChild(image)
    card.appendChild(imgContainer);


    //create container
    let container = document.createElement("div")
    container.classList.add("container")

    //product name
    let name = document.createElement("h5")
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    //price

    let price = document.createElement("h6")
    price.innerText = "$" + i.price;
    container.appendChild(price);

    card.appendChild(container);


    document.getElementById("products").appendChild(card)


}

//parameter passed from button(parameter same as category)

function filterProducts(value) {
    let buttons = document.querySelectorAll(".btn_value")

    buttons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        }
        else {
            button.classList.remove("active");
        }
    });

    // select all cards
    let elements = document.querySelectorAll(".card")
    //loop through all cards
    elements.forEach((element) => {
        if (value == "All") {
            element.classList.remove("hide");
        }
        else {

            if (element.classList.contains(value)) {

                element.classList.remove("hide");
            }
            else {
                //hide other elements
                element.classList.add("hide");
            }


        }




    });

}
function searchProducts() {
    let input = document.querySelector(".searchField").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach((card) => {

        let name = document.querySelector(".product-name").innerText.toLowerCase();
        if (name.includes(input)) {
            card.classList.remove("hide");
        }
        else {
            card.classList.add("hide");
        }

    });
}


//initially display all products

window.onload = () => {
    filterProducts("All");

}
let search_btn = document.querySelector(".search_btn")


//search button click

search_btn.addEventListener("click", () => {
    let cards = document.querySelectorAll(".card");
    let elements = document.querySelectorAll(".product-name");
    let searchInput = document.querySelector(".searchField").value;

    //loop through all elements

    elements.forEach((element, index) => {
        if (element.innerText.includes(searchInput.toUpperCase())) {
            //display matching cards
            cards[index].classList.remove("hide")
        }
        else {
            //hide others
            cards[index].classList.add("hide");
        }
    })

})
