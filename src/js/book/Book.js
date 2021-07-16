class Book {
  constructor() {
    const searchTxt = document.querySelector(".search-nav-box");

    const searchBooks = (searchText) => {
      if (searchText.trim().length === 0) {
        document.querySelectorAll("div.card-body").forEach((card) => {
          const theELement = card.parentElement.parentElement.parentElement;
          theELement.classList.remove("d-none");
        });
      } else {
        document.querySelectorAll("div.card-body").forEach((card) => {
          const theELement = card.parentElement.parentElement.parentElement;
          const theTitleEl = card.querySelector("h6");
          const bName = theTitleEl.innerText.toLowerCase();
          const terms = theTitleEl.dataset.terms
            ? theTitleEl.dataset.terms
            : "";
          let isMatching = false;
          if (
            bName.indexOf(searchText) !== -1 ||
            terms.indexOf(searchText) !== -1
          ) {
            isMatching = true;
          } else {
            const authors = card.querySelector("p").innerText;
            if (authors.indexOf(searchText) !== -1) {
              isMatching = true;
            }
          }
          if (isMatching) {
            theELement.classList.remove("d-none");
          } else {
            theELement.classList.add("d-none");
          }
        });
      }
    };

    searchTxt.addEventListener("input", (event) => {
      searchBooks(event.currentTarget.value.trim().toLowerCase());
    });

    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has("search")) {
      searchTxt.value = urlParams.get("search").trim();
      searchBooks(searchTxt.value.toLowerCase());
    }

    searchTxt.focus();
  }
}
export default Book;
