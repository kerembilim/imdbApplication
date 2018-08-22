var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

        res.locals.connection.query('SELECT * from task', function (error, results, Title) {
            if (error) throw error;
            res.json(results);
        });

});
router.post('/new', function(req, res, next) {
    //res.json(records);
    var records = [
        [req.body.id,req.body.title, req.body.year,req.body.url,req.body.imageurl]
    ];
    res.locals.connection.query("INSERT INTO task (id,title,year,url,imageurl) VALUES ?", [records], function (err, result, fields) {
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
