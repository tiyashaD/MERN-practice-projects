const testingController = (req, res) => {
    res.status(200).send("<h1> Welcome to ToDo App Server </h1>")
};

module.exports = { testingController };