import { HTTPTransport } from '../utils/classes/HTTPTransport';
import { URLS, HEADERS } from '../utils/consts';
import { expect } from 'chai';

describe('utils/HTTPTransport', () => {
  const http = new HTTPTransport();

  describe('auth', () => {
    it('should return error by return user info', async () => {
      await http.get(`${URLS.BASE}/auth/user`, {}).catch((err) => {
        const textError = JSON.parse(err.responseText).reason;
        expect(textError).equal('Cookie is not valid');
      });
    });

    it('should return OK by login', async () => {
      await http
        .post(`${URLS.BASE}/auth/signin`, {
          headers: HEADERS.CT_APPLICATION_JSON,
          data: { login: 'IvanIvanov', password: '12345678' },
        })
        .then((data: any) => expect(data.responseText).equal('OK'));
    });

    it('should return error by login', async () => {
      await http
        .post(`${URLS.BASE}/auth/signin`, {
          headers: HEADERS.CT_APPLICATION_JSON,
          data: { login: 'InavIvanov', password: '12345678' },
        })
        .catch((err) => {
          const textError = JSON.parse(err.responseText).reason;
          expect(textError).equal('User already in system');
        });
    });

    it('should return user info', async () => {
      await http.get(`${URLS.BASE}/auth/user`, {}).then((userInfo: any) => {
        const user = {
          id: 65828,
          first_name: 'Ivan',
          second_name: 'Ivanov',
          display_name: 'Ivan',
          login: 'IvanIvanov',
          avatar:
            '/78cf0d70-5ddf-448d-a98d-e3dbca94cead/deb492ce-90c2-45ed-a33f-aacafaf24715_scale_1200.webp',
          email: 'qwerty123@gmail.com',
          phone: '+79998887766',
        };

        expect(JSON.parse(userInfo.responseText)).to.contain(user);
      });
    });
  });
});
