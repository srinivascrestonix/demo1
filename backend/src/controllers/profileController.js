const db = require('../config/db');

exports.getProfile = async (req, res) => {
  try {
    const result = await db.execute('SELECT * FROM profile LIMIT 1');
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
