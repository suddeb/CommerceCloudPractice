/**
* Description of the Controller and the logic it provides
*
* @module  controllers/JCall
*/

'use strict';

var guard = require('suddeb_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');

function start(){
	var myParam = request.httpParameterMap.param;
	if(myParam.stringValue != null){
		ISML.renderTemplate('call/jnotEmpty.isml',{
			paramOnPdict	:	myParam
		});
	}else{
		ISML.renderTemplate('call/jempty.isml');
	}
}

exports.Start = guard.ensure(['get'],start);