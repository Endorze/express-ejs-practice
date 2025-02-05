import express from "express";

const heroRouter = express.Router();

heroRouter.get("/", (req, res) => {
    res.render("pages/featurePage", {
        bodyClass: "heroes",
        headTitle: "Greek Mythology",
        title: "Welcome to the hero page",
        subtitles: "Get ready to see the upcoming battle between Hercules and Odysseus!",
    });
})


heroRouter.get("/hercules", (req, res) => {
    res.send("Yassou! Welcome to the Hercule's page");
})


heroRouter.get("/odysseus", (req, res) => {
    res.send("Yassou! Welcome to the Odysseus's page");
})

export default heroRouter;