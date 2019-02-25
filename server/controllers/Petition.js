import pool from '../db/config';

class Petition {
  static async createPetition(req, res) {
    const { office, body } = req.body;
    const { id } = req.newDecodedUser;

    const officeAlreadyPetitioned = {
      text: 'SELECT * from petition where office = $1 AND createdBy = $2',
      values: [`${office}`, `${id}`],
      rowMode: 'array'
    };

    const hasBeenVoted = {
      text: 'SELECT id from vote where office = $1',
      values: [`${office}`],
      rowMode: 'array'
    };

    const alreadyPetitioned = await pool.query(officeAlreadyPetitioned);
    const hasVoteResult = await pool.query(hasBeenVoted);

    if (alreadyPetitioned.rows[0] !== undefined) {
      return res.status(409).json({
        status: 409,
        error: 'You have already petitioned this office'
      });
    }

    if (hasVoteResult.rows[0] === undefined) {
      return res.status(400).json({
        status: 400,
        error: 'This office either does not exist or does not have any votes yet'
      });
    }

    const { rows } = await pool.query(`INSERT INTO petition (body, office, createdBy)
    VALUES ('${body}', '${office}', '${id}') RETURNING * `);

    res.status(201).json({
      status: 201,
      data: [rows[0]]
    });
  }
}

export default Petition;
