# Ravenous (Simple Yelp Clone) 
Ravenous is a simple Yelp Clone created with `ReactJS`. This front-end project is part of Codecademy's course on ReactJS which is paired with Yelp's API.

![FullPageScreenshot](public/Ravenous_Screenshot_FullPage.png)

## How to Run Ravenous

### Clone this repo

Firstly clone this repo to a local directory.

### Setup Yelp API

1. You will also need to register to Yelp's developer account and get access to an API Token provided there. 
2. After you got the API key from Yelp, create a `config.js` file inside the `/utils` folder inside the cloned directory.
3. In that `config.js` create an exportable object called `API_KEY` like so
```
    var config = {
        API_KEY : '<Your API key here>',
    }

    export default config;
```

### Run the App

 `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Enable Heroku CORSdemo

Since Ravenous relies on external Yelp API, you need to enable temporary access to it by going to 
https://cors-anywhere.herokuapp.com/corsdemo
and click on the "Request temporary access to demo server" button.

That's it, youre all set !

## Ravenous Notes

### Ravenous Components
- App - Main `Stateful Parent Component`
- Business - Each Restaureant Card `Stateless Child Component`
- BusinessList - Compilation of Business Component `Stateless Child Component`
- SearchBar - Search Bar Component `Stateless Child Component`

### Improvements Needed
- Since this is the simplest version of Yelp's clone, some limitations are expected.
- Text fill on both input are needed, which will otherwise result in an error.
- Restaurant options are simply display and not clickable.
