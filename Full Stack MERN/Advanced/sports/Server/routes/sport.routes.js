const SportController = require('../controllers/sport.controller');
 
module.exports = app => {
    app.get('/api/sports', SportController.findAllSports);
    app.get('/api/sports/:id', SportController.findOneSingleSport);
    app.put('/api/sports/:id', SportController.updateExistingSport);
    app.post('/api/sports', SportController.createNewSport);
    app.delete('/api/sports/:id', SportController.deleteAnExistingSport);
}