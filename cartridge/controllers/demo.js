/**
* Description of the Controller and the logic it provides
*
* @module  controllers/demo
*/

'use strict';

var guard 	= 	require('storefront_controllers/cartridge/scripts/guard');
var ISML 	=	require('dw/template/ISML');

function start(){
	ISML.renderTemplate(
			'demo.isml',
			{
				myParameteronISML	:	'Hello From Controller'
			}
		);
};

exports.Start	=	guard.ensure(['get'],start);