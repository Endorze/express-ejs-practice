import express from "express";

const godRouter = express.Router();

godRouter.get("/", (req, res) => {
    res.render("pages/featurePage", {
        bodyClass: "gods",
        headTitle: "Greek Mythology",
        title: "Welcome heroes! This is where men are made to men",
        subtitles: "Fight a tiger today!",
    });
})

godRouter.get("/zeus", (req, res) => {
    res.send("Yassou from the Zeus's page!");
})

godRouter.get("/hera", (req, res) => {
    res.send("Yassou from the Hera's page!");
})

export default godRouter;
