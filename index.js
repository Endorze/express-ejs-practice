import express from "express";
import godRouter from "./routes/godRouter.js";
import heroRouter from "./routes/heroRouter.js";

const app = express();
app.use(express.static("public"))
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("pages/home", {
        pageType: "home",
        headTitle: "Greek Mythology",
        title: "Welcome to the Olympus",
        subtitles: "Learn about the different gods and their weaknesses!"
    });
})

app.use("/gods", godRouter);
app.use("/heroes", heroRouter);

app.listen(port, () => console.log("Server running on port 3000"));