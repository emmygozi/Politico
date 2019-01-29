import parties from '../models/party'

class Party {
  static getAll(req, res) {
    res.status(200).json({ status: 200, data: parties });
  }
}

export default Party;
