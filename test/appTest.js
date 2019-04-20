const assert = require('chai').assert;
const sayHello = require('../app').sayHello;
// const app = require('../app');

describe('App', () => { 
	it('app Should return Hello', () => { 
		assert.equal(sayHello(), 'hello');
	});
});