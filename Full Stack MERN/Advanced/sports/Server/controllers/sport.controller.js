  
const Sport = require('../models/sport.model');
 
module.exports.findAllSports = (req, res) => {
    Sport.find()
        .then(allDaSports => res.json( allDaSports ))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.findOneSingleSport = (req, res) => {
    Sport.findOne({ _id: req.params.id })
        .then(oneSingleSport => {
            res.json(oneSingleSport)
            console.log(oneSingleSport)
    })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createNewSport = (req, res) => {
    Sport.create(req.body)
        .then(newlyCreatedSport => res.json({ newlyCreatedSport }))
        .catch(err => res.status(400).json(err));
}

module.exports.updateExistingSport = (req, res) => {
    Sport.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedSport => res.json({updatedSport }))
        .catch(err => res.status(400).json(err));
}

module.exports.deleteAnExistingSport = (req, res) => {
    Sport.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}