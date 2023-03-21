// Handle wrong url routes

const errorHandler = (req,res) => {
    res.status(404).send({message: "Page not Found!"})
}

module.exports = errorHandler;