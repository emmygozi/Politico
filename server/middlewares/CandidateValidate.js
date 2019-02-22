/* eslint-disable no-restricted-globals */
import pool from '../db/config';
import validator from '../helpers/Validators';

class CandidateValidate {
  static async noDuplication(req, res, next) {
    const { office, party } = req.body;
    const { id } = req.params;


    const { rows } = await pool
      .query(`SELECT * FROM candidates WHERE candidate=${id} OR party=${party} AND office=${office}`);


    if (rows.length !== 0) {
      return res.status(409).json({
        status: 409,
        error: 'No duplication for party flagbearer'
      });
    }
    next();
  }

  static async isNumber(req, res, next) {
    const { office, party } = req.body;

    const { id } = req.params;


    if (isNaN(office) || typeof (office) === 'boolean' || validator.hasWhiteSpace(office)
        || office == null || (Number(office) !== parseInt(office, 10)) || Math.sign(office === -1)
        || party == null || validator.hasWhiteSpace(party)
        || (Number(party) !== parseInt(party, 10)) || Math.sign(party === -1)
        || isNaN(party) || typeof (party) === 'boolean' || (Number(id) !== parseInt(id, 10)) || Math.sign(id === -1)
        || isNaN(id) || typeof (id) === 'boolean' || id == null || validator.hasWhiteSpace(id)) {
      return res.status(400).send({
        status: 400,
        error: 'Input must be an integer'
      });
    }
    next();
  }

  static async validateCandidate(req, res, next) {
    const { office, party } = req.body;

    const partyHasBeenCreated = await pool
      .query(`SELECT * from parties where id='${party}'`);
    const officeHasBeenCreated = await pool
      .query(`SELECT * from office where id='${office}'`);

    if (partyHasBeenCreated.rows === undefined || partyHasBeenCreated.rows.length === 0
        || officeHasBeenCreated.rows.length === 0 || officeHasBeenCreated.rows === undefined) {
      return res.status(401).json({
        status: 401,
        error: 'Invalid request! Party or office had not been created yet'
      });
    }
    next();
  }
}
export default CandidateValidate;
