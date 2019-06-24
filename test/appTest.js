const assert = require('chai').assert;
// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;
const app = require('../app');

sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5, 6);

describe('App', () => { 
	describe('sayHello', () => { 
		it('sayHello Should return hello', () => { 
			// let result = app.sayHello();
			assert.equal(sayHelloResult, 'hello');
		});
	
		it('sayHello should return type String', () => { 
			// let result = app.sayHello();
			assert.typeOf(sayHelloResult, 'string');
		});
	});

	describe('addNumbers', () => { 
		it('addNumbers should be above 5', () => { 
			// let result = app.addNumbers(5, 5);
			assert.isAbove(addNumbersResult, 5);
		});
	
		it('addNumbers should return type Number', () => { 
			// let result = app.addNumbers(5, 5);
			assert.typeOf(addNumbersResult, 'number');
		});
	});
});