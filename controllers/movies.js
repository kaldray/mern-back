const Movie = require("../models/movies.js");

exports.createMovie = (req, res, next) => {
  delete req.body._id;
  const movie = new Movie({
    ...req.body,
  });
  movie
    .save()
    .then(() => res.status(201).json({ message: "objet enregistrer" }))
    .catch((err) => res.status(400).json({ message: err }));
  console.log(req.body);
};

