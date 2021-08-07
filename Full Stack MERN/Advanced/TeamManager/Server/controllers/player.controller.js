const Player = require('../models/player.model');
 
module.exports.findAllPlayers = (req, res) => {
    Player.find()
        .then(allDaPlayers => res.json( allDaPlayers ))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.findOneSinglePlayer = (req, res) => {
    Player.findOne({ _id: req.params.id })
        .then(oneSinglePlayer => res.json( oneSinglePlayer ))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createNewPlayer = (req, res) => {
    const { name, position } = req.body;
    console.log(req.body)
    Player.create({
        name,
        position,
        game1:"undecided",
        game2:"undecided",
        game3:"undecided"
    })

        .then(newlyCreatedPlayer => res.json(newlyCreatedPlayer ))
        .catch(err => res.status(400).json(err));
}

module.exports.updateExistingPlayer = (req, res) => {
    Player.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPlayer => res.json(updatedPlayer ))
        .catch(err => res.status(400).json(err));
}

module.exports.deleteAnExistingPlayer = (req, res) => {
    Player.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}