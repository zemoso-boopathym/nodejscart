import path from "path";

import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";

import adminRoutes from "./routes/admin";
import shopRoutes from "./routes/shop";

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false })); // x-www-form-urlencoded <form>
// app.use(bodyParser.json()); // application/json
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/admin", adminRoutes.router);
app.use(shopRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
