import pool from '../db/config';

class Vote {
  static async castVote(req, res) {
    const { office, candidate } = req.body;
    const { id } = req.newDecodedUser;

    const { rows } = await pool.query(`INSERT INTO vote (createdBy, office, candidate)
            VALUES ('${id}', '${office}', '${candidate}') RETURNING * `);

    res.status(201).json({
      status: 201,
      data: [{
        id: rows[0].id,
        office: rows[0].office,
        candidate: rows[0].candidate,
        voter: rows[0].createdby
      }]
    });
  }

  static async collateSpecificOfficeResult(req, res) {
    const { id } = req.params;

    const { rows } = await pool.query(`SELECT * FROM vote WHERE office = '${id}'`);
    if (rows.length === 0) {
      return res.status(404)
        .json({ status: 404, error: 'The office requested does not exist' });
    }

    res.status(200).json({ status: 200, data: rows });
  }
}

export default Vote;
