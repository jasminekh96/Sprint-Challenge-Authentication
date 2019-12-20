const request = require('supertest');
const db = require('../database/dbConfig');
const server = require('../api/server');

// two tests in jokes file

describe('jokesModel', () => {
	const jokes = {
		id   : 1,
		joke : "I'm hungry. -Hey hungry.",
	};
	//the joke has the property of ID
	describe('get the joke', () => {
		it('Jokes has an id', () => {
			expect(jokes).toHaveProperty('id');
		});
		// the joke has the property of 'joke'
		it('New joke to jokes', () => {
			expect(jokes).toHaveProperty('joke');
		});
	});
});
