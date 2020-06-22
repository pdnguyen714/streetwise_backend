var express = require('express');
var router = express.Router();
const config = require('../../database')
const { Client } = require('pg');

router.get('/', async (req, res, next) => {
  const client = new Client(config);
  await client.connect();
  const data = await client.query(`SELECT * FROM pins`)
  console.log(data.rows)
  await client.end()
  res.json(data.rows)
})

router.post('/', async (req, res, next) => {
  const client = new Client(config);
  await client.connect();
  const query = `
    INSERT INTO pins (
      longitude,
      latitude,
      title,
      comment,
      link
    ) VALUES (
      '${req.body.longitude}',
      '${req.body.latitude}',
      '${req.body.title}',
      '${req.body.comment}',
      '${req.body.link}'
    );
  `
  const data = await client.query(query)
  await client.end()
  res.json(data)
})


// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
