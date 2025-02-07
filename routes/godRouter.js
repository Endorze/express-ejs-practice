import express from "express";

const godRouter = express.Router();

godRouter.get("/", (req, res) => {
    res.render("pages/featurePage", {
        pageType: "gods",
        bodyClass: "gods",
        headTitle: "Greek Mythology",
        title: "Welcome heroes! This is where men are made to men",
        subtitles: "Fight a tiger today!",
    });
})

godRouter.get("/zeus", (req, res) => {
    res.render("pages/featurePage", {
        godName: "zeus",
        pageType: "gods",
        bodyClass: "gods",
        headTitle: "Greek Mythology",
        title: "Welcome heroes! This is where men are made to men",
        subtitles: "Fight a tiger today!",
    })
})

godRouter.get("/hera", (req, res) => {
    res.render("pages/featurePage", {
        godName: "hera",
        pageType: "gods",
        bodyClass: "gods",
        headTitle: "Greek Mythology",
        title: "Welcome heroes! This is where men are made to men",
        subtitles: "Fight a tiger today!",
    })
})

export default godRouter;
