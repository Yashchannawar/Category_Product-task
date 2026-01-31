import db from "../config/db.js";

// SHOW PRODUCTS PAGE (with pagination)
export const getProducts = (req, res) => {
  const message = req.query.msg;
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const offset = (page - 1) * limit;

  // Count total records for pagination
  db.query("SELECT COUNT(*) AS total FROM products", (err, countResult) => {
    if (err) throw err;
    const total = countResult[0].total;
    const totalPages = Math.ceil(total / limit);

    // Get products with category info
    const sql = `
      SELECT 
        p.productId,
        p.productName,
        c.categoryId,
        c.categoryName
      FROM products p
      JOIN categories c ON p.categoryId = c.categoryId
      ORDER BY  p.productId ASC
      LIMIT ? OFFSET ?
    `;

    db.query(sql, [limit, offset], (err, products) => {
      if (err) throw err;

      // Get all categories for dropdown
      db.query("SELECT * FROM categories", (err, categories) => {
        if (err) throw err;

        res.render("products", {
          products,
          categories,
          currentPage: page,
          totalPages,
          message
        });
      });
    });
  });
};

// CREATE PRODUCT
export const createProduct = (req, res) => {
  const { productName, categoryId } = req.body;

  if (!productName || !categoryId) {
    return res.redirect("/api/products?msg=error");
  }

  const sql = "INSERT INTO products (productName, categoryId) VALUES (?, ?)";
  db.query(sql, [productName, categoryId], (err) => {
    if (err) return res.redirect("/api/products?msg=error");

    res.redirect("/api/products?msg=created");
  });
};

// DELETE PRODUCT
export const deleteProduct = (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM products WHERE productId=?";
  db.query(sql, [id], (err) => {
    if (err) return res.redirect("/api/products?msg=error");

    res.redirect("/api/products?msg=deleted");
  });
};

// SHOW EDIT FORM
export const showEditProduct = (req, res) => {
  const { id } = req.params;

  db.query("SELECT * FROM products WHERE productId=?", [id], (err, product) => {
    if (err) throw err;

    db.query("SELECT * FROM categories", (err, categories) => {
      if (err) throw err;

      res.render("edit-product", {
        product: product[0],
        categories
      });
    });
  });
};

// UPDATE PRODUCT
export const updateProduct = (req, res) => {
  const { id } = req.params;
  const { productName, categoryId } = req.body;

  const sql = "UPDATE products SET productName=?, categoryId=? WHERE productId=?";
  db.query(sql, [productName, categoryId, id], (err) => {
    if (err) return res.redirect("/api/products?msg=error");

    res.redirect("/api/products?msg=updated");
  });
};
