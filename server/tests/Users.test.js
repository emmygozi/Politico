import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';
import randomString from 'randomstring';
import app from '../app';

dotenv.config();
chai.use(chaiHttp);
const { expect } = chai;

describe('POST API/V1/AUTH/SIGNUP /', () => {
  const myReturnStatus = 400;
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
          expect(res.body).to.have.property('status', myReturnStatus);
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
          expect(res.body).to.have.property('status', myReturnStatus);
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
          expect(res.body).to.have.property('status', myReturnStatus);
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
          expect(res.body).to.have.property('status', myReturnStatus);
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
          expect(res.body).to.have.property('status', myReturnStatus);
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
          expect(res.body).to.have.property('status', myReturnStatus);
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
          expect(res.body).to.have.property('status', myReturnStatus);
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
          expect(res.body).to.have.property('status', myReturnStatus);
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
          expect(res.body).to.have.property('status', myReturnStatus);
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
          expect(res.body).to.have.property('status', myReturnStatus);
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
          expect(res.body).to.have.property('status', myReturnStatus);
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
          expect(res.body).to.have.property('status', myReturnStatus);
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
          expect(res.body).to.have.property('status', myReturnStatus);
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
          expect(res.body).to.have.property('status', myReturnStatus);
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
          expect(res.body).to.have.property('status', myReturnStatus);
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
          expect(res.body).to.have.property('status', myReturnStatus);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });

  it('should return password min length is 3 status 400', (done) => {
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
          password: 'a',
          confirmpass: '1234567fhfjf'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          expect(res.body).to.have.property('error');
          expect(res.body).to.have.property('status', myReturnStatus);
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
          expect(res.body).to.have.property('status', myReturnStatus);
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
          expect(res.body).to.have.property('status', myReturnStatus);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });

  it('should return confirm password length is less than 3 status 400', (done) => {
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
          confirmpass: 'a'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          expect(res.body).to.have.property('error');
          expect(res.body).to.have.property('status', myReturnStatus);
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
          expect(res.body).to.have.property('status', myReturnStatus);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });
});

describe('POST API/V1/AUTH/LOGIN /', () => {
  const myReturnStatus = 400;
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
          expect(res.body).to.have.property('data');
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
        .post('/api/v1/auth/login')
        .send({
          email: process.env.ADMIN_EMAIL
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
          expect(res.body).to.have.property('status', myReturnStatus);
          expect(res.body).to.have.property('error', 'Invalid email or password');
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });

  it('should return password not empty status 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/login')
        .send({
          email: 'somemail@yahoo.com',
          password: '',
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          expect(res.body).to.have.property('error');
          expect(res.body).to.have.property('status', myReturnStatus);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });

  it('should return min character of 3 status 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/login')
        .send({
          email: 'somemail@yahoo.com',
          password: 'a',
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          expect(res.body).to.have.property('error');
          expect(res.body).to.have.property('status', myReturnStatus);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });

  it('should return incorrect email format status 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/login')
        .send({
          email: 'somemail@',
          password: 'xxxxxxxxxxxxxxx',
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          expect(res.body).to.have.property('error');
          expect(res.body).to.have.property('status', myReturnStatus);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });

  it('should return email cannot be empty status 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/login')
        .send({
          email: '',
          password: 'xxxxxxxxxxx',
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          expect(res.body).to.have.property('error');
          expect(res.body).to.have.property('status', myReturnStatus);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });
});


describe('POST API/V1/AUTH/RESET /', () => {
  const myReturnStatus = 400;
  const notFound = 404;
  let aToken;
  it('should return success status 200', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/reset')
        .send({
          email: 'justsine@sn.com',
        })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          const returnStatus = 200;
          const { token } = res.body.data[0];
          aToken = token;
          expect(res.body).to.have.property('status', returnStatus);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });

  it('should return email not found 404', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/reset')
        .send({
          email: 'justsnt96t496bwwd356788nx8nc8n087yvn74n07y17y473y7y372eerine@sn.com',
        })
        .end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          expect(res.body).to.have.property('error');
          expect(res.body).to.have.property('status', notFound);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });


  it('should return a no additional field 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/reset')
        .send({
          email: 'somemail@yahoo.com',
          anotherfield: 'newvalue'
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

  it('should return a no boolean 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/reset')
        .send({
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

  it('should return a wrong email format 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/reset')
        .send({
          email: 'somemail@yahoo',
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

  it('should return success status 200', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/resetcomplete')
        .send({
          email: 'justsine@sn.com',
          resetpassword: 'IhaveReset123',
          token: aToken
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

  it('should return email not found 404', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/resetcomplete')
        .send({
          email: 'justsnt96t496bwwd356788nx8nc8n087yvn74n07y17y473y7y372eerine@sn.com',
          token: aToken,
          resetpassword: 'IhaveReset123'
        })
        .end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          expect(res.body).to.have.property('error');
          expect(res.body).to.have.property('status', notFound);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });

  it('should return token not found 400', (done) => {
    try {
      chai.request(app)
        .post('/api/v1/auth/resetcomplete')
        .send({
          email: 'justsine@sn.com',
          token: '',
          resetpassword: 'IhaveReset123'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          expect(res.body).to.have.property('error');
          expect(res.body).to.have.property('status', myReturnStatus);
          done();
        });
    } catch (err) {
      throw err.message;
    }
  });
});
