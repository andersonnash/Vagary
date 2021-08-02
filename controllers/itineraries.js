import Post from "../models/post.js";
import User from "../models/user.js";
import Itinerary from "../models/itinerary.js";

export const getAllItinerary = async (req, res) => {
  try {
    const itineraries = await Itinerary.find().populate("user_id");
    res.json(itineraries);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getItinerary = async (req, res) => {
  try {
    const { id } = req.params;
    const itinerary = await Post.findById(id).populate("user_id");
    if (itinerary) {
      res.json(itinerary);
    } else {
      res.status(404).json({ error: "Itinerary not found" });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const createItinerary = async (req, res) => {
  try {
    let { location, imageURL, description, date, flightInfo, user_id } =
      req.body;
    let newPost = {
      location,
      imageURL,
      description,
      date,
      flightInfo,
      user_id,
    };
    let foundUser = await User.find({ username: user_id });
    if (foundUser) {
      newPost.user_id = foundUser[0]._id;
    }
    const itinerary = await Itinerary.create(newPost);
    const postId = post._id;
    await User.findByIdAndUpdate(
      { _id: foundUser[0]._id },
      { push: { posts: postId } }
    );
    return res.status(200).json(itinerary);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const updateItinerary = async (req, res) => {
  try {
    const itinerary = await Itinerary.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (itinerary) {
      return res.status(201).send("Itinerary Updated");
    } else {
      return res.status(404).send("Itinerary Not Found");
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const deleteItinerary = async (req, res) => {
  try {
    const itinerary = await Itinerary.findByIdAndDelete(req.params.id);
    await User.findByIdAndUpdate(
      { _id: itinerary.user_id },
      { $pull: { itinerary: itinerary._id } }
    );
    if (itinerary) {
      return res.status(200).send("Itinerary Deleted");
    } else {
      return res.status(404).send("Itinerary Not Found");
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
