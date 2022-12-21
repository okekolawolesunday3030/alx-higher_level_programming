#!/usr/bin/node

const request =  require('request');
const number = process.argv[2];
const url = 'https://swapi-api.alx-tools.com/api/films/';

request(url + number, function (error, response, body) {
  if (error)
    console.error('error:', error);
  else if (response.statusCode === 200) {
     const jsonobj = JSON.parse(body);
     console.log(jsonobj.title);
  }
});
