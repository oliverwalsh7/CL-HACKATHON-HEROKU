const http = require('http')
var pg = require('pg');
const path = require('path');
const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');

var resp = ''


startExpress = async() => {
  const app = express()
  
  // const server = http.createServer();
  // const port = 8081
  // const host = 'localhost'
  // server.listen(port, host)
  // console.log(`Listening at http://${host}:${port}`)
  var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
  };

  app.use(allowCrossDomain);

  var allowedOrigins = [
    'https://electchain-scvs.herokuapp.com/',
    `https://electchain-scvs.herokuapp.com/${process.env.PORT}`,
    `https://electchain-scvs.herokuapp.com/${process.env.PWD}`,
    'http://localhost:8081'];
    
  app.use(cors({
    
    origin: function(origin, callback){
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if(!origin) return callback(null, true);
      if(allowedOrigins.indexOf(origin) === -1){
        var msg = 'The CORS policy for this site does not ' +
        'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    
    exposedHeaders: ['Access-Control-Allow-Headers', 'Access-Control-Allow-Methods', 'Access-Control-Allow-Origin'],
    
    credentials: true,
  }));
  
  process.env.PWD = process.cwd();
  app.use(express.static(path.join(process.env.PWD, 'public')));

  app.get("/*", cors({

    origin: function(origin, callback){
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if(!origin) return callback(null, true);
      if(allowedOrigins.indexOf(origin) === -1){
        var msg = 'The CORS policy for this site does not ' +
                  'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  
    exposedHeaders: ['Access-Control-Allow-Headers','Access-Control-Allow-Origin'],
  
    credentials: true,
  }), function(req, res) {
    console.log(req.headers)
    console.log('GET')
    console.log(req.url)
    let URLParams = new URLSearchParams(req.url)
    let query = '';
    if (URLParams.get('type') == 1) {
      query = `SELECT COUNT(*) from linktopia WHERE
        ssn='${URLParams.get('/?ssn')}' AND
        first_name='${URLParams.get('fname')}' AND
        last_name='${URLParams.get('lname')}' AND
        dob='${URLParams.get('dob')}' AND
        address IS NULL`
    } else if (URLParams.get('type') == 2) {
      query = `SELECT ssn, first_name, last_name, dob, town, state FROM linktopia 
      ORDER BY RANDOM()
      LIMIT 1`
    } else if (URLParams.get('type') == 3) {
      query = `SELECT * from linktopia WHERE
      address='${URLParams.get('address')}'`
      console.log(URLParams.get('address'))
    }
    getDB(query)
    console.log(res)
    res.send(resp)
  })

  app.post('/*', cors({

    origin: function(origin, callback){
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if(!origin) return callback(null, true);
      if(allowedOrigins.indexOf(origin) === -1){
        var msg = 'The CORS policy for this site does not ' +
                  'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  
    exposedHeaders: ['Access-Control-Allow-Origin'],
  
    credentials: true,
  }), function(req, res) {
    if (request.method == 'POST') {
      console.log('POST')
      let URLParams = new URLSearchParams(request.url)
      query = `UPDATE linktopia SET
        address='${URLParams.get('address')}' WHERE
        ssn='${URLParams.get('/?ssn')}' AND
        first_name='${URLParams.get('fname')}' AND
        last_name='${URLParams.get('lname')}' AND
        dob='${URLParams.get('dob')}'`
      console.log(query)
      getDB(query)

      console.log(res)
      res.send(resp)
    }})

  const port = process.env.PORT || 8081
  app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })

}

getDB = async(query) => {
  var conString = "postgres://ujbgxlwy:Seo5GSBlI3W7rZdgOPems-QTC6kZ9IbN@ziggy.db.elephantsql.com:5432/ujbgxlwy" //Can be found in the Details page
  var client = new pg.Client(conString);
  client.connect(function(err) {
  if(err) {
      return console.error('could not connect to postgres', err);
  }
  client.query(query, function(err, result) {
      if(err) {
      return console.error('error running query', err);
      }

      resp = result.rows[0]
      
      client.end();
      return resp;
    });
  });
}

startExpress();