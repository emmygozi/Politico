import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('POST API/V1/OFFICES /', () => {
  let type,
    name;
  const exec = async () => {
    try {
      return await chai
        .request(app)
        .post('/api/v1/offices')
        .send({
          type,
          name
        });
    } catch (err) {
      throw err.message;
    }
  };

  beforeEach(() => {
    type = 'Agoodtype';
    name = 'Aname Given';
  });

  it('should return a success status 201', async () => {
    try {
      const res = await exec();
      expect(res.status).to.equal(201);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('status');
      const sucessStatus = 201;
      expect(res.body).to.have.property('status', sucessStatus);
    } catch (err) {
      throw err.message;
    }
  });

  it('should return a conflict status 409', async () => {
    try {
      const res = await exec();
      expect(res.status).to.equal(409);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('status');
      const sucessStatus = 409;
      expect(res.body).to.have.property('status', sucessStatus);
    } catch (err) {
      throw err.message;
    }
  });
});
