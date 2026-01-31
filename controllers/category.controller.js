import db from "../config/db.js";

// CREATE CATEGORY
export const createCategory = (req, res) => {
  const { categoryName } = req.body;

  if (!categoryName) {
    return res.redirect("/api/categories?msg=error");
  }

  const sql = "INSERT INTO categories (categoryName) VALUES (?)";

  db.query(sql, [categoryName], (err) => {
    if (err) {
      return res.redirect("/api/categories?msg=error");
    }
    res.redirect("/api/categories?msg=created");
  });
};

// GET ALL CATEGORIES
export const getCategories = (req, res) => {
  const message = req.query.msg;

  const sql = "SELECT * FROM categories";

  db.query(sql, (err, data) => {
    if (err) throw err;
    res.render("categories", {
      categories: data,
      message
    });
  });
};

// DELETE CATEGORY
export const deleteCategory = (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM categories WHERE categoryId=?";

  db.query(sql, [id], (err) => {
    if (err) {
      return res.redirect("/api/categories?msg=error");
    }
    res.redirect("/api/categories?msg=deleted");
  });
};



// UPDATE CATEGORY
export const updateCategory = (req, res) => {
  const { id } = req.params;
  const { categoryName } = req.body;

  const sql = "UPDATE categories SET categoryName=? WHERE categoryId=?";
  db.query(sql, [categoryName, id], (err) => {
    if (err) {
      return res.redirect("/api/categories?msg=error");
    }
    res.redirect("/api/categories?msg=updated");
  });
};

export const showEditCategory = (req, res) => {
  const { id } = req.params;

  db.query("SELECT * FROM categories WHERE categoryId=?", [id], (err, data) => {
    if (err) throw err;

    res.render("edit-category", { category: data[0] });
  });
};
