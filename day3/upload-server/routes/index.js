var express = require('express');
var router = express.Router();
const fs = require('fs')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.post('/upload', function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  res.append('Access-Control-Allow-Methods', 'POST,OPTIONS');
  // 必须要设置
  res.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  // let data = ''
  // req.on('data', (chunk) => {
  //   data += chunk
  // })
  // req.on('end', () => {
  //   console.log(data)
  // })
  // console.log(req.body)
  req.pipe(fs.createWriteStream('./images/output.jpg'))
  res.send('上传成功')
});

module.exports = router;