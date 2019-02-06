import pool from '../db/config';

class Office {
  static async createOffice(req, res) {
    const { type, name } = req.body;

    const officeAlreadyRegistered = {
      text: 'SELECT type from office where type = $1 AND name = $2',
      values: [`${type}`, `${name}`],
      rowMode: 'array',
    };

    const alreadyCreatedOffice = await pool.query(officeAlreadyRegistered);

    if (alreadyCreatedOffice.rows[0] !== undefined) {
      return res.status(409).json({
        status: 409,
        error: `An office of type '${type}' and name '${name}' already exists`
      });
    }
    const { rows } = await pool.query(`INSERT INTO office (name, type)
    VALUES ('${name}', '${type}') RETURNING * `);

    res.status(201).json({
      status: 201,
      data: [rows[0]]
    });
  }

  static async getAll(req, res) {
    const { rows } = await pool.query('SELECT * FROM office ORDER BY id LIMIT 10');
    res.status(200).json({ status: 200, data: rows });
  }

  static async getOneOffice(req, res) {
    const { id } = req.params;

    const { rows } = await pool.query(`SELECT * FROM office WHERE id = '${id}'`);
    if (rows.length === 0) {
      return res.status(404)
        .json({ status: 404, error: 'The party requested does not exist' });
    }

    res.status(200).json({ status: 200, data: [rows[0]] });
  }
}

export default Office;
