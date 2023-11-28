exports.registerDonor = async (req, res) => {
    try{
        // add this user to patient database
        const data = req.body;
        res.send(data)
    }catch(err){
        res.status(401).json({
            success: false,
            message: err
        })
    }
}

exports.getRegisteredDonors = async (req, res) => {
    try{
        res.send("getting registered donors...")
    }catch(err){
        res.status(401).json({
            success: false,
            message: err
        })
    }
}

exports.getVerifiedDonors = async (req, res) => {
    try{
        res.send("getting verified donors...")
    }catch(err){
        res.status(401).json({
            success: false,
            message: err
        })
    }
}

exports.getDonatedDonors = async (req, res) => {
    try{
        res.send("getting donated donors...")
    }catch(err){
        res.status(401).json({
            success: false,
            message: err
        })
    }
}