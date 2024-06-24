const Controlpanel = require('../models/controlpanel');
const path = require('path')

const updateControlPanel = async (req, res) => {
    console.log(req.body.wateringDuration)
    try {
        const data = await Controlpanel.update({
            wateringDuration: req.body.wateringDuration,
            wateringPercent: req.body.wateringPercent,
            tankDepth: req.body.tankDepth,
        }, {
                where: {
                    id: req.body.id,
                }
        });
        res.status(200).json({message: "data updated successully"})
    } catch (error) {
        res.status(500).json({message: "error updating data", data: req.body})
    }
};

const getControlPanel = async (req, res) => {
    try {
        const data = await Controlpanel.findAll()
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: "error getting the data"});
    };
};

const indexControlPanel = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'control-panel.html'));
};


const getLatestData = async (req,  res) => {
    try {
        const data = await Controlpanel.findOne({
            where: {
                id: 1
            }
        })
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: "couldnt get data"});
    };
}

module.exports = {
    updateControlPanel,
    getControlPanel,
    indexControlPanel,
    getLatestData,
}