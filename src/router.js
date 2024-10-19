import express from "express";
const router = express.Router();

router.get("/inicio", (req, res) => {
    res.render("inicio");
});

router.get("/api", (req, res) => {
    res.render("pages/api");
});

export default router;