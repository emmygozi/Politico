import pool from '../db/config';

class Candidates {
  static async flagbearerIndicateInterest(req, res) {
    const { office, party } = req.body;
    const { id } = req.params;


    const { rows } = await pool.query(`INSERT INTO candidates (office, party, candidate)
        VALUES ('${office}', '${party}', '${id}') RETURNING * `);

    res.status(201).json({
      status: 201,
      data: [{ id: rows[0].id, office: rows[0].office, user: rows[0].candidate }]
    });
  }

  static async getAll(req, res) {
    const { rows } = await pool.query('SELECT * FROM candidates ORDER BY id LIMIT 10');

    res.status(200).json({ status: 200, data: rows });
  }
}

export default Candidates;
