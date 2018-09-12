const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.locals.connection.query('SELECT * from task', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});
router.get('/:Id', (req, res) => {
  // res.json(req.params.Id);
  res.locals.connection.query('SELECT * from task WHERE id = ?', [req.params.Id], (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

// GET /p/5
// tagId is set to 5
router.post('/update', (req, res) => {
  res.locals.connection.query('UPDATE task SET title=?,year=?,url=?,imageurl=? WHERE id=?', [req.body.title, req.body.year, req.body.url, req.body.imageurl, req.body.id], (error) => {
    if (error) throw error;
    res.json(req.body.title);
  });
});
router.post('/delete', (req, res) => {
  res.locals.connection.query('DELETE FROM task WHERE id = ?', [req.body.id], (error) => {
    if (error) throw error;
    res.json(req.body.title);
  });
});
router.post('/create', (req, res) => {
  // res.json(records);
  const records = [
    [req.body.title, req.body.year, req.body.url, req.body.imageurl]
  ];
  res.locals.connection.query('INSERT INTO task (title,year,url,imageurl) VALUES ?', [records], (err) => {
    // if any error while executing above query, throw error
    if (err) throw err;
  });
  res.json('basarili');
});

module.exports = router;
