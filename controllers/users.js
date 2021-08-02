export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const { body } = req;
    const updatedUser = await User.findByIdAndUpdate(user_id, body, {
      new: true,
    });
    res.send(updatedUser);
  } catch (e) {
    res.status(422).json({ error: e.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const deletedUser = await User.findByIdAndDelete(user_id, body, {
      new: true,
    });
    res.send(deletedUser);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};
