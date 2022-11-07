const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const newsSchema = new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      description: String,
      imageUrl: {
        type: String, 
        default: 'https://cdn.easywebsites.co.uk/atlas/images/frontend/news-default.png'
      },
      author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    },
    {
      timestamps: true,
    }
  );
  const News = model('News', newsSchema);
  
  module.exports = News;