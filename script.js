const searchInputEl = document.getElementById("searchInput");
const searchResultsEl = document.getElementById("searchResults");
const spinnerEl = document.getElementById("spinner");

function createAndAppendSearchResult(result) {
    const { link, title, description } = result;

    // Create result item container
    const resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");

    // Create and append title element
    const titleEl = document.createElement("a");
    titleEl.href = link;
    titleEl.target = "_blank";
    titleEl.textContent = title;
    titleEl.classList.add("result-title");
    resultItemEl.appendChild(titleEl);

    // Create and append line break
    resultItemEl.appendChild(document.createElement("br"));

    // Create and append URL element
    const urlEl = document.createElement("a");
    urlEl.classList.add("result-url");
    urlEl.href = link;
    urlEl.target = "_blank";
    urlEl.textContent = link;
    resultItemEl.appendChild(urlEl);

    // Create and append line break
    resultItemEl.appendChild(document.createElement("br"));

    // Create and append description element
    const descriptionEl = document.createElement("p");
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent = description;
    resultItemEl.appendChild(descriptionEl);

    // Append the result item to the container
    searchResultsEl.appendChild(resultItemEl);
}

function displayResults(searchResults) {
    spinnerEl.classList.add("d-none");

    if (searchResults.length === 0) {
        searchResultsEl.innerHTML = "<p class='text-center'>No results found. Try a different search term.</p>";
        return;
    }

    searchResultsEl.innerHTML = ""; // Clear previous results
    searchResults.forEach(result => createAndAppendSearchResult(result));
}

function searchWikipedia(event) {
    if (event.key === "Enter") {
        const searchInput = searchInputEl.value.trim();
        
        if (searchInput === "") {
            alert("Please enter a search term");
            return;
        }

        spinnerEl.classList.remove("d-none");
        searchResultsEl.textContent = "";

        const url = `https://apis.ccbp.in/wiki-search?search=${encodeURIComponent(searchInput)}`;
        
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(jsonData => {
                const { search_results } = jsonData;
                displayResults(search_results);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                spinnerEl.classList.add("d-none");
                searchResultsEl.innerHTML = `<p class='text-center text-danger'>Error loading results. Please try again later.</p>`;
            });
    }
}

searchInputEl.addEventListener("keydown", searchWikipedia);