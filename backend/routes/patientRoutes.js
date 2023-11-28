const express = require('express');
const router = express.Router();
const {registerDonor, getRegisteredDonors, getVerifiedDonors, getDonatedDonors} = require('../controllers/patientControllers');

router.route('/donor/register').post(registerDonor);
router.route('/donor/registered').get(getRegisteredDonors);
router.route('/donor/verified').get(getVerifiedDonors);
router.route('/donor/donated').get(getDonatedDonors);

module.exports = router;