const express = require("express");
const router = express.Router();
const { createPrompt } = require('../api/openai')


router.get("/", (req, res) => {
    console.log('ok');
    res.status(200).json({
        res: "Hello, world!"
    });
});

router.get('/:prompt', createPrompt)

module.exports = router