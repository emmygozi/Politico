/* eslint-disable import/no-extraneous-dependencies */
import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';
import app from '../app';
import generateJwtToken from '../helpers/generateJwtToken';

dotenv.config();
chai.use(chaiHttp);
const { expect } = chai;


describe('POST API/V1/OFFICE/:ID/REGISTER', () => {
  const myReturnStatus = 400;
  const myReturnStatusTwo = 401;

  it('should return failure status 401', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/office/1/register')
        .set('x-auth-token', generateJwtToken(1, process.env.ADMIN_EMAIL, 'True'))
        .send({
          party: 6,
          office: 5
        })
        .end((err, res) => {
          expect(res.status).to.equal(401);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          expect(res.body).to.have.property('status', myReturnStatusTwo);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });

  // register party and office to begin candidate registration
  it('should return success status 201', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/parties')
        .set('x-auth-token', generateJwtToken(1, process.env.ADMIN_EMAIL, 'True'))
        .send({
          name: 'NPCXYEJEMKDK8',
          logoUrl: 'http://someurl',
          hqAddress: 'a given address here.'
        })
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          const returnStatus = 201;
          expect(res.body).to.have.property('status', returnStatus);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });

  it('should return success status 201', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/offices')
        .set('x-auth-token', generateJwtToken(1, process.env.ADMIN_EMAIL, 'True'))
        .send({
          name: 'NPCXYEJEMKDK8',
          type: 'AGovernor type'
        })
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          const returnStatus = 201;
          expect(res.body).to.have.property('status', returnStatus);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });

  it('should return failure status 401', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/office/900/register')
        .set('x-auth-token', generateJwtToken(1, process.env.ADMIN_EMAIL, 'True'))
        .send({
          party: true,
          office: 'office'
        })
        .end((err, res) => {
          expect(res.status).to.equal(401);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          expect(res.body).to.have.property('status', myReturnStatusTwo);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });

  it('should return failure status 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/office/-9t/register')
        .set('x-auth-token', generateJwtToken(1, process.env.ADMIN_EMAIL, 'True'))
        .send({
          party: true,
          office: 'office'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          expect(res.body).to.have.property('status', myReturnStatus);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });


  it('should return failure status 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/office/1/register')
        .set('x-auth-token', generateJwtToken(1, process.env.ADMIN_EMAIL, 'True'))
        .send({
          party: true,
          office: 'office'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          expect(res.body).to.have.property('status', myReturnStatus);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });

  it('should return success status 201', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/office/1/register')
        .set('x-auth-token', generateJwtToken(1, process.env.ADMIN_EMAIL, 'True'))
        .send({
          party: 1,
          office: 1
        })
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          const myReturnStatusThree = 201;
          expect(res.body).to.have.property('status', myReturnStatusThree);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });

  it('should return conflict status 409', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/office/1/register')
        .set('x-auth-token', generateJwtToken(1, process.env.ADMIN_EMAIL, 'True'))
        .send({
          party: 1,
          office: 1
        })
        .end((err, res) => {
          expect(res.status).to.equal(409);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          const myReturnStatusThree = 409;
          expect(res.body).to.have.property('status', myReturnStatusThree);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });
});

describe('GET API/V1/OFFICE/CANDIDATES', () => {
  it('should return a success status 200', async () => {
    try {
      const res = await chai.request(app).get('/api/v1/office/candidates');
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
