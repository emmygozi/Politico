import { signUsers, loginUsers } from '../models/users';


/**
 * @exports
 * @class UsersController
 */
class Users {
    /**
   * Creates a new user
   * @method signup
   * @memberof UsersController
   * @param {object} req
   * @param {object} res
   * @returns {(function|object)} Function next() or JSON object
   * checks for duplication before signup of a user
   */
  static signup(req, res) {
    const {
        firstname, lastname, othername, email, phoneNumber, passportUrl, isAdmin
    } = req.body;
    const id = signUsers[signUsers.length - 1].id + 1;

    const asignupRequest = {
      id,
      firstname,
      lastname,
      othername,
      email,
      phoneNumber,
      passportUrl,
      isAdmin
    };

    const userExists = signUsers.find(searchValue =>
      (searchValue.email.toLowerCase() === email.toLowerCase()));

    if (userExists) {
      return res.status(409).json
      ({
          status: 409,
          message: `An email with '${email}' is already exists`
        });
    }
    signUsers.push(asignupRequest);
    res.status(201).json
    ({
        status: 201,
        data: signUsers[signUsers.length - 1]
    });
  }

    /**
   * Logs a user in
   * @method login
   * @memberof UsersController
   * @param {object} req
   * @param {object} res
   * @returns {(function|object)} Function next() or JSON object
   * Logs an already registered user in
   */
  static login(req, res) {
    const {
        email, password
    } = req.body;

    const userExists = loginUsers.find(searchValue =>
      (searchValue.email.toLowerCase() === email.toLowerCase()));

    if (!userExists) {
      return res.status(400).json
      ({
          status: 400,
          message: `A user with '${email}' does not exists`
        });
    }

    const response = {
        email: userExists.email,
        message: 'Logged in..'
    }

    res.status(200).json
    ({
        status: 201,
        data: response
    });
  }
}

export default Users;