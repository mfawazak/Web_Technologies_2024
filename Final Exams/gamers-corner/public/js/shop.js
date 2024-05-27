async function addToCart(id) {
  let res = await fetch("/add-to-cart", {
    method: "POST",
    body: JSON.stringify({ id }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.status < 300) {
    const toast = document.querySelector(".toast");
    const bootstrapToast = new bootstrap.Toast(toast);
    bootstrapToast.show();
  }
}

document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    const query = document.getElementById("searchInput").value;
    window.location.href = `/shop/all?search=${encodeURIComponent(query)}`;
  });
