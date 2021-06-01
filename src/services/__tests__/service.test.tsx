import 'jest';
import { getCate } from '@/services/getCateService';
import { getDoc } from '@/services/getDocService';
import { getLink } from '@/services/getLinkService';
import { getRepo } from '@/services/getRepoService';

describe.skip(' test service ', () => {
  it('fetch correctly', () => {
    getCate({ repo: 'repo1' }).then(data => {
      expect(data.code).toBe('200');
    });

    getDoc({ repo: 'repo1', id: '1' }).then(data => {
      expect(data.code).toBe('200');
    });

    getLink().then(data => {
      expect(data.code).toBe('200');
    });

    getRepo().then(data => {
      expect(data.code).toBe('200');
    });
  });
});
