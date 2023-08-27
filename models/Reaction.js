const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // Use a getter method to format the timestamp on query
      get: formatDate,
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    // id: false,
    // had to set this to false to not get a _id and just get reactionId
    _id: false,
  }
);

function formatDate(createdAt) {
  return createdAt.toLocaleString();
}

module.exports = reactionSchema;
