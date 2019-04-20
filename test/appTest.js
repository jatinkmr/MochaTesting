const assert = require('chai').assert;
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;
// const app = require('../app');

describe('App', () => { 
	it('sayHello Should return hello', () => { 
		let result = sayHello();
		assert.equal(result, 'hello');
	});

	it('sayHello should return type String', () => { 
		let result = sayHello();
		assert.typeOf(result, 'string');
	});

	it('addNumbers should be above 5', () => { 
		let result = addNumbers(5, 5);
		assert.isAbove(result, 5);
	});

	it('addNumbers should return type Number', () => { 
		let result = addNumbers(5, 5);
		assert.typeOf(result, 'number');
	});
});