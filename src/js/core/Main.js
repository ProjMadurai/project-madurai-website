class Main {
  constructor() {
    const searchTxt = document.querySelector("div > input");

    const searchBooks = (searchText) => {
      if (searchText.trim().length !== 0) {
        window.location.href = "/books/?search=" + searchText;
      }
    };

    document
      .querySelector(".search-btn")
      .addEventListener("click", function () {
        searchBooks(searchTxt.value);
      });

    searchTxt.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        searchBooks(e.currentTarget.value);
      }
    });

    searchTxt.focus();
  }
}
export default Main;
