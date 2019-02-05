import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';
import randomString from 'randomstring';
import app from '../app';

dotenv.config();
chai.use(chaiHttp);
const { expect } = chai;

describe('POST API/V1/AUTH/SIGNUP /', () => {
  it('should return success status 201', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstname: 'Justine',
          lastname: 'Bieber',
          othername: 'Sanchez',
          email: 'justsine@sn.com',
          phoneNumber: '123456784',
          passportUrl: 'http://someurl',
          password: '1234567',
          confirmpass: '1234567'
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

  it('should return conflict status 409', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstname: 'Justine',
          lastname: 'Bieber',
          othername: 'Sanchez',
          email: 'justsine@sn.com',
          phoneNumber: '123456784',
          passportUrl: 'http://someurl',
          password: '1234567',
          confirmpass: '1234567'
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


  it('should return a no additional field 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstname: 'anothername',
          lastname: 'Alastname',
          othername: 'Anothername',
          email: 'somemail@yahoo.com',
          phoneNumber: '1234567123',
          passportUrl: 'http://qqqqqqqqqqqq',
          password: '1234567fhfjf',
          confirmpass: '1234567fhfjf',
          newfield: 'send',
          anotherfield: 'newvalue'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          const returnStatus = 400;
          expect(res.body).to.have.property('status', returnStatus);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });


  it('should return a no white space for firstname status 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstname: '      ',
          lastname: 'Alastname',
          othername: 'Anothername',
          email: 'somemail@yahoo.com',
          phoneNumber: '1234567123',
          passportUrl: 'http://qqqqqqqqqqqq',
          password: '1234567fhfjf',
          confirmpass: '1234567fhfjf'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          const returnStatus = 400;
          expect(res.body).to.have.property('status', returnStatus);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });

  it('should return name should have a minumum of 3 characters for firstname status 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstname: 'ya',
          lastname: 'Alastname',
          othername: 'Anothername',
          email: 'somemail@yahoo.com',
          phoneNumber: '1234567123',
          passportUrl: 'http://qqqqqqqqqqqq',
          password: '1234567fhfjf',
          confirmpass: '1234567fhfjf'
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

  it('should return a no null for lastname status 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstname: 'Agoodname',
          lastname: '',
          othername: 'Anothername',
          email: 'somemail@yahoo.com',
          phoneNumber: '1234567123',
          passportUrl: 'http://qqqqqqqqqqqq',
          password: '1234567fhfjf',
          confirmpass: '1234567fhfjf'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          const returnStatus = 400;
          expect(res.body).to.have.property('status', returnStatus);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });

  it('should return a no white space for lastname status 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstname: 'Agoodname',
          lastname: '      ',
          othername: 'Anothername',
          email: 'somemail@yahoo.com',
          phoneNumber: '1234567123',
          passportUrl: 'http://qqqqqqqqqqqq',
          password: '1234567fhfjf',
          confirmpass: '1234567fhfjf'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          const returnStatus = 400;
          expect(res.body).to.have.property('status', returnStatus);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });


  it('should return name should have a minumum of 3 characters for lastname status 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstname: 'Agoodname',
          lastname: 'ya',
          othername: 'Anothername',
          email: 'somemail@yahoo.com',
          phoneNumber: '1234567123',
          passportUrl: 'http://qqqqqqqqqqqq',
          password: '1234567fhfjf',
          confirmpass: '1234567fhfjf'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          const returnStatus = 400;
          expect(res.body).to.have.property('status', returnStatus);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });


  it('should return a no white space for othername status 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstname: 'Agoodname',
          lastname: 'Alastname',
          othername: '      ',
          email: 'somemail@yahoo.com',
          phoneNumber: '1234567123',
          passportUrl: 'http://qqqqqqqqqqqq',
          password: '1234567fhfjf',
          confirmpass: '1234567fhfjf'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          const returnStatus = 400;
          expect(res.body).to.have.property('status', returnStatus);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });

  it('should return name should have a minumum of 3 characters for othername status 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstname: 'Agoodname',
          lastname: 'Alastname',
          othername: 'ya',
          email: 'somemail@yahoo.com',
          phoneNumber: '1234567123',
          passportUrl: 'http://qqqqqqqqqqqq',
          password: '1234567fhfjf',
          confirmpass: '1234567fhfjf'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          const returnStatus = 400;
          expect(res.body).to.have.property('status', returnStatus);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });

  it('should return name should have a minumum of 3 characters for phone number status 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstname: 'yaddddd',
          lastname: 'Alastname',
          othername: 'Anothername',
          email: 'somemail@yahoo.com',
          phoneNumber: '',
          passportUrl: 'http://qqqqqqqqqqqq',
          password: '1234567fhfjf',
          confirmpass: '1234567fhfjf'
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

  it('should return email cannot be empty status 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstname: 'Agoodname',
          lastname: 'Alastname',
          othername: 'Anothername',
          email: '',
          phoneNumber: '1234567123',
          passportUrl: 'http://qqqqqqqqqqqq',
          password: '1234567fhfjf',
          confirmpass: '1234567fhfjf'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          const returnStatus = 400;
          expect(res.body).to.have.property('status', returnStatus);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });

  it('should return email should have a minumum of 8 characters status 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstname: 'Agoodname',
          lastname: 'Alastname',
          othername: 'Anothername',
          email: 'a@a.com',
          phoneNumber: '1234567123',
          passportUrl: 'http://qqqqqqqqqqqq',
          password: '1234567fhfjf',
          confirmpass: '1234567fhfjf'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          const returnStatus = 400;
          expect(res.body).to.have.property('status', returnStatus);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });

  it('should return email should have a maximum of 70 characters status 400', (done) => {
    try {
      const aMail = randomString.generate({
        length: 72,
        charset: 'alphabetic'
      });
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstname: 'Agoodname',
          lastname: 'Alastname',
          othername: 'Anothername',
          email: `${aMail}@yahoo.com`,
          phoneNumber: '1234567123',
          passportUrl: 'http://qqqqqqqqqqqq',
          password: '1234567fhfjf',
          confirmpass: '1234567fhfjf'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          const returnStatus = 400;
          expect(res.body).to.have.property('status', returnStatus);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });


  it('should return phone should make sure input is number status 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstname: 'ydhhdhdhdd',
          lastname: 'Alastname',
          othername: 'Anothername',
          email: 'somemail@yahoo.com',
          phoneNumber: '123456712shs3',
          passportUrl: 'http://qqqqqqqqqqqq',
          password: '1234567fhfjf',
          confirmpass: '1234567fhfjf'
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

  it('should return phone is up to min character status 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstname: 'ydhhdhdhdd',
          lastname: 'Alastname',
          othername: 'Anothername',
          email: 'somemail@yahoo.com',
          phoneNumber: '1',
          passportUrl: 'http://qqqqqqqqqqqq',
          password: '1234567fhfjf',
          confirmpass: '1234567fhfjf'
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

  it('should return passport not empty status 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstname: 'ydhhdhdhdd',
          lastname: 'Alastname',
          othername: 'Anothername',
          email: 'somemail@yahoo.com',
          phoneNumber: '123456712shs3',
          passportUrl: '',
          password: '1234567fhfjf',
          confirmpass: '1234567fhfjf'
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

  it('should return passport up to min character status 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstname: 'ydhhdhdhdd',
          lastname: 'Alastname',
          othername: 'Anothername',
          email: 'somemail@yahoo.com',
          phoneNumber: '123456712shs3',
          passportUrl: 'ht',
          password: '1234567fhfjf',
          confirmpass: '1234567fhfjf'
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

  it('should return password not empty status 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstname: 'ydhhdhdhdd',
          lastname: 'Alastname',
          othername: 'Anothername',
          email: 'somemail@yahoo.com',
          phoneNumber: '123456712shs3',
          passportUrl: 'http://qqqqqqqqqqqq',
          password: '',
          confirmpass: '1234567fhfjf'
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

  it('should return confirm password not empty status 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstname: 'ydhhdhdhdd',
          lastname: 'Alastname',
          othername: 'Anothername',
          email: 'somemail@yahoo.com',
          phoneNumber: '123456712shs3',
          passportUrl: 'http://qqqqqqqqqqqq',
          password: '1234567fhfjf',
          confirmpass: ''
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

  it('should return password and confirm password does not match status 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstname: 'ydhhdhdhdd',
          lastname: 'Alastname',
          othername: 'Anothername',
          email: 'somemail@yahoo.com',
          phoneNumber: '123456712shs3',
          passportUrl: 'http://qqqqqqqqqqqq',
          password: '12345671234',
          confirmpass: '1234567fhfjf'
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

describe('POST API/V1/AUTH/LOGIN /', () => {
  it('should return success status 200', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/login')
        .send({
          email: process.env.ADMIN_EMAIL,
          password: process.env.ADMIN_PASSWORD
        })
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

  it('should return success status 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/login')
        .send({
          email: process.env.ADMIN_EMAIL,
          password: 'xxxxxxxxxxxxxx'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          const returnStatus = 400;
          expect(res.body).to.have.property('status', returnStatus);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });

  it('should return success status 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/login')
        .send({
          email: process.env.ADMIN_EMAIL,
          password: 'xxxxxxxxxxxxxx'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          const returnStatus = 400;
          expect(res.body).to.have.property('status', returnStatus);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });
});
