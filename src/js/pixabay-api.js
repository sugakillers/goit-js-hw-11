const baseURL = 'https://pixabay.com';


export const fetchRequest = (value, page, perPage) => {

    const urlOptions = new URLSearchParams({
        key: "45468562-3d934deccae668c7d7f46b2f1",
        q: value,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: perPage,
    });


    const fullURL = `${baseURL}/api/?${urlOptions}`;
    console.log(fullURL);


    return fetch(fullURL)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error!");
            }
            return response.json();
        })

        .catch((error) => {
            console.error("Fetch error:", error);
            throw error; 
        });
}

