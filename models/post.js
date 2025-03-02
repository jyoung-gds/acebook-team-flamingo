var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  message: String,
  picture: String,
  posterID: String,
  posterName: String,
  comments: Array,
  posterPic: String,
  likes: Number,
  datetime: String
  },
  {timestamps:true}
);

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;
