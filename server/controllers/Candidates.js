import pool from '../db/config';

class Candidates {
  static async flagbearerIndicateInterest(req, res) {
    const { office, party } = req.body;
    const { id } = req.params;


    const { rows } = await pool.query(`INSERT INTO candidates (office, party, candidate)
        VALUES ('${office}', '${party}', '${id}') RETURNING * `);

    res.status(201).json({
      status: 201,
      data: [rows[0]]
    });
  }
}

export default Candidates;
