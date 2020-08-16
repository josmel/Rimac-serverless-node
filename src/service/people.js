'use strict';

const AWS = require('aws-sdk');
const TABLE = process.env.PEOPLE_TABLE;

class PeopleService {

    /**
     * @description Create an instance of DynamoDB
     */
    constructor() {
        this.dynamoDb = new AWS.DynamoDB.DocumentClient();
        this.params = {
            TableName: TABLE
        }
    }

    async createPeople(peopleToCreate) {
        try {

            this.params.Item = peopleToCreate;

            const result = await this.dynamoDb.put(this.params).promise();
            return result;
        } catch (err) {
            throw err;
        }
    }

    async findPeoples() {
        try {
            const result = await this.dynamoDb.scan(this.params).promise();
            return result;
        } catch (err) {
            throw err;
        }
    }

    async findOnePeopleById(peopleId) {
        try {
            this.params.Key = peopleId;
            const result = await this.dynamoDb.get(this.params).promise();
            return result;
        } catch (err) {

            throw err;
        }
    }

    async deleteOnePeopleById(peopleId) {
        try {

            this.params.Key = peopleId;

            const result = await this.dynamoDb.delete(this.params).promise();
            return result;
        } catch (err) {
            throw err;
        }
    }
    async updatePeoples(peopleId, peopleToUpdate) {
        try {

            let updateExpression = 'set';
            let ExpressionAttributeNames = {};
            let ExpressionAttributeValues = {};
            for (const property in peopleToUpdate) {
                updateExpression += ` #${property} = :${property} ,`;
                ExpressionAttributeNames['#' + property] = property;
                ExpressionAttributeValues[':' + property] = peopleToUpdate[property];
            }
            updateExpression = updateExpression.slice(0, -1);

            this.params.Key = {
                id: peopleId
            };
            this.params.UpdateExpression = updateExpression;
            this.params.ExpressionAttributeNames = ExpressionAttributeNames;
            this.params.ExpressionAttributeValues = ExpressionAttributeValues;
            this.params.ReturnValues = "UPDATED_NEW";

            const result = await this.dynamoDb.update(this.params).promise();
            return result;
        } catch (err) {
            throw err;
        }
    }

}


module.exports = PeopleService;
