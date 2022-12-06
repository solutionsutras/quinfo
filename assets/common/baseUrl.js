import { Platform } from'react-native';

let baseUrl = ''

{Platform.OS == 'android'
// ? baseUrl = 'http://10.0.2.2:3000/api/v1/'
? baseUrl = 'http://192.168.43.18:3000/api/v1/'
: baseUrl = 'http://localhost:3000/api/v1/'
}

// google app engine api
baseUrl = 'https://bricksnstones-backend.el.r.appspot.com/api/v1/';

// Old heroku app api

// let baseUrl = 'https://rat-build-sol-server.herokuapp.com/api/v1/'

export default baseUrl;