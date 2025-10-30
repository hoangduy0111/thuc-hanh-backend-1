const { request } = require("express");

const contactsRouter = require("./app/routes/contact.route");

const express = require("express");
const cors = require("cors");

const ApiError = require("./app/api-error");

const app = express();


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "Welcome tp contact book application."});
});

app.use("/api/contacts", contactsRouter);


//handle 404 response
app.use((req, res, next) => {
    // code o day se chay khi khong co route duoc dinh nghia vao
    // khop voi yeu cau. goi next() de chuyen sang middleware xu ly loi 
    return next(new ApiError(404, "Resource not found"));
});

// define error- handling middleware last, affter other app.use() and routes calls
app.use((error, req, res, next) => {
    // middleware xu ly loi tap trung
    // trong cac doan code xu ly o cac route, goi next(error) se chuyen ve middleware xu ly loi nay
    return res.status(error.statusCode || 500).json({
        message: error.message || "Internal Server Error",
    });
});

module.exports = app;