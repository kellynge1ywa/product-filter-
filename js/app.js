let productDetails = {
    data: [{
            productName: "Tecno spark 4",
            category: "MobilePhones",
            price: "Ksh. 7000",
            image: "/img/mobile phone/Tecno-Spark-4-1.jpg"
        },
        {
            productName: "Tecno spark 4",
            category: "MobilePhones",
            price: "Ksh. 7000",
            image: "/img/mobile phone/tecno-spark-4-2.jpg"
        },
        {
            productName: "Tecno spark 4",
            category: "MobilePhones",
            price: "Ksh. 7000",
            image: "/img/mobile phone/tecno-spark-4-3.jpg"
        },
        {
            productName: "Tecno spark 4",
            category: "MobilePhones",
            price: "Ksh. 7000",
            image: "/img/mobile phone/tecno-spark-4 -4.png"
        },
        {
            productName: "Tecno spark 4",
            category: "MobilePhones",
            price: "Ksh. 7000",
            image: "/img/mobile phone/tecno spark 4-5.png"
        },
        {
            productName: "Tecno spark 4",
            category: "MobilePhones",
            price: "Ksh. 7000",
            image: "/img/mobile phone/tecno spak 4-6.jpg"
        },
        {
            productName: "Tecno spark 4",
            category: "MobilePhones",
            price: "Ksh. 7000",
            image: "/img/mobile phone/spark 4-1.png"
        },
        {
            productName: "Hp elitebook",
            category: "Laptops",
            price: "Ksh. 27,000",
            image: "/img/laptops/hp laptop-2.png"
        },

        {
            productName: "Macbook",
            category: "Laptops",
            price: "Ksh. 57,000",
            image: "/img/laptops/macbook-2.jpg"
        },
        {
            productName: "Flash disk",
            category: "FlashDisks",
            price: "Ksh. 1000",
            image: "/img/flash disks/flash disk-1.jpg"
        },
        {
            productName: "Flash disk",
            category: "FlashDisks",
            price: "Ksh. 1000",
            image: "/img/flash disks/flash disk-1.jpg"
        },
        {
            productName: "Watch",
            category: "Watch",
            price: "Ksh. 1500",
            image: "/img/watch/watch-1.jpg"
        },
        {
            productName: "Watch",
            category: "Watch",
            price: "Ksh. 1500",
            image: "/img/watch/watch-2.jpg"
        },
        {
            productName: "Watch",
            category: "Watch",
            price: "Ksh. 1500",
            image: "/img/watch/watch-2.jpg"
        },


        {
            productName: "Hard disk",
            category: "HardDisks",
            price: "Ksh. 7000",
            image: "/img/hard disk/hard disk-2.jpg"
        },


    ]

};

for (let i of productDetails.data) {
    //create-card
    let card = document.createElement("div");
    //card should have a category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    //img tag

    let image = document.createElement("img");
    image.setAttribute("src", i.image);

    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    //container

    let container = document.createElement("div");
    container.classList.add("container");

    //product name

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName;
    container.appendChild(name);

    //price

    let price = document.createElement("h6");
    // price.classList.add("price");
    price.innerText = i.price
    container.appendChild(price)


    card.appendChild(container)
    document.getElementById("products").appendChild(card);


}

//parameter passed from button(parameter same as category)

function filterProduct(value) {
    //button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button => {
        //check if value equals innerText
        if (value == button.innerText) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }


    });

    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
        //display all cards on 'All' button click

        if (value == "All") {
            element.classList.remove("hide");
        } else {
            //check if element contain category class
            if (element.classList.contains(value)) {
                //display element based on category
                element.classList.remove("hide");
            } else {
                //hide other elements
                element.classList.add("hide");

            }
        }


    });

};

//search button click
document.getElementById("search").addEventListener("click", () => {
    //initialization
    let searchInput = document.getElementById("search-input").value;

    let elements = document.querySelectorAll(".product-name");

    let cards = document.querySelectorAll(".card");

    //loop through all elements
    elements.forEach((element, index) => {
        //check if text include the search value
        if (element.innerText.includes(searchInput)) {
            //display matching card
            cards[index].classList.remove("hide");

        } else {
            //hide others
            cards[index].classList.add("hide")

        }
    })

});


//initially dispaly all products
window.onload = () => {
    filterProduct("All")

};