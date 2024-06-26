import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));

app.use(express.json({ limit: "16kb" }));

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public"));

app.use(cookieParser());

// http://localhost:8000/api/v1/users

// import files
import healthCheckRoute from "./routes/healthCheck.router.js";
import userRoute from "./routes/user.router.js";
import productRoute from "./routes/product.router.js";
import cartRoute from "./routes/cart.router.js";
import orderRoute from "./routes/order.router.js";
import addressRoute from "./routes/address.router.js";

app.use("/healthcheck", healthCheckRoute);
app.use("/users", userRoute);
app.use("/products", productRoute);
app.use("/carts", cartRoute);
app.use("/orders", orderRoute);
app.use("/address", addressRoute);

app.get("*", (req, res, next) => {
    res.status(200).json({
        message: "bad request",
    });
});

export { app };
