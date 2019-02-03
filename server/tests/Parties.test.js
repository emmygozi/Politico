import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

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
      const returnStatus = 400;
      expect(res.body).to.have.property('status', returnStatus);
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
        .send({
          name: 'APC',
          hqAddress: '2, Somewhere secure and serene in Abuja, Lagos, Nigeria',
          logoUrl: 'http://thisisalogo2'
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


  it('should return success status 201', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/parties')
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
});

describe('PATCH API/V1/PARTIES/:PARTY-ID', () => {
  let name;
  const exec = async () => {
    try {
      return await chai
        .request(app)
        .patch('/api/v1/parties/1')
        .send({
          name
        });
    } catch (err) {
      throw err.message;
    }
  };

  beforeEach(() => {
    name = 'Agoodname';
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
      const res = await chai.request(app).patch('/api/v1/parties/5000');
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
      const res = await chai.request(app).delete('/api/v1/parties/2');
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
      const res = await chai.request(app).delete('/api/v1/parties/5000');
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