/* eslint-disable no-restricted-globals */
import pool from '../db/config';
import validator from '../helpers/Validators';

class VotersValidation {
  static async isNumber(req, res, next) {
    const { office, candidate } = req.body;


    if (isNaN(office) || typeof (office) === 'boolean' || office == null
         || validator.hasWhiteSpace(office) || (Number(office) !== parseInt(office, 10))
         || Math.sign(office === -1)
         || isNaN(candidate) || typeof (candidate) === 'boolean'
         || (Number(candidate) !== parseInt(candidate, 10)) || Math.sign(candidate === -1)
         || validator.hasWhiteSpace(candidate) || candidate == null) {
      return res.status(400).send({
        status: 400,
        error: 'Input must be an integer'
      });
    }
    next();
  }

  static async validateVoters(req, res, next) {
    const { office, candidate } = req.body;

    const candidateIsPartyFlagbearer = await pool
      .query(`SELECT * from candidates where office='${office}' and id='${candidate}'`);

    if (candidateIsPartyFlagbearer.rows === undefined
        || candidateIsPartyFlagbearer.rows.length === 0) {
      return res.status(401).json({
        status: 401,
        error: 'Invalid request! Candidate sent is either undefined or not a party flagbearer'
      });
    }
    next();
  }

  static async noDuplication(req, res, next) {
    const { office } = req.body;
    const { id } = req.newDecodedUser;

    const hasVotedAlready = await pool
      .query(`SELECT * from vote where office='${office}' and createdBy='${id}'`);

    if (hasVotedAlready.rows.length > 0) {
      return res.status(401).json({
        status: 401,
        error: 'User cannot vote same candidate or office twice'
      });
    }
    next();
  }
}

export default VotersValidation;
