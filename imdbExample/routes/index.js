var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

        res.locals.connection.query('SELECT * from task', function (error, results, Title) {
            if (error) throw error;
            res.json(results);
        });

});

module.exports = router;
