/**
* Description of the Controller and the logic it provides
*
* @module  controllers/JShowProduct
*/

'use strict';

var guard 		= require('suddeb_controllers/cartridge/scripts/guard');
var ISML 		= require('dw/template/ISML');
var ProductMgr	= require('dw/catalog/ProductMgr');	

function start(){
	var productId	=	request.httpParameterMap.pid.stringValue;
	var product 	=	ProductMgr.getProduct(productId);
	
	if(product === null){
		ISML.renderTemplate('productNotFound.isml',{
			message	:	'Product with id ' + productId + ' not found'
		});
	}else{
		ISML.renderTemplate('productFound.isml',{
			myProduct	:	product
		});
	}
};

exports.Start = guard.ensure(['get'],start);