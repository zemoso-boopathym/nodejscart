import express, { Request, Response, NextFunction } from "express";

import adminRoutes from "./admin";

const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  const products = adminRoutes.products;
  res.render("shop", { prods: products, pageTitle: "My Shop", path: "/" });
});

export default router;
