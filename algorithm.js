'use strict'

module.exports = (count, newcode, type) => {

		//Create var globals start
		var _code = '';
		var str = '';
		var _validation = '';
		//Create var globals end

		
		//Verify DATA #1 start
		if(newcode) {

			_code = newcode;

		} else {

			_code = 'abcdefghijklmnopqrstuvwxyz1234567890';
		}
		//Verify DATA #1 end


		for(var i = 0; i < count; i++) {

			if(type == 'number') {
				str += _code[parseInt(Math.random() * (_code.length))];
				_validation += parseInt(str[i]) ? str[i] : parseInt(Math.random() * (_code.length));
			} else if (type == 'all') {
				str += _code[parseInt(Math.random() * (_code.length))];
				_validation = str;
			} else if(type == 'text'){
				str += _code[parseInt(Math.random() * (_code.length))];
				_validation += !parseInt(str[i]) ? str[i] : '';
			} else {
				str += _code[parseInt(Math.random() * (_code.length))];
				_validation = str;
			}

		}

		return _validation;
	

}