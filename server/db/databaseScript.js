const dropAndCreateTablesScript = `
   DROP TYPE IF EXISTS myrole CASCADE; 
   CREATE TYPE myrole AS ENUM ('True','False'); 
   DROP TABLE IF EXISTS users CASCADE; CREATE TABLE IF NOT EXISTS users (
      id SERIAL,
      email character varying(70) NOT NULL,
      isAdmin myrole default 'False',
      firstname character varying(70) NOT NULL,
      lastname character varying(70) NOT NULL,
      othername character varying(70) NOT NULL,
      phoneNumber character varying(70) NOT NULL,
      passportUrl character varying(200) NOT NULL,
      dateadded timestamp without time zone NOT NULL DEFAULT now(),
      password character varying(200) NOT NULL,
      PRIMARY KEY (id),
      UNIQUE (id, email)
  );
   DROP TABLE IF EXISTS parties CASCADE; CREATE TABLE IF NOT EXISTS parties (
    id SERIAL,
    name varchar(100) NOT NULL,
    logoUrl varchar(100) NOT NULL,
    hqAddress varchar(300) NOT NULL,
    dateadded timestamp without time zone NOT NULL DEFAULT now(),
    PRIMARY KEY (id),
    UNIQUE (id)
  );
   DROP TABLE IF EXISTS office CASCADE; CREATE TABLE IF NOT EXISTS office (
    id SERIAL,
    name character varying(70) NOT NULL,
    type character varying(70) NOT NULL,
    dateadded timestamp without time zone NOT NULL DEFAULT now(),
    UNIQUE (id)
    ); 
    DROP TABLE IF EXISTS candidates CASCADE; CREATE TABLE IF NOT EXISTS candidates (
    id SERIAL,
    office INTEGER NOT NULL,
    party INTEGER NOT NULL,
    candidate INTEGER NOT NULL,
    dateadded timestamp without time zone NOT NULL DEFAULT now(),
    FOREIGN KEY (office) REFERENCES office (id),
    FOREIGN KEY (party) REFERENCES parties (id),
    FOREIGN KEY (candidate) REFERENCES users (id),
    UNIQUE (candidate)
    ); 
  DROP TABLE IF EXISTS vote CASCADE;
   CREATE TABLE IF NOT EXISTS vote(
    id SERIAL,
    createdBy INTEGER NOT NULL,
    office INTEGER NOT NULL,
    candidate INTEGER NOT NULL,
    createdOn timestamp without time zone NOT NULL DEFAULT now(),
    FOREIGN KEY (createdBy) REFERENCES users (id),
    FOREIGN KEY (office) REFERENCES office (id),
    PRIMARY KEY (id),
    UNIQUE (id)
  ); 
  DROP TABLE IF EXISTS petition CASCADE;
  CREATE TABLE IF NOT EXISTS petition(
   id SERIAL,
   createdBy INTEGER NOT NULL,
   office INTEGER NOT NULL,
   createdOn timestamp without time zone NOT NULL DEFAULT now(),
   FOREIGN KEY (createdBy) REFERENCES users (id),
   FOREIGN KEY (office) REFERENCES office (id),
   PRIMARY KEY (id),
   UNIQUE (id)
 ); 
  DROP TABLE IF EXISTS resetpassword CASCADE;
   CREATE TABLE IF NOT EXISTS resetpassword(
    id SERIAL,
    resetuserid INTEGER NOT NULL,
    resettoken character varying(10),
    passwordresetat timestamptz NOT NULL DEFAULT now(),
    passwordresetexpiredat timestamptz,
    validUntil timestamptz
    ); `;


export default dropAndCreateTablesScript;
