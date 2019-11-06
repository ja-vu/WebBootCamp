const request = require('request');

// ES6 => instead of function()
request('https://jsonplaceholder.typicode.com/users/1', (error, response, body) => {
    //eval(require('locus'))
  if(!error && response.statusCode == 200){
      const parsedData = JSON.parse(body);
      //OLD WAY:
      //console.log(parsedData.name + ' lives in ' + parsedData.address.city);

      //NEW WAY (ES6 syntax):
      console.log(`${parsedData.name} lives in ${parsedData.address.city}`);
  }
});