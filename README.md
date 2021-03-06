# Repo Description

This app uses MeaningCloud API NLP service to provide sentiment analysis for articles given an article link.

## Getting up and running

Remember that once you clone, you will still need to install everything:

`cd` into your new folder and run:
- `npm install`

### Step 1: Start Server

- ```npm start``` to start the app
-  default port is 8081

### Step 2: Set API_KEY
- create .env file and add API-key you take from MeaningCloud license key.
- API_KEY=**************************

### Step 3: Running app
####Development environment
* To run this application in development enviroment: 
```bash
npm run build-dev
```

####Production environment
* To run this application in producion enviroment:
```bash
npm run build-prod
```

####Testing
* To run tests:
```bash
npm test
```
