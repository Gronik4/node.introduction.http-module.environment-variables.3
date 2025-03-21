const http = require('http');

const myAPIKey = process.env.apiKey;
const url = `http://api.weatherstack.com/current?access_key=${myAPIKey}&query=Nigniy Novgorod`;

http.get(url, (res)=> {
  const {statusCode} = res;
  if(statusCode !== 200) {
    console.log(`statusCode: ${statusCode}`);
    return;
  }

  res.setEncoding('utf8');
  let reqData = '';
  res.on('data', (chunk)=> reqData += chunk);
  res.on('end', ()=> {
    let parseData = JSON.parse(reqData);
    console.log(parseData);
  })
}).on('error', (err)=> console.error(err));
