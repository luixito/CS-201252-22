//microservicio privado
const expres = require("express");

const router = express.Router();

router.get('/', function (req, res){
    res.send({
        success:'si funcia'
    });
});

module.exports = router;