/**
* Description of the Controller and the logic it provides
*
* @module  controllers/VarTest
*/

'use strict';

var guard	=	require('suddeb_controllers/cartridge/scripts/guard');
var ISML	=	require('dw/template/ISML');

function start(){
	ISML.renderTemplate('vartest.isml');
};

exports.Start = guard.ensure(['get'],start);