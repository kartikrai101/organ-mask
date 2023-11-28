const express = require('express');
const router = express.Router();
const {registerDonor, getRegisteredDonors, getVerifiedDonors, getDonatedDonors} = require('../controllers/patientControllers');
const {registerRecipient, getRegisteredRecipients, getVerifiedRecipients, getReceivedRecipients} = require('../controllers/recipientControllers')

// ---------------- donor routes ----------------------------
router.route('/donor/register').post(registerDonor);
router.route('/donor/registered').get(getRegisteredDonors);
router.route('/donor/verified').get(getVerifiedDonors);
router.route('/donor/donated').get(getDonatedDonors);


// ---------------- recipient routes ----------------------------
router.route('/recipient/register').post(registerRecipient)
router.route('/recipient/registered').get(getRegisteredRecipients);
router.route('/recipient/verified').get(getVerifiedRecipients);
router.route('/recipient/received').get(getReceivedRecipients);

module.exports = router;