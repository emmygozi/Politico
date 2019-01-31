# Politico
[![Maintainability](https://api.codeclimate.com/v1/badges/a660c68245ff6926cdf2/maintainability)](https://codeclimate.com/github/emmygozi/Politico/maintainability) [![Build Status](https://travis-ci.org/emmygozi/Politico.svg?branch=develop)](https://travis-ci.org/emmygozi/Politico) [![Coverage Status](https://coveralls.io/repos/github/emmygozi/Politico/badge.svg?branch=develop)](https://coveralls.io/github/emmygozi/Politico?branch=develop)  [![Test Coverage](https://api.codeclimate.com/v1/badges/a660c68245ff6926cdf2/test_coverage)](https://codeclimate.com/github/emmygozi/Politico/test_coverage)

Politico enables citizens give their mandate to politicians running for different government offices while building trust in the process through transparency.

**GH-PAGES IS HOSTED ON** : https://emmygozi.github.io/Politico/ui/


### API Endpoints
My API can be found at : https://dry-journey-38911.herokuapp.com 

### Key Application Features
An admin should be able to:
 - Admin should be able to create political party.
 - Admin should be able to view all political parties
 - Admin should be able to view one political party
 - Admin should be able to modify  a political party
 - Admin should be able to delete a political party
 - Admin should be able to create  different political offices.
 - Admin should be able to view all political offices
 - Admin should be able to view one  political offices
 - Admin can sign up 
 - Users can signup
 
 ### Development
This application was developed using NodeJs with express for routing.

### Compiler

* [Babel](https://eslint.org/) - Compiler for Next Generation JavaScript

### Installation

- Clone the repository.
- Run git clone (https://github.com/emmygozi/Politico.git)
``` git clone https://github.com/emmygozi/Politico.git ```

more info:
(https://help.github.com/articles/cloning-a-repository/)
- Run ``` yarn install/ npm install ``` to install the dependencies in the package.json file.

- checkout to branch `git checkout  ch-heroku-host-163624294`
- Start localhost  `yarn start:dev/ npm run start:dev`
- According to specified endpoints, Make get/post/patch/delete request to http://localhost:8000/api/v1/

### Testing

- Navigate to the project location in your terminal.
- Run ``` yarn test/ npm test ``` to run the test.

### API Endpoints
<table>
  <tr>
    <th>HTTP VERB</th>
		<th>ENDPOINT</th>
		<th>FUNCTIONALITY</th>
		<th>RESPONSE SPEC</th>
  </tr>
  <tr>
    <td> GET /parties </td>
    <td> /api/v1/parties </td>
    <td> View all parties </td>
    <td> {
      "status": 200,
      "data": [ 
                {
                    id: 1,
                    name: 'PDP',
                    logoUrl: 'http://thisisalogo3',
                },
                {
                    id: 2,
                    name: 'ACN',
                    logoUrl: 'http://thisisalogo3',
                },
                {
                    id: 3,
                    name: 'ANN',
                    logoUrl: 'http://thisisalogo3',
                }
            ]
        }
    </td>
  </tr>
  <tr>
    <td>GET /parties/:id</td>
    <td>/api/v1/parties/:id</td>
    <td>View a specified party</td>
    <td>{
      "status": 200,
      "data": [
               {
                    id: 1,
                    name: 'PDP',
                    logoUrl: 'http://thisisalogo3',
                },
      ]
  }</td>
  </tr>
  <tr>
    <td>POST /parties</td>
    <td>/api/v1/parties/</td>
    <td>Creates a party</td>
    <td>{
      "status": 201,
      "data": [
          {     id: 4
                name: 'NCPC'
          }
      ]
  }</td>
  </tr>
    <tr>
      <td>PATCH /parties/:id</td>
      <td>/api/v1/parties/:id</td>
      <td>Updates a specified party</td>
      <td>{
    "status": 200,
    "data": [
        {
          id: 1,
          name: 'PDP'
        },
    ]
}
      </td>
    </tr>
    <tr>
      <td>DELETE /parties/:id</td>
      <td>/api/v1/parties/:id</td>
      <td>Deletes a specific political party</td>
      <td>{
    "status": 200,
    "data": [
        {
            message: 'Requested party sucessfully deleted'
        }
    ]
}
      </td>
    </tr>
    <tr>
      <td>GET /offices/:id</td>
      <td>/api/v1/offices/:id</td>
      <td>Get a specified office</td>
      <td>{
    "status": 200,
    "data": [
        {
            "id": 2,
            "type": "State",
            "name": "Governor",
            "description": "Office of the Governor of Lagos State"
        }
    ]
}
      </td>
    </tr>
    <tr>
      <td>GET /offices</td>
      <td>/api/v1/offices/</td>
      <td>View all offices</td>
      <td>{
        "status": 200,
        "data": [
            {
                id: 1,
                type: 'Federal',
                name: 'President'
              },
              {
                id: 2,
                type: 'Legislative',
                name: 'Senate'
              },
              {
                id: 3,
                type: 'State',
                name: 'Governorship'
              }
        ]
    }
      </td>
    </tr>
    <tr>
      <td>POST /offices/</td>
      <td>/api/v1/offices/</td>
      <td>Creates a government office</td>
      <td>{
        "status": 201,
        "data": [
            {
                id: 4,
                type: 'Local Government',
                name: 'Local Government Chairman'
            }
        ]
    }
      </td>
    </tr>
    <tr>
      <td>POST /auth/signup</td>
      <td>/api/v1/auth/signup</td>
      <td>Signup as Admin or user</td>
      <td>{
        "status": 201,
        "data": [
            {
                id: 4,
                name: 'Local Government Chairman',
                email: 'somemail@yahoo.com',
            }
        ]
    }
      </td>
    </tr>
</table>

### Technologies Used

- JavaScript (ES6) (http://es6-features.org/)
- Node.js (https://nodejs.org/en/)
- Express (https://www.npmjs.com/package/express-api)
- [Babel](https://eslint.org/) - Compiler for Next Generation JavaScript

### Author
- Ahaiwe Emmanuel

### License
- MIT License
