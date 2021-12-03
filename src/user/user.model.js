const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  board: {
    jobs: {
      "job-1": {
        id: {
          type: String,
          unique: true,
          default: "job-1",
        },
        company: {
          type: String,
          default: "Code Nation",
        },
        title: {
          type: String,
          default: "Junior Developer",
        },
        salary: {
          type: Number,
          default: 5,
        },
        description: {
          type: String,
          default: "Job description.",
        },
      },
    },
    columns: {
      "column-1": {
        id: {
          type: String,
          unique: true,
          default: "column-1",
        },
        title: {
          type: String,
          default: "My List",
        },
        jobIds: {
          type: Array,
        },
      },
      "column-2": {
        id: {
          type: String,
          unique: true,
          default: "column-2",
        },
        title: {
          type: String,
          default: "Applied",
        },
        jobIds: {
          type: Array,
        },
      },
      "column-3": {
        id: {
          type: String,
          unique: true,
          default: "column-3",
        },
        title: {
          type: String,
          default: "Interview",
        },
        jobIds: {
          type: Array,
        },
      },
      "column-4": {
        id: {
          type: String,
          unique: true,
          default: "column-4",
        },
        title: {
          type: String,
          default: "Accepted",
        },
        jobIds: {
          type: Array,
        },
      },
      "column-5": {
        id: {
          type: String,
          unique: true,
          default: "column-5",
        },
        title: {
          type: String,
          default: "Rejected",
        },
        jobIds: {
          type: Array,
        },
      },
    },
    columnOrder: {
      type: Array,
      default: ["column-1", "column-2", "column-3", "column-4", "column-5"],
    },
  },
});

userSchema.methods.generateAuthToken = function () {
  //nees to be function becuase using this keyword (cna't use with arrow syntax).
  return jwt.sign({ _id: this._id }, process.env.SECRET); //this refers to new user that has been created._id as how it's strutured in mongo-db.
  // when runs, it runs through each character in string until it's reverse thread will rpovide with id of user.
};

const User = mongoose.model("User", userSchema);

module.exports = User;
