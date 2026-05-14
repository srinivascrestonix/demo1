const db = require('./db');

async function initDb() {
  try {
    // Drop existing tables to re-seed correctly
    await db.execute(`DROP TABLE IF EXISTS profile`);
    await db.execute(`DROP TABLE IF EXISTS skills`);
    await db.execute(`DROP TABLE IF EXISTS projects`);
    await db.execute(`DROP TABLE IF EXISTS contacts`);

    // Profile table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS profile (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        title TEXT NOT NULL,
        bio TEXT NOT NULL,
        image_url TEXT
      )
    `);

    // Skills table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS skills (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        icon TEXT NOT NULL
      )
    `);

    // Projects table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS projects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        image_url TEXT,
        github_url TEXT,
        live_url TEXT
      )
    `);

    // Contacts table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Seed Data
    await db.execute({
      sql: 'INSERT INTO profile (name, title, bio, image_url) VALUES (?, ?, ?, ?)',
      args: [
        'John Doe',
        'Full Stack Developer',
        'Passionate developer with 5+ years of experience building modern web applications.',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800'
      ]
    });

    const skillsData = [
      ['HTML', 'Code'],
      ['CSS', 'Layers'],
      ['JavaScript', 'Cpu'],
      ['React', 'Atom'],
      ['Node.js', 'Server']
    ];
    for (const skill of skillsData) {
      await db.execute({
        sql: 'INSERT INTO skills (name, icon) VALUES (?, ?)',
        args: skill
      });
    }

    const projectsData = [
      ['E-commerce Platform', 'A full-featured online store built with React and Node.js. Features include product search, cart management, and secure checkout.', 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000', 'https://github.com', 'https://example.com'],
      ['Portfolio Website', 'A modern personal portfolio showcasing projects and skills with smooth animations and responsive design.', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000', 'https://github.com', 'https://example.com']
    ];
    for (const project of projectsData) {
      await db.execute({
        sql: 'INSERT INTO projects (title, description, image_url, github_url, live_url) VALUES (?, ?, ?, ?, ?)',
        args: project
      });
    }

    console.log('Database re-initialized and seeded successfully.');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

initDb();
