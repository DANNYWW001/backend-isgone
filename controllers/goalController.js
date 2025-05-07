const GOAL = require("../models/goal");

const createGoal = async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ message: "Provide title and description" });
  }
  try {
    //create or save
    const goal = await GOAL.create(req.body);
    return res.status(201).json({ success: true, goal });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

const getAllGoals = async (req, res) => {
  res.send("get all goals");
};

const getOngoingGoals = async (req, res) => {
  res.send("get ongoing goal");
};

const getCompletedGoals = async (req, res) => {
  res.send("get Completed goals");
};

const getSingleGoal = async (req, res) => {
  res.send("get single goal");
};

const updateGoal = async (req, res) => {
  res.send("update goal");
};

const deleteGoal = async (req, res) => {
  res.send("delete goal");
};

module.exports = {
  createGoal,
  getAllGoals,
  getCompletedGoals,
  getSingleGoal,
  getOngoingGoals,
  updateGoal,
  deleteGoal,
};
