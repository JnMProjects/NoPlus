import * as apia from '../components/apiaccess'

describe('parseGitAvatar', () => {
    it('returns the correct avatar URL for a given username', async () => {
      const username = 'derjacklive';
      const expectedUrl = 'https://avatars.githubusercontent.com/u/71508487?v=4';
      
      apia.parseGitAvatar(username).then((url) => {
        expect(url).toBe(expectedUrl);
      });
    });
});