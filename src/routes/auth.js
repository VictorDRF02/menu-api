const authService = require('../services/auth.service');
const express = require("express");
const router = express.Router();

router.post('/login', async (req, res) => {
    return await authService.login(
        req.body.name,
        req.body.password,
        res
      );
});

module.exports = router;