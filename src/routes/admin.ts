import path from "path";

import express, { Request, Response, NextFunction } from "express";

import rootDir from "../util/path";

const router = express.Router();

type productType = {
  title: string;
};

const products: productType[] = [];

// /admin/add-product => GET
router.get(
  "/add-product",
  (req: Request, res: Response, next: NextFunction) => {
    // res.sendFile(path.join(rootDir, '..', 'views', 'add-product.html'));
    res.render("add-product", {
      pageTitle: "Add Product",
      path: "/admin/add-product",
    });
  }
);

// /admin/add-product => POST
router.post(
  "/add-product",
  (req: Request, res: Response, next: NextFunction) => {
    products.push({ title: req.body.title });
    res.redirect("/");
  }
);

export default { router, products };
