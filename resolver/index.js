import pgsql from "pg";
const { Pool } = pgsql;

const pool = new Pool({
  user: "mydbuser",
  host: "localhost",
  database: "graphqltest",
  password: "mypasswd",
  port: 5432,
});

export const resolvers = {
  Query: {
    users: async (parent, args) => {
      const client = await pool.connect();
      const result = await pool.query("SELECT * FROM users");
      const users = result.rows;
      client.release();
      return users;
    },
    user: async (parent, args) => {
      const client = await pool.connect();
      const result = await pool.query("SELECT * FROM users where id= $1", [
        args.id,
      ]);
      const user = result.rows[0];
      client.release();
      return user;
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const { prenom, nom, email } = args;
      const client = await pool.connect();
      const result = await pool.query(
        "INSERT INTO users (prenom, nom, email) VALUES ($1, $2, $3) RETURNING *",
        [prenom, nom, email]
      );
      const newUser = result.rows[0];
      client.release();
      return newUser;
    },
    modifyName: async (parent, args) => {
      const client = await pool.connect();
      const result = await pool.query(
        "UPDATE users SET prenom = $1 where id= $2",
        [args.prenom, args.id]
      );
      const user = result.rows[0];
      client.release();
      return user;
    },
    deleteUser: async (parent, args) => {
      const client = await pool.connect();
      const result = await pool.query("DELETE FROM users where id= $1", [
        args.id,
      ]);
      const user = result.rows[0];
      client.release();
      return args.id;
    },
  },
};
