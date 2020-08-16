const People = require('./controller/people');
const PeopleController = new People();

module.exports.create = (event, context) => {
    return PeopleController.create(event, context);
};

module.exports.update = (event) => PeopleController.update(event);

module.exports.find = () => PeopleController.find();

module.exports.findOne = (event, context) => {
    return PeopleController.findOne(event, context);
};

module.exports.deleteOne = (event) => PeopleController.deleteOne(event);
