const Jobs = require("./jobs.model");

//CREATE - res rewq needed everytime.req everythign sient, res everythign sent back.
// use in API client POST http://localhost:5000/user and enter JSON data. see readme for more
exports.addJobs = async (req, res) => {
  try {
    const newJob = new Jobs(req.body);
    await newJob.save();
    res.status(200).send({ message: "successfully added job." }); // needed or will tiem out. Got to send it.
  } catch (error) {
    console.log(error);
    res
      .status(418)
      .send({ message: "Adding job went wrong. Check server logs." }); //response if fails.
  }
};

//READ - uses GET (does not accept .body)
exports.getJobs = async (req, res) => {
  try {
    const jobList = await Jobs.find({});
    console.log("Successfully read database.");
    res.status(200).send({ jobList });
  } catch (error) {
    console.log(error);
    res
      .status(418)
      .send({ message: "Reading database went wrong. Check server logs." }); //response if fails.
  }
};

//DELETE - uses delete (does not accept .body - accepts .params)
exports.deleteJob = async (req, res) => {
  try {
    await Jobs.findOneAndDelete({ title: req.params.title }); //mongoose finds and delete all to do withthat username.
    res.status(200).send({ message: "success - job deleted from database" }); // needed or will time out. like return statement.
  } catch (error) {
    res.status(500).send({ message: "Check server logs" });
  }
};
