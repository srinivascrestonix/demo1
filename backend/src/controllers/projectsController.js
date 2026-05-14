const db = require('../config/db');

exports.getProjects = async (req, res) => {
  try {
    const result = await db.execute('SELECT * FROM projects');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
