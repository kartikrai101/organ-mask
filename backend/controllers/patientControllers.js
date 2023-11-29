const { v4: uuidv4 } = require('uuid');
const Donor = require('../models/donorModel');

exports.registerDonor = async (req, res) => {
  try {
    // add this user to donor table
    const data = req.body;
    const donorId = uuidv4();
    const donorData = {
      donorId: donorId,
      fname: data.fname,
      lname: data.lname,
      email: data.email,
      contact: data.contact,
      dob: data.dob,
      gender: data.gender,
      bloodType: data.bloodType,
      state: data.state,
      district: data.district,
      address: data.address,
      medicalHistoryUrl: data.medicalHistoryUrl,
      idProofUrl: data.idProofUrl,
      status: 'registered',
      donatedOrgan: '-NA-',
      blockchainToken: '-NA-',
    };

    // insert this donor in the database
    const newDonor = await Donor.create(donorData);

    res.status(201).json({
      success: true,
      message: 'Donor successfully registered!',
      newDonor,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: err,
    });
  }
};

// exports.getRegisteredDonors = async (req, res) => {
//     try{
//         // fetch all the donors whose status is "registered"
//         const registeredDonors = await Donor.findAll({
//             where: {
//                 status: "registered"
//             }
//         })

//         res.status(200).json({
//             success: true,
//             message: "Successfully fetched list of all registered donors",
//             registeredDonors
//         })
//     }catch(err){
//         res.status(401).json({
//             success: false,
//             message: err
//         })
//     }
// }

// exports.getVerifiedDonors = async (req, res) => {
//     try{
//         const registeredDonors = await Donor.findAll({
//             where: {
//                 status: "verified"
//             }
//         })

//         res.status(200).json({
//             success: true,
//             message: "Successfully fetched list of all verified donors",
//             registeredDonors
//         })
//     }catch(err){
//         res.status(401).json({
//             success: false,
//             message: err
//         })
//     }
// }

// exports.getDonatedDonors = async (req, res) => {
//     try{
//         const registeredDonors = await Donor.findAll({
//             where: {
//                 status: "donated"
//             }
//         })

//         res.status(200).json({
//             success: true,
//             message: "Successfully fetched list of all donated donors",
//             registeredDonors
//         })
//     }catch(err){
//         res.status(401).json({
//             success: false,
//             message: err
//         })
//     }
// }
