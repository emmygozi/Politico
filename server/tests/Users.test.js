import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";

chai.use(chaiHttp);
const { expect } = chai;

describe("POST API/V1/AUTH/SIGNUP /", () => {
  let firstname,
    lastname,
    othername,
    email,
    phoneNumber,
    passportUrl,
    password,
    confirmpass;

  const exec = async () => {
    try {
      return await chai
        .request(app)
        .post("/api/v1/auth/signup")
        .send({
          firstname,
          lastname,
          othername,
          email,
          phoneNumber,
          passportUrl,
          password,
          confirmpass
        });
    } catch (err) {
      throw err.message;
    }
  };

  beforeEach(() => {
    firstname = "Agoodname";
    lastname = "Alastname";
    othername = "Anothername";
    phoneNumber = "1234567891";
    passportUrl = "http://someurl";
    email = "newmail@yahoo.com";
    password = "1234567123";
    confirmpass = "1234567123";
  });

  it("should return a success status 201", async () => {
    try {
      const res = await exec();
      expect(res.status).to.equal(201);
      expect(res.body).to.be.an("object");
      expect(res.body).to.have.property("status");
      const sucessStatus = 201;
      expect(res.body).to.have.property("status", sucessStatus);
    } catch (err) {
      throw err.message;
    }
  });

  it("should return a success status 409", async () => {
    try {
      const res = await exec();
      expect(res.status).to.equal(409);
      expect(res.body).to.be.an("object");
      expect(res.body).to.have.property("status");
      const sucessStatus = 409;
      expect(res.body).to.have.property("status", sucessStatus);
    } catch (err) {
      throw err.message;
    }
  });
});
