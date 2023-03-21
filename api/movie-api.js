const Movie = require('../model/movie.model')

const createMovie = (req,res) => {
    const {title, genre, description, director, writer, cast, rating}  = req.body;
    const movie = new Movie({title, genre, description, director, writer, cast, rating});
    movie.save()
    .then(()=>{
        res.json({movie})
    })
    .catch(()=>{
        res.json({"message" : "Invalid values"});
    })

};

const getMovies = (req,res)=>{
    Movie.find()
    .then((movies)=>{
        res.json(movies)
    })
    .catch((err)=>{
        res.status(500).json({"message":"Can't get movies"})
    })
}

// Get unique data
const getMovieById = (req,res)=>{
    const id = req.params.id;
    Movie.findById(id)
    .then((movie)=>{
        if(movie) res.json(movie)
        else res.status(404).json({"message":"Movie not found!"})
    })
    .catch((err)=>{
        res.status(500).json({"message":"Can't get movie"})
    })
}

// Update movie data
const updateMovie = (req,res)=>{
    const id = req.params.id;
    const {title, genre, description, director, writer, cast, rating}  = req.body;
    Movie.findByIdAndUpdate(id,{title, genre, description, director, writer, cast, rating})
    .then((movie)=>{
        if(movie) res.json(movie)
        else res.status(404).json({"message":"Movie not found!"})
    })
    .catch((err)=>{
        res.status(500).json({"message":"Can't get movie"})
    })
}

const deleteMovie = (req,res)=>{
    const id = req.params.id;
    Movie.findByIdAndRemove(id)
    .then((movie)=>{
        if(movie) res.json(movie)
        else res.status(404).json({"message":"Movie not found!"})
    })
    .catch((err)=>{
        res.status(500).json({"message":"Can't get movie"})
    })
}



module.exports = {createMovie, getMovies, getMovieById, updateMovie, deleteMovie};

