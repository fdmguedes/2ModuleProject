const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const newsSchema = new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      description: String,
      imageUrl: String,
      author: userSchema.Types.ObjectId,
    },
    {
      timestamps: true,
    }
  );
  const News = model('News', newsSchema);
  
  module.exports = News;