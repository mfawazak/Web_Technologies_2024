import Product from "../models/product.model.js";

export async function getShopPage(req, res) {
  const filter = capitalize(req.params.filter);
  const search = req.query.search || "";
  const page = parseInt(req.query.page) || 1;
  const limit = 5;
  const skip = (page - 1) * limit;

  // Update search history in the session
  if (!req.session.searchHistory) {
    req.session.searchHistory = [];
  }
  if (search) {
    req.session.searchHistory.push(search);
    if (req.session.searchHistory.length > 5) {
      req.session.searchHistory.shift(); // Keep only the last five searches
    }
  }

  let query = {};
  if (search) {
    query.name = { $regex: new RegExp("^" + search + "$", "i") };
  }
  if (filter && filter !== "All") {
    query.category = filter;
  }

  let products = await Product.find(query).skip(skip).limit(limit).exec();

  const totalProducts = await Product.countDocuments(query);
  const totalPages = Math.ceil(totalProducts / limit);

  res.render("shop", {
    layout: "./layouts/main.ejs",
    user: req.session.user,
    products,
    filter,
    totalPages,
    searchHistory: req.session.searchHistory,
  });
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
