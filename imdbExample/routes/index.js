var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.locals.connection.query('SELECT * from task', function (error, results, Title) {
            if (error) throw error;
            res.json(results);
        });
});
router.get('/:Id', function(req, res) {
    //res.json(req.params.Id);
    res.locals.connection.query('SELECT * from task WHERE id = ?',[req.params.Id], function (error, results, Title) {
        if (error) throw error;
        res.json(results);
    });
});

// GET /p/5
// tagId is set to 5
router.post('/update', function(req, res, next) {
    res.locals.connection.query("UPDATE task SET title=?,year=?,url=?,imageurl=? WHERE id=?",[req.body.title,req.body.year,req.body.url,req.body.imageurl,req.body.id], function (error, results, Title) {
        if (error) throw error;
        res.json(req.body.title);
    });
});
router.post('/delete', function(req, res, next) {
    res.locals.connection.query("DELETE FROM task WHERE id = ?",[req.body.id], function (error, results, Title) {
        if (error) throw error;
        res.json(req.body.title);
    });
});
router.post('/create', function(req, res, next) {
    //res.json(records);
    var records = [
        [req.body.title, req.body.year,req.body.url,req.body.imageurl]
    ];
    res.locals.connection.query("INSERT INTO task (title,year,url,imageurl) VALUES ?", [records], function (err, result, fields) {
        // if any error while executing above query, throw error
        if (err) throw err;
        // if there is no error, you have the result
        console.log(result);
        console.log("Number of rows affected : " + result.affectedRows);
        console.log("Number of records affected with warning : " + result.warningCount);
    });
    res.json('basarili');
});

module.exports = router;
