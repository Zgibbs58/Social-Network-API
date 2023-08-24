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
      // Is this what we need to do for
      // Use a getter method to format the timestamp on query
      get: function (value) {
        return new Date(value).toLocaleString();
      },
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    // id: false,
    // had to set this to false to not get a _id and just get reactionId
    _id: false,
  }
);

module.exports = reactionSchema;
