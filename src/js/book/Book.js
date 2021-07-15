class Book {
  constructor() {
    const searchTxt = document.querySelector(".search-nav");

    searchTxt.addEventListener("input", (event) => {
      const searchText = event.currentTarget.value.trim().toLowerCase();

      if (searchText.trim().length === 0) {
        document.querySelectorAll("div.card-body").forEach((card) => {
          const theELement = card.parentElement.parentElement.parentElement;
          theELement.classList.remove("d-none");
        });
      } else {
        document.querySelectorAll("div.card-body").forEach((card) => {
          const theELement = card.parentElement.parentElement.parentElement;
          const theTitleEl = card.querySelector("h6");
          const bName = theTitleEl.innerText;
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
    });
    searchTxt.focus();
  }
}
export default Book;
