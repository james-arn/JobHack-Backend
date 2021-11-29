const { Router } = require("express"); //curly brakcets as pulled from express.
const { addJobs, getJobs, deleteJob } = require("./jobs.controllers");
const jobRouter = Router(); // assign to const to access with dotnotation. Name related to concern. Take note of capital R.

//CREATE - in order to access this endpoint need to make post request. see readme.
//need to send data and create so post is used. automatically recieved req and res onbject.
//it will run function if hit. (addJobs controller.)

jobRouter.post("/jobs", addJobs);

// //UDPATE - PUT
// userRouter.put("/user", updateEmail);

//READ -make get request. see readme.
jobRouter.get("/jobs", getJobs); //getUser controller for read function

//DELETE
jobRouter.delete("/jobs/:title", deleteJob); //anythign after user is consider req.params.username colon variable name is express parameter.

module.exports = jobRouter;
