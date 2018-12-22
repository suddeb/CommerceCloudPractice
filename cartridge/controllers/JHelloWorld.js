/**
* Description of the Controller and the logic it provides
*
* @module  controllers/JHelloWorld
*/

'use strict';

var guard = require('suddeb_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');

function start(){
	ISML.renderTemplate('helloworld.isml',{
		myParameter	:	"Hello from controller"
	});
};

exports.Start = guard.ensure(['get'],start);