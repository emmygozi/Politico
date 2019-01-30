import parties from "../models/party";

class Party {
  static getAll(req, res) {
    res.status(200).json({ status: 200, data: parties });
  }

  static createNewParty(req, res) {
    const { name, hqAddress, logoUrl } = req.body;
    const id = parties[parties.length - 1].id + 1;

    const aNewPartyRequest = {
      id,
      name,
      hqAddress,
      logoUrl
    };

    const alreadyCreatedParty = parties.find(
      searchValue => searchValue.name.toLowerCase() === name.toLowerCase()
    );

    if (alreadyCreatedParty) {
      return res.status(409).json({
        status: 409,
        message: `An party with '${name}' already exists`
      });
    }
    parties.push(aNewPartyRequest);
    res.status(201).json({
      status: 201,
      data: parties[parties.length - 1]
    });
  }
}

export default Party;
