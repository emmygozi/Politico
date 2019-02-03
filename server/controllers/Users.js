import { signUsers } from '../models/users';

class Users {
  static signup(req, res) {
    const {
      firstname, lastname, othername, email, phoneNumber, passportUrl
    } = req.body;
    const id = signUsers[signUsers.length - 1].id + 1;

    const asignupRequest = {
      id, firstname, lastname, othername, email, phoneNumber, passportUrl
    };
    const alreadyLogged = signUsers
      .find(searchValue => (searchValue.email.toLowerCase() === email.toLowerCase()));

    if (alreadyLogged) {
      return res.status(409).json({ status: 409, error: `An email with '${email}' is already exists` });
    }
    signUsers.push(asignupRequest);
    res.status(201).json({ status: 201, data: [signUsers[signUsers.length - 1]] });
  }
}

export default Users;