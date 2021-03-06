<!--
title: 'Serverless Nodejs Rest API with DynamoDB'

description: 'This is simple REST API example for AWS Lambda By Serverless  with node.'
framework: v1
platform: AWS
language: nodeJS
authorName: 'Josmel yupanqui'
authorAvatar: 'https://github.com/josmel'
-->
# Serverless Nodejs Rest API with DynamoDb

This is simple REST API example for AWS Lambda By Serverless framwork with node and DynamoDB.

## Use Cases

* REST API with node
* DynamoDB
* Mocha unit tests and lambda-tester interface test

## Invoke the function locally

```bash
serverless invoke local --function peopleDetails
```

Which should result in:

```bash

{
    "statusCode": 200,
    "body": "{\"code\":0,\"message\":\"success\",\"data\":[]}"
}
```

## Deploy

### To Test It Locally

* Run ```npm install``` to install all the necessary dependencies.
* Run ```npm run local``` use serverless offline to test locally. 

### Deploy on AWS, simply run:

```
$ npm run deploy

# or

$ serverless deploy
```

The expected result should be similar to:

```
Serverless: Compiling with Typescript...
Serverless: Using local tsconfig.json
Serverless: Typescript compiled.
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service aws-node-rest-api-typescript.zip file to S3 (1.86 MB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
......................................
Serverless: Stack update finished...
Service Information
service: aws-node-rest-api-typescript
stage: dev
region: us-east-1
stack: aws-node-rest-api-typescript-dev
resources: 32
api keys:
  None
endpoints:
  POST - https://xxxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/api/people
  PUT - https://xxxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/api/people/{id}
  GET - https://xxxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/api/people
  GET - https://xxxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/api/people/{id}
  DELETE - https://xxxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/api/people/{id}
functions:
  peopleCreate: aws-node-rest-api-typescript-dev-create
  peopleUpdate: aws-node-rest-api-typescript-dev-update
  peopleList: aws-node-rest-api-typescript-dev-find
  peopleDetails: aws-node-rest-api-typescript-dev-findOne
  peopleDelete: aws-node-rest-api-typescript-dev-deleteOne
layers:
  None
Serverless: Removing old service artifacts from S3...
Serverless: Run the "serverless" command to setup monitoring, troubleshooting and testing.
```

## Usage

send an HTTP request directly to the endpoint using a tool like curl

```
curl https://xxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/people
```

## Use-case Local

Test your service locally, without having to deploy it first.

## Setup

```bash
npm install
serverless dynamodb install
serverless offline start
serverless dynamodb migrate (this imports schema)
```

## Run service offline

```bash
serverless offline start
```

## test mocha

```bash
npm test
```

## test serverless framework

```bash
sls test
```
