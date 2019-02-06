import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
const { expect } = chai;


describe('POST API/V1/AUTHORIZE /', () => {
  const name = 'Goodnames';
  const logoUrl = 'http://aaaaggddhhhhdhdj';
  const hqAddress = '16, somewhere in Abuja is found';
  it(' Acess denied!', async () => {
    try {
      const res = await chai.request(app)
        .post('/api/v1/parties')
        .set('x-auth-token', 'xxxxxxxxxxxxxxxx')
        .send({
          name, logoUrl, hqAddress
        });
      expect(res.status).to.equal(400);
      expect(res.body).to.be.an('object');
    } catch (err) {
      throw err.message;
    }
  });

  it('Acess denied!', async () => {
    try {
      const res = await chai.request(app)
        .post('/api/v1/parties')
        .set('x-auth-token', '')
        .send({
          name, logoUrl, hqAddress
        });
      expect(res.status).to.equal(401);
      expect(res.body).to.be.an('object');
    } catch (err) {
      throw err.message;
    }
  });
});
