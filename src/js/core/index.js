const searchTxt = document.querySelector(".form-control");

if (
  !window.location.href.endsWith("/books") &&
  !window.location.href.endsWith("/books/")
) {
  searchTxt.addEventListener("focus", () => {
    window.location.href = "/books";
  });
} else {
  // eslint-disable-next-line no-undef
  const index = new FlexSearch.Document({
    document: {
      id: "title",
      field: ["title", "author", "tags"],
    },
  });
  searchTxt.addEventListener("input", (event) => {
    if (event.currentTarget.value.trim().length !== 0) {
      document.querySelectorAll("div.card-body").forEach((card) => {
        const bName = card.querySelector("h6").innerText;
        if (bName.startsWith(event.currentTarget.value)) {
          console.log(card);
        }
      });
    }
  });

  searchTxt.focus();

  const books = [
    {
      title: "ஆத்திசூடி",
      author: "ஒளவையார்",
      tags: ["d", "v"],
    },
    {
      title: "கொன்றை வேந்தன்",
      author: "ஒளவையார்",
      tags: ["f", "gggggtytyt"],
    },
    {
      title: "நல்வழி",
      author: "ஒளவையார்",
      tags: ["f", "gggggtytyt"],
    },
    {
      title: "மூதுரை",
      author: "ஒளவையார்",
      tags: ["f", "gggggtytyt"],
    },
  ];

  // add posts to the index
  books.forEach((book) => {
    index.add(book);
  });
}
