'use strict';

const uuid = require('uuid');
const PeopleService = require('../service/people');
const MessageUtil = require('../utils/message');

class people extends PeopleService {

  constructor() {
    super();
  }

  /**
  * Create people
  * @param {*} event
  */
  async create(event, context) {

    const requestBody = (event.body);

    const timestamp = new Date();

    requestBody.id = uuid.v1();
    requestBody.creado = timestamp.toISOString();
    requestBody.editado = timestamp.toISOString();

    try {
      const result = await this.createPeople(requestBody);

      return MessageUtil.success(result);

    } catch (err) {

      return MessageUtil.error(err.statusCode, err.code, err.message);
    }
  }
  /**
    * Find people list
    */
  async find() {
    try {
      const result = await this.findPeoples();

      return MessageUtil.success(result.Items);
    } catch (err) {

      return MessageUtil.error(err.statusCode, err.code, err.message);
    }
  }

  /**
   * Query People by id
   * @param event
   */
  async findOne(event, context) {

    const id = event.pathParameters.id;

    try {
      const result = await this.findOnePeopleById(id);

      return MessageUtil.success(result.Item);
    } catch (err) {

      return MessageUtil.error(err.statusCode, err.code, err.message);
    }
  }

  /**
  * Delete people by id
  * @param event
  */
  async deleteOne(event) {

    const id = event.pathParameters.id;

    try {
      const result = await this.deleteOnePeopleById(id);

      return MessageUtil.success(result);

    } catch (err) {
      return MessageUtil.error(err.statusCode, err.code, err.message);
    }
  }

  /**
  * Update a people by id
  * @param event
  */
  async update(event) {

    const id = event.pathParameters.id;
    const body = JSON.parse(event.body);

    const timestamp = new Date();
    body.editado = timestamp.toISOString();

    try {
      const result = await this.updatePeoples(id, body);
      return MessageUtil.success(result.Attributes);
    } catch (err) {
      return MessageUtil.error(err.statusCode, err.code, err.message);
    }
  }
}


module.exports = people;