const Hospital = require('../models/hospitalModel');
const { v4: uuidv4 } = require('uuid');

exports.loginController = async (req, res) => {
    try{
        const {hospitalId} = req.body;
    }catch(err){
        res.status(400).json({
            success: false,
            message: err
        })
    }
}