var express = require('express');
var router = express.Router();
//var ctrlMain = require('../controllers/main');

var ctrlMekanlar=require('../controllers/mekanlar');
var ctrlDigerleri = require('../controllers/digerleri');



/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

//router.get('/', ctrlMain.index);
router.get('/', ctrlMekanlar.anaSayfa);

router.get('/mekan',ctrlMekanlar.mekanBilgisi);

router.get('/mekan/yorum/yeni', ctrlMekanlar.yorumEkle);

router.get('/hakkinda', ctrlDigerleri.hakkinda);

module.exports = router;
