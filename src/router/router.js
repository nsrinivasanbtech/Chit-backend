const express = require('express')
const router = new express.Router()
const details = require('../models/details')

router.get('/details', async (req, res) => {
    try {
        const detail = await details.find({})
        console.log(detail)
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(detail)
    } catch(e) {
        res.send(e).status(500)
    }
})

router.get('/test', (req,res) => {
    res.send('From a new file')
})

module.exports = router