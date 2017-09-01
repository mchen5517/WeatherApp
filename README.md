# Sky Cast Inc. Weather App

A simple weather app that allows users to look up locations (via GoogleMaps) and get weather information at that location (via DarkSky).

http://sky-cast-weather-app-mc.herokuapp.com/

Project by Michael Chen

## Features

* 7-day forecast at any location available on google maps
* Weather data from the past month and a week into the future
* Search results saved between browser sessions

## Major Dependencies

[create-react-app](https://github.com/facebookincubator/create-react-app) - used to setup boilerplate, including react, webpack, and babel

[redux](https://github.com/reactjs/redux)

## How to Use

### Pre-requisites

yarn global command
```sh
npm install -g yarn
```

create-react-app global command
```sh
npm install -g create-react-app
```

.env in root is required
```sh
REACT_APP_DARK_SKY_KEY=[DARKSKY_API_KEY]
REACT_APP_GOOGLE_MAPS_KEY=[GOOGLE_MAPS_API_KEY]
```

### Building and Running
```sh
yarn build
node app.js
```
Server should be serving files on port 30000