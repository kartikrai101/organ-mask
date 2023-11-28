const { v4: uuidv4 } = require('uuid');
const Recipient = require('../models/recipientModel');

exports.registerRecipient = async (req, res) => {
    try{
        // add this user to donor table
        const data = req.body;
        const recipientId = uuidv4();
        const recipientData = {
            recipientId: recipientId, fname: data.fname, lname: data.lname, 
            email: data.email, contact: data.contact, dob: data.dob, gender: data.gender, 
            bloodType: data.bloodType, state: data.state, district: data.district, address: data.address,
            medicalHistoryUrl: data.medicalHistoryUrl, idProofUrl: data.idProofUrl, status: "registered", requestedOrgan: "-NA-",  blockchainToken: "-NA-"
        }

        // insert this donor in the database
        const newRecipient = await Recipient.create(recipientData);

        res.status(201).json({
            success: true,
            message: "Recipient successfully registered!",
            newRecipient
        })
    }catch(err){
        res.status(401).json({
            success: false,
            message: err
        })
    }
}

// exports.getRegisteredRecipients = async (req, res) => {
//     try{
//         // fetch all the donors whose status is "registered"
//         const registeredRecipients = await Recipient.findAll({
//             where: {
//                 status: "registered"
//             }
//         })

//         res.status(200).json({
//             success: true,
//             message: "Successfully fetched list of all registered recipients",
//             registeredRecipients
//         })
//     }catch(err){
//         res.status(401).json({
//             success: false,
//             message: err
//         })
//     }
// }

// exports.getVerifiedRecipients = async (req, res) => {
//     try{
//         const verifiedRecipients = await Recipient.findAll({
//             where: {
//                 status: "verified"
//             }
//         })

//         res.status(200).json({
//             success: true,
//             message: "Successfully fetched list of all verified recipients",
//             verifiedRecipients
//         })
//     }catch(err){
//         res.status(401).json({
//             success: false,
//             message: err
//         })
//     }
// }

// exports.getReceivedRecipients = async (req, res) => {
//     try{
//         const receivedRecipients = await Recipient.findAll({
//             where: {
//                 status: "received"
//             }
//         })

//         res.status(200).json({
//             success: true,
//             message: "Successfully fetched list of all received recipients",
//             receivedRecipients
//         })
//     }catch(err){
//         res.status(401).json({
//             success: false,
//             message: err
//         })
//     }
// }