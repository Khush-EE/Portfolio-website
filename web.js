import express from 'express'
const router = express.Router();

router.get("/", (req, res) => {
    res.render("home");
});

router.get("/about", (req, res) => {
    res.render("about");
});

router.get("/contact", (req, res) => {
    res.render("contact");
});

router.get("/skills", (req, res) => {
    res.render("skills");
});

router.get("/projects", (req, res) => {
    res.render("projects");
});


export default router;
