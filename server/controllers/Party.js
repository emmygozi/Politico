import pool from '../db/config';

class Party {
  static async getAll(req, res) {
    const { rows } = await pool.query(`select parties.id as id, parties.name as name, 
    parties.logoUrl, parties.hqAddress, parties.dateadded ORDER BY id`);

    res.status(200).json({ status: 200, data: rows });
  }

  static async editPartyName(req, res) {
    const { name } = req.body;
    const { id } = req.params;

    const { rows } = await pool.query(`UPDATE parties SET name = '${name}'
    WHERE id = '${id}' RETURNING  id, name`);

    if (rows.length === 0) {
      return res.status(404).json({
        status: 404,
        error: 'The party with the given ID was not found!'
      });
    }


    res.status(200).json({ status: 200, data: [rows[0]] });
  }

  static async createNewParty(req, res) {
    const { name, hqAddress, logoUrl } = req.body;

    const partyAlreadyRegistered = {
      text: 'SELECT name from parties where name = $1',
      values: [`${name}`],
      rowMode: 'array',
    };

    const alreadyCreatedParty = await pool.query(partyAlreadyRegistered);

    if (alreadyCreatedParty.rows[0] !== undefined) {
      return res.status(409).json({
        status: 409,
        error: `A party with '${name}' already exists`
      });
    }

    const { rows } = await pool.query(`INSERT INTO parties (name, hqAddress, logoUrl)
    VALUES ('${name}', '${hqAddress}', '${logoUrl}') RETURNING * `);

    res.status(201).json({
      status: 201,
      data: [rows[0]]
    });
  }

  static async getOneParty(req, res) {
    const { id } = req.params;

    const { rows } = await pool.query(`SELECT * FROM parties WHERE id = '${id}'`);
    if (rows.length === 0) {
      return res.status(404)
        .json({ status: 404, error: 'The party requested does not exist' });
    }

    res.status(200).json({ status: 200, data: [rows[0]] });
  }

  static async removeAPoliticalParty(req, res) {
    const { id } = req.params;

    const { rows } = await pool.query(`DELETE FROM parties
     WHERE id = '${id}' RETURNING *`);

    if (rows.length === 0) return res.status(404).json({ status: 404, error: 'The party requested does not exist' });

    res.status(200).json({ status: 200, data: [{ message: 'Requested party sucessfully deleted' }] });
  }
}

export default Party;
