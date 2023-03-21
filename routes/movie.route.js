const router = require("express").Router();
const {
  createMovie,
  getMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
} = require("../api/movie-api");

router.post("/", createMovie);

router.get("/", getMovies);

router.get("/:id", getMovieById);

router.put("/:id", updateMovie);

router.delete("/:id", deleteMovie);

// router.delete('/',)

module.exports = router;
  