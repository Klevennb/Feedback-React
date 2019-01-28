const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log('POST /order', req.body);
    const newFeedback = req.body;
    const sqlText = `INSERT INTO feedback (feeling, understanding, support, comments) VALUES ($1, $2, $3, $4)`;
    pool.query(sqlText,[newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
   .then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error POST /order', error);
        console.log('Error POST /api/order', error);
        res.sendStatus(500);
    });
});


module.exports = router;