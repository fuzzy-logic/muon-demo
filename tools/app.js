
var muoncore = require('muon-core');
var uuid = require('node-uuid');
var logger = require('sexylog');

var amqpurl = process.env.MUON_URL || "amqp://muon:microservices@rabbitmq"


muon = muoncore.create("tools", amqpurl, amqpurl);

logger.info('running...');

muon.handle('/ping', function (event, respond) {
    logger.info('rpc://muon-node-test-examples/ping responding to event.id=' + event.id);
    respond("pong");
});


muon.handle('/echo', function (event, respond) {
    logger.info('rpc://muon-node-test-examples/echo responding to event.id=' + event.id);
    respond(event.body);
});


muon.handle('/random', function (event, respond) {
    logger.info('rpc://muon-node-test-examples/random responding to event.id=' + event.id);
    var max = 99999;
    var min = 10000;
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    respond(randomNumber);
});


muon.handle('/uuid', function (event, respond) {
    logger.info('rpc://muon-node-test-examples/uuid responding to event.id=' + event.id);
    respond(uuid.v4());
});
