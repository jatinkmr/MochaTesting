const assert = require('chai').assert;
const app = require('../app');

describe('App', () => { 
	it('app Should return Hello', () => { 
		assert.equal(app(), 'hello');
	});
});