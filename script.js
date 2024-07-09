const movies = [
  "Naruto",
  "Death note",
  // Add more movie titles here
];

const searchBar = document.getElementById("search-bar");
const autocompleteList = document.getElementById("autocomplete-list");

searchBar.addEventListener("input", function () {
  const value = this.value;
  autocompleteList.innerHTML = "";
  if (!value) {
    return false;
  }
  movies.forEach((movie) => {
    if (movie.toLowerCase().includes(value.toLowerCase())) {
      const item = document.createElement("div");
      item.classList.add("autocomplete-item");
      item.innerHTML = `<strong>${movie.substr(
        0,
        value.length
      )}</strong>${movie.substr(value.length)}`;
      item.addEventListener("click", function () {
        searchBar.value = movie;
        autocompleteList.innerHTML = "";
      });
      autocompleteList.appendChild(item);
    }
  });
});
