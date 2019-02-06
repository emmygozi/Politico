import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';
import app from '../app';
import generateJwtToken from '../helpers/generateJwtToken';

dotenv.config();
chai.use(chaiHttp);
const { expect } = chai;

describe('GET API/V1/PARTIES /', () => {
  it('should return a success status 200', async () => {
    try {
      const res = await chai.request(app).get('/api/v1/parties');
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

describe('GET API/V1/PARTIES/:PARTY-ID', () => {
  const myReturnStatus = 400;
  it('should return success status 201', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/parties')
        .set('x-auth-token', generateJwtToken(1, process.env.ADMIN_EMAIL, 'True'))
        .send({
          name: 'NPC',
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
        .post('/api/v1/parties')
        .set('x-auth-token', generateJwtToken(1, process.env.ADMIN_EMAIL, 'True'))
        .send({
          name: 'NPCCC',
          logoUrl: 'http://someurlllll',
          hqAddress: 'a given address hereeee.'
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


  it('should return failure status 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/parties')
        .set('x-auth-token', generateJwtToken(1, process.env.ADMIN_EMAIL, 'True'))
        .send({
          name: 'N',
          logoUrl: 'http://someurl',
          hqAddress: 'a given address here.'
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
        .post('/api/v1/parties')
        .set('x-auth-token', generateJwtToken(1, process.env.ADMIN_EMAIL, 'True'))
        .send({
          name: '  ',
          logoUrl: 'http://someurl',
          hqAddress: 'a given address here.'
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
        .post('/api/v1/parties')
        .set('x-auth-token', generateJwtToken(1, process.env.ADMIN_EMAIL, 'True'))
        .send({
          name: 'NPCH',
          logoUrl: 'http://someurl',
          hqAddress: '   '
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
        .post('/api/v1/parties')
        .set('x-auth-token', generateJwtToken(1, process.env.ADMIN_EMAIL, 'True'))
        .send({
          name: 'NPVHG',
          logoUrl: 'http://someurl',
          hqAddress: 'a'
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
        .post('/api/v1/parties')
        .set('x-auth-token', generateJwtToken(1, process.env.ADMIN_EMAIL, 'True'))
        .send({
          name: 'Nffff',
          logoUrl: '     ',
          hqAddress: 'a given address here.'
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
        .post('/api/v1/parties')
        .set('x-auth-token', generateJwtToken(1, process.env.ADMIN_EMAIL, 'True'))
        .send({
          name: 'NPFDTYB',
          logoUrl: 'h',
          hqAddress: 'a given address here.'
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

  it('should return a success status 200', async () => {
    try {
      const res = await chai.request(app).get('/api/v1/parties/1');
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
      const res = await chai.request(app).get('/api/v1/parties/5000');
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
      const res = await chai.request(app).get('/api/v1/parties/a');
      expect(res.status).to.equal(400);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('status');
      expect(res.body).to.have.property('status', myReturnStatus);
    } catch (err) {
      throw err.message;
    }
  });
});

describe('POST API/V1/PARTIES/', () => {
  it('should return conflict status 409', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/parties')
        .set('x-auth-token', generateJwtToken(1, process.env.ADMIN_EMAIL, 'True'))
        .send({
          name: 'NPC',
          logoUrl: 'http://someurl',
          hqAddress: 'a given address here.'
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

  it('should return no admin permission status 401', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/parties')
        .set('x-auth-token', generateJwtToken(1, process.env.ADMIN_EMAIL, 'False'))
        .send({
          name: 'NPC',
          logoUrl: 'http://someurl',
          hqAddress: 'a given address here.'
        })
        .end((err, res) => {
          expect(res.status).to.equal(401);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          expect(res.body).to.have.property('error');
          const returnStatus = 401;
          expect(res.body).to.have.property('status', returnStatus);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });
});

describe('PATCH API/V1/PARTIES/:PARTY-ID', () => {
  let name;
  const exec = async () => {
    try {
      return await chai
        .request(app)
        .patch('/api/v1/parties/1/name')
        .set('x-auth-token', generateJwtToken(1, process.env.ADMIN_EMAIL, 'True'))
        .send({
          name
        });
    } catch (err) {
      throw err.message;
    }
  };

  beforeEach(() => {
    name = 'AgoodnameTwo';
  });

  it('should return a success status 200', async () => {
    try {
      const res = await exec();
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
      const res = await chai.request(app).patch('/api/v1/parties/5000/name')
        .set('x-auth-token', generateJwtToken(1, process.env.ADMIN_EMAIL, 'True'));
      expect(res.status).to.equal(404);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('status');
      const returnStatus = 404;
      expect(res.body).to.have.property('status', returnStatus);
    } catch (err) {
      throw err.message;
    }
  });
});

describe('DELETE API/V1/PARTIES/:PARTY-ID', () => {
  it('should return a success status 200', async () => {
    try {
      const res = await chai.request(app).delete('/api/v1/parties/2')
        .set('x-auth-token', generateJwtToken(1, process.env.ADMIN_EMAIL, 'True'));
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
      const res = await chai.request(app).delete('/api/v1/parties/5000')
        .set('x-auth-token', generateJwtToken(1, process.env.ADMIN_EMAIL, 'True'));
      expect(res.status).to.equal(404);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('status');
      const returnStatus = 404;
      expect(res.body).to.have.property('status', returnStatus);
    } catch (err) {
      throw err.message;
    }
  });
});
