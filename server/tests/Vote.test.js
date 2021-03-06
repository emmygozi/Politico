import chai from 'chai';
import chaiHttp from 'chai-http';

import dotenv from 'dotenv';
import app from '../app';
import generateJwtToken from '../helpers/generateJwtToken';

dotenv.config();
chai.use(chaiHttp);
const { expect } = chai;


describe('POST API/V1/VOTES/', () => {
  it('should return conflict status 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/votes')
        .set('x-auth-token', generateJwtToken(1, process.env.ADMIN_EMAIL, 'True'))
        .send({
          office: 'NPC',
          candidate: 1,
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          expect(res.body).to.have.property('error');
          const returnStatus = 400;
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
        .post('/api/v1/votes')
        .set('x-auth-token', generateJwtToken(1, process.env.ADMIN_EMAIL, 'True'))
        .send({
          candidate: 1,
          office: 1
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
});

describe('GET API/V1/OFFICE/:ID/RESULT', () => {
  it('should return success status 200', (done) => {
    try {
      chai.request(app)
        .get('/api/v1/office/1/result')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          const returnStatus = 200;
          expect(res.body).to.have.property('status', returnStatus);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });
});

describe('POST API/V1/PETITION/', () => {
  it('should return a office invalid 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/petitions')
        .set('x-auth-token', generateJwtToken(1, process.env.ADMIN_EMAIL, 'True'))
        .send({
          office: '-1',
          body: 'This is a sample petition message for an office',
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          expect(res.body).to.have.property('error');
          const returnStatus = 400;
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
        .post('/api/v1/petitions')
        .set('x-auth-token', generateJwtToken(1, process.env.ADMIN_EMAIL, 'True'))
        .send({
          office: 1,
          body: 'This is a sample petition message for an office',
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

  it('should return a conflict status 409', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/petitions')
        .set('x-auth-token', generateJwtToken(1, process.env.ADMIN_EMAIL, 'True'))
        .send({
          office: 1,
          body: 'This is a sample petition message for an office',
        })
        .end((err, res) => {
          expect(res.status).to.equal(409);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          expect(res.body).to.have.property('error');
          const returnStatus = 409;
          expect(res.body).to.have.property('status', returnStatus);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });

  it('should return a office not exist status 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/petitions')
        .set('x-auth-token', generateJwtToken(1, process.env.ADMIN_EMAIL, 'True'))
        .send({
          office: 500,
          body: 'This is a sample petition message for an office',
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          expect(res.body).to.have.property('error');
          const returnStatus = 400;
          expect(res.body).to.have.property('status', returnStatus);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });

  it('should return a body field cannot be empty 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/petitions')
        .set('x-auth-token', generateJwtToken(1, process.env.ADMIN_EMAIL, 'True'))
        .send({
          office: 1
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          expect(res.body).to.have.property('error');
          const returnStatus = 400;
          expect(res.body).to.have.property('status', returnStatus);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });

  it('should return petition text is a minimum of 10 characters 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/petitions')
        .set('x-auth-token', generateJwtToken(1, process.env.ADMIN_EMAIL, 'True'))
        .send({
          office: 1,
          body: 'This',
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          expect(res.body).to.have.property('error');
          const returnStatus = 400;
          expect(res.body).to.have.property('status', returnStatus);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });
});
