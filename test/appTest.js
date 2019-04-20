const assert = require('chai').assert;
const sayHello = require('../app').sayHello;
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
});