const db = require('../config/db');

exports.getSkills = async (req, res) => {
  try {
    const result = await db.execute('SELECT * FROM skills');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
