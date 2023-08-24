const { User, Thought } = require("../models");

module.exports = {
  // Get all Thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a Thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId }).select("-__v");

      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a Thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a Thought
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      await Thought.deleteMany({ _id: { $in: thought.reactions } });

      res.json({ message: "Thought and reactions deleted!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a course
  async updateCourse(req, res) {
    try {
      const course = await Course.findOneAndUpdate({ _id: req.params.courseId }, { $set: req.body }, { runValidators: true, new: true });

      if (!course) {
        return res.status(404).json({ message: "No course with this id!" });
      }

      res.json(course);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
