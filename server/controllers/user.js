import { db } from '../db.js';

export const getUsers = (req, res) => {
  const querry = 'SELECT * FROM users';

  db.query(querry, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const querry =
    'INSERT INTO users(`nome`, `email`, `user`, `data_nascimento`) values(?)';

  const values = [
    req.body.nome,
    req.body.email,
    req.body.user,
    req.body.data_nascimento,
  ];

  db.query(querry, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json('Usuário cadastrado com sucesso.');
  });
};

export const updateUser = (req, res) => {
  const querry =
    'UPDATE users SET `nome` = ?, `email` = ?, `user` = ?, `data_nascimento` = ? WHERE `id` = ?';

  const values = [
    req.body.nome,
    req.body.email,
    req.body.user,
    req.body.data_nascimento,
  ];

  db.query(querry, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json('Usuário atualizado com sucesso.');
  });
};

export const deleteUser = (req, res) => {
  const querry = 'DELETE FROM users WHERE `id` = ?';

  db.query(querry, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json('Usuário deletado com sucesso');
  });
};
