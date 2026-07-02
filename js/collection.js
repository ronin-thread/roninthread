const collections = {

    ronin: {

        title: "RONIN",

        description:
        "Discipline. Independence. Mastery.",

        products: [

            {
                id: "way-of-silence",
                name: "Way Of Silence",
                image: "images/mocks/ro/wos_2.webp"
            },

            {
                id: "no-master",
                name: "No Master",
                image: "images/mocks/ro/nm_2.webp"
            },

            {
                id: "last-discipline",
                name: "Last Discipline",
                image: "images/mocks/ro/ld_2.webp"
            },

            {
                id: "wandering-path",
                name: "Wandering Path",
                image: "images/mocks/ro/wp_2.webp"
            }

        ]
    },

    enso: {

        title: "ENSO",

        description:
        "Balance. Simplicity. Focus.",

        products: [

            {
                id: "one-stroke",
                name: "One Stroke",
                image: "images/mocks/en/os_2.webp"
            },

            {
                id: "still-mind",
                name: "Still Mind",
                image: "images/mocks/en/sm_2.webp"
            },

            {
                id: "circle-of-resolve",
                name: "Circle Of Resolve",
                image: "images/mocks/en/cor_2.webp"
            },

            {
                id: "void-form",
                name: "Void & Form",
                image: "images/mocks/en/vaf_2.webp"
            }

        ]
    },

    "neon-shogun": {

        title: "NEON SHOGUN",

        description:
        "Future Japan. Cyberpunk Energy.",

        products: [

            {
                id: "ghost-protocol",
                name: "Ghost Protocol",
                image: "images/mocks/ns/gp_2.webp"
            },

            {
                id: "tokyo-sector",
                name: "Tokyo Sector",
                image: "images/mocks/ns/ts_2.webp"
            },

            {
                id: "signal-lost",
                name: "Signal Lost",
                image: "images/mocks/ns/sl_2.webp"
            },

            {
                id: "neon-shogun",
                name: "Neon Shogun",
                image: "images/mocks/ns/ns_2.webp"
            }

        ]
    }

};

const params =
new URLSearchParams(window.location.search);

const collectionId =
params.get("id");

const collection =
collections[collectionId];

if(!collection){

    document.body.innerHTML =
    "<h1>Collection Not Found</h1>";

}

document.title =
collection.title + " | Ronin Thread";

document.querySelector('meta[name="description"]').content =
    `Explore the ${collection.title} collection by Ronin Thread. Premium Japanese-inspired streetwear designed for discipline, resilience and modern minimalism.`;

document.getElementById("collectionTitle")
.textContent = collection.title;

document.getElementById("collectionDescription")
.textContent = collection.description;

const grid =
document.getElementById("productsGrid");

collection.products.forEach(product => {

    grid.innerHTML += `

    <div class="product-card">

        <img
        src="${product.image}"
        alt="${product.name}">

        <div class="product-info">

            <h3>
                ${product.name}
            </h3>

            <a
            href="product.html?id=${product.id}"
            class="product-link">

            View Details →

            </a>

        </div>

    </div>

    `;

});