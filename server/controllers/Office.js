import offices from '../models/office';

class Office {
  static createOffice(req, res) {
    const { type, name } = req.body;
    const id = offices[offices.length - 1].id + 1;

    const aNewOffice = {
      id, type, name
    };

    const alreadyCreatedOffice = offices.find(
      searchValue => searchValue.type.toLowerCase() === type.toLowerCase()
    );

    if (alreadyCreatedOffice) {
      return res.status(409).json({
        status: 409,
        error: `An office with '${type}' already exists`
      });
    }
    offices.push(aNewOffice);
    res.status(201).json({
      status: 201,
      data: [offices[offices.length - 1]]
    });
  }

  static getAll(req, res) {
    res.status(200).json({ status: 200, data: [offices] });
  }

  static getOneOffice(req, res) {
    const specifiedOffice = offices
      .findIndex(searchValue => searchValue.id === parseInt(req.params.id, 10));
    if (specifiedOffice === -1) {
      return res.status(404)
        .json({ status: 404, error: 'The party requested does not exist' });
    }

    res.status(200).json({ status: 200, data: [offices[specifiedOffice]] });
  }
}

export default Office;
