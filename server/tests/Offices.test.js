import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';
import app from '../app';
import generateJwtToken from '../helpers/generateJwtToken';

dotenv.config();

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
        .set('x-auth-token', generateJwtToken(1, process.env.ADMIN_EMAIL, 'True'))
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
      const returnStatus = 201;
      expect(res.body).to.have.property('status', returnStatus);
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
      const returnStatus = 409;
      expect(res.body).to.have.property('status', returnStatus);
    } catch (err) {
      throw err.message;
    }
  });

  it('should return no empty space 400', async () => {
    try {
      name = '';
      const res = await exec();
      expect(res.status).to.equal(400);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('status');
      const returnStatus = 400;
      expect(res.body).to.have.property('status', returnStatus);
    } catch (err) {
      throw err.message;
    }
  });

  it('should return less than min character 400', async () => {
    try {
      name = 's';
      const res = await exec();
      expect(res.status).to.equal(400);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('status');
      const returnStatus = 400;
      expect(res.body).to.have.property('status', returnStatus);
    } catch (err) {
      throw err.message;
    }
  });

  it('should return no empty space 400', async () => {
    try {
      type = '';
      const res = await exec();
      expect(res.status).to.equal(400);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('status');
      const returnStatus = 400;
      expect(res.body).to.have.property('status', returnStatus);
    } catch (err) {
      throw err.message;
    }
  });

  it('should return min 3 characters space 400', async () => {
    try {
      type = 'a';
      const res = await exec();
      expect(res.status).to.equal(400);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('status');
      const returnStatus = 400;
      expect(res.body).to.have.property('status', returnStatus);
    } catch (err) {
      throw err.message;
    }
  });

  it('should return less than min character 400', async () => {
    try {
      name = '';
      const res = await exec();
      expect(res.status).to.equal(400);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('status');
      const returnStatus = 400;
      expect(res.body).to.have.property('status', returnStatus);
    } catch (err) {
      throw err.message;
    }
  });
});


describe('GET API/V1/OFFICES /', () => {
  it('should return a success status 200', async () => {
    try {
      const res = await chai.request(app).get('/api/v1/offices');
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('status');
      const returnStatus = 200;
      expect(res.body).to.have.property('status', returnStatus);
    } catch (err) {
      throw err.message;
    }
  });
});

describe('GET API/V1/OFFICES/:OFFICE-ID', () => {
  it('should return a success status 200', async () => {
    try {
      const res = await chai.request(app).get('/api/v1/offices/1');
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('status');
      const returnStatus = 200;
      expect(res.body).to.have.property('status', returnStatus);
    } catch (err) {
      throw err.message;
    }
  });

  it('should return a not found status 404', async () => {
    try {
      const res = await chai.request(app).get('/api/v1/offices/5000');
      expect(res.status).to.equal(404);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('status');
      const returnStatus = 404;
      expect(res.body).to.have.property('status', returnStatus);
    } catch (err) {
      throw err.message;
    }
  });

  it('should return a failure status 400', async () => {
    try {
      const res = await chai.request(app).get('/api/v1/offices/a');
      expect(res.status).to.equal(400);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('status');
      const returnStatus = 400;
      expect(res.body).to.have.property('status', returnStatus);
    } catch (err) {
      throw err.message;
    }
  });
});
