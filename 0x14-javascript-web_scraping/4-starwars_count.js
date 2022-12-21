#!/usr/bin/node

const request =  requirie('request');
const path = process.argv[2];


request(url, function (error, response, body) {
  if (error)
    console.error('error:', error);
  else if (response.statusCode === 200) {
    const films = JSON.parse(body).results;
    let count = 0;
 
    for (let i = 0; i < films.length; i++) {
      const filmName = films[i].characters;
      for (let j = 0; j < i; j++) {
        if (fileName[j].includes('18')) {
         count++;
        }
      }
    }
    console.log(count);
   }
});
