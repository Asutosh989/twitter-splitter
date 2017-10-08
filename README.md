# Twitter-Splitter
Splits long tweets into 140-character blocks. Sharing your limitless thoughts have never been easier.

## Setting Up

#### Installing dependencies

```
$ npm install
```

#### Twitter `Consumer Key and Secret`

The app needs some API keys to be able to post to twitter.

[Click here](https://apps.twitter.com/app/new) to create a new twitter app. After creating the app, you will find the details of your app in the `Keys and Access Token` tab.

twitter-splitter stores your settings in a '.env' file. To create your .env file

```$ touch .env```

Open it in your favorite text editor and paste the following contents. Replace the dummy values with actual onces that you obtained while creating your app on twitter.
```
CONSUMER_SECRET=XXXXXXXXXXXXXXXXXXXXXXX
CONSUMER_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXX
ACCESS_TOKEN=XXXXXXXXXXXXXXXXXXXXXXXXXX
ACCESS_TOKEN_SECRET=XXXXXXXXXXXXXXXXXXX
CALLBACK_URL=XXXXXXXXXXXXXXXXXXXXXXXXX
```

#### Starting the project

```
$ npm start 
```
After it starts, open http://localhost:3000 in the browser to see it in action


## Want to contribute to this project? Please check the instructions in CONTRIBUTE.md.

