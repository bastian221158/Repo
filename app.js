const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = 3000;

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

const pool = mysql.createPool(dbConfig);

app.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM usuarios');
    
    let html = '<h1>Lista de Usuarios</h1><ul>';
    rows.forEach(user => {
      html += `<li>ID: ${user.id} - Nombre: ${user.nombre}</li>`;
    });
    html += '</ul>';

    res.send(html);

  } catch (error) {
    console.error('Error al conectar o consultar la DB:', error);
    res.status(500).send('Error al conectar a la base de datos');
  }
});

app.listen(port, () => {
  console.log(`Aplicación escuchando en http://localhost:${port}`);
});