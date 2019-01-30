import parties from '../models/party';

class Party {
  static getAll(req, res) {
    res.status(200).json({ status: 200, data: [parties] });
  }

  static editPartyName(req, res) {
    const updatePartyName = parties.find(
      aParty => aParty.id === parseInt(req.params.id, 10)
    );
    if (!updatePartyName) {
      return res.status(404).json({
        status: 404,
        error: 'The food item with the given ID was not found!'
      });
    }

    updatePartyName.name = req.body.name;

    const { id, name } = updatePartyName;

    res.status(200).json({ status: 200, data: [{ id, name }] });
  }

  static createNewParty(req, res) {
    const { name, hqAddress, logoUrl } = req.body;
    const id = parties[parties.length - 1].id + 1;

    const aNewPartyRequest = {
      id, name, hqAddress, logoUrl
    };

    const alreadyCreatedParty = parties.find(
      searchValue => searchValue.name.toLowerCase() === name.toLowerCase()
    );

    if (alreadyCreatedParty) {
      return res.status(409).json({
        status: 409,
        error: `An party with '${name}' already exists`
      });
    }
    parties.push(aNewPartyRequest);
    res.status(201).json({
      status: 201,
      data: [parties[parties.length - 1]]
    });
  }

  static getOneParty(req, res) {
    const specifiedParty = parties
      .findIndex(searchValue => searchValue.id === parseInt(req.params.id, 10));
    if (specifiedParty === -1) {
      return res.status(404)
        .json({ status: 404, error: 'The food item with the given ID was not found!' });
    }

    res.status(200).json({ status: 200, message: 'Retrieved specified food item', data: [parties[specifiedParty]] });
  }
}

export default Party;
