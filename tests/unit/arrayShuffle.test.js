
// Import function

const { testUrl } = require('../../agxgame.js');

//describe divide our tests in sections
describe('agxgame function -> shuffle', () => {
    test('passing nothing to function shuffle - EXPECT ERROR MESSAGE',                      async () => {
    await expect(shuffle(null)).toBeNull();
    });
});

