const { Pool } = require('pg');
const pool = new Pool({
  connectionString : 'postgres://tframe:tylerframe@localhost:5432/fitness-tracker'

  });

  module.expert = { 
    query: (text, params) => pool.query(text, params),
  };