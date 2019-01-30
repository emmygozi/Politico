import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";

chai.use(chaiHttp);
const { expect } = chai;

describe("GET API/V1/PARTIES /", () => {
  it("should return a success status 200", async () => {
    try {
      const res = await chai.request(app).get("/api/v1/parties");
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an("object");
      expect(res.body).to.have.property("status");
      const sucessStatus = 200;
      expect(res.body).to.have.property("status", sucessStatus);
    } catch (err) {
      throw err.message;
    }
  });
});

describe("POST API/V1/PARTIES/", () => {
    let name,
        hqAddress,
        logoUrl
    const exec = async () => {
      try {
        return await chai
          .request(app)
          .post("/api/v1/parties")
          .send({
            name,
            hqAddress,
            logoUrl
          });
      } catch (err) {
        throw err.message;
      }
    };
  
    beforeEach(() => {
      name = "Agoodname";
      hqAddress = "a given address";
      logoUrl = "http://someurl";
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

