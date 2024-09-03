import { fetchRequest } from "./js/pixabay-api";
import { createGalleryCard } from "./js/render-functions";
import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const searchForm = document.querySelector(".search-form");
const cardsList = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

let gallery = new SimpleLightbox(".gallery li a", {
captions: true,
captionClass: "style-caption",
captionsData: 'alt',
captionDelay: 250,
disableRightClick: true,
});

const onSearchFormSubmit = (event) => {
    event.preventDefault();
    loader.classList.add("is-open");

    const searchValue = searchForm.elements.user_query.value.trim();
    if (searchValue === '') {
        iziToast.info({
            message: "Please enter a search query!",
            position: "topCenter",
            title: "Attention",
            color: "red",
            timeout: 3000,
        });
        loader.classList.remove("is-open");
        return;
    }

    fetchRequest(searchValue)
        .then((data) => {
            if (data.hits.length === 0) {
                iziToast.info({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: "topCenter",
                    title: "Attention",
                    color: "red",
                    timeout: 4000,
                });
            } else {
                const info = data.hits.map(createGalleryCard).join("");
                cardsList.innerHTML = info;
                gallery.refresh();
            }
            loader.classList.remove("is-open");
        })
        .catch((err) => {
            iziToast.error({
                message: "An error occurred while fetching data. Please try again!",
                position: "topCenter",
                title: "Error",
                color: "red",
                timeout: 4000,
            });
            loader.classList.remove("is-open");
            console.log(err);
        });

    searchForm.reset();
};

searchForm.addEventListener("submit", onSearchFormSubmit);

