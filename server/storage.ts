import bcrypt from "bcryptjs";
import mongoose from "mongoose";

// Define your User schema & model (example)
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const User = mongoose.model("User", userSchema);

export interface IUser {
  id?: string;
  username: string;
  email: string;
  password?: string | null;
  firstName?: string;
  lastName?: string;
}

// Create user with hashed password
export async function createUser(data: {
  username: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}): Promise<IUser> {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = new User({
    username: data.username,
    email: data.email,
    password: hashedPassword,
    firstName: data.firstName,
    lastName: data.lastName,
  });

  const savedUser = await user.save();

  return {
    id: savedUser._id.toString(),
    username: savedUser.username,
    email: savedUser.email,
    firstName: savedUser.firstName,
    lastName: savedUser.lastName,
  };
}

// Get user by email
export async function getUserByEmail(email: string): Promise<IUser | null> {
  const user = await User.findOne({ email }).exec();
  if (!user) return null;

  return {
    id: user._id.toString(),
    username: user.username,
    email: user.email,
    password: user.password,
    firstName: user.firstName,
    lastName: user.lastName,
  };
}

// Get user by username
export async function getUserByUsername(username: string): Promise<IUser | null> {
  const user = await User.findOne({ username }).exec();
  if (!user) return null;

  return {
    id: user._id.toString(),
    username: user.username,
    email: user.email,
    password: user.password,
    firstName: user.firstName,
    lastName: user.lastName,
  };
}

// Verify password for login
export async function verifyPassword(email: string, password: string): Promise<IUser | null> {
  const user = await User.findOne({ email }).exec();

  if (!user || !user.password) {
    return null; // no user or no password stored
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return null;
  }

  return {
    id: user._id.toString(),
    username: user.username,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
  };
}

// Get user by ID
export async function getUser(id: string): Promise<IUser | null> {
  const user = await User.findById(id).exec();
  if (!user) return null;

  return {
    id: user._id.toString(),
    username: user.username,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
  };
}

// Update user
export async function updateUser(id: string, updates: Partial<IUser>): Promise<IUser | null> {
  const user = await User.findById(id).exec();
  if (!user) return null;

  if (updates.username !== undefined) user.username = updates.username;
  if (updates.email !== undefined) user.email = updates.email;
  if (updates.firstName !== undefined) user.firstName = updates.firstName;
  if (updates.lastName !== undefined) user.lastName = updates.lastName;

  if (updates.password) {
    user.password = await bcrypt.hash(updates.password, 10);
  }

  const savedUser = await user.save();

  return {
    id: savedUser._id.toString(),
    username: savedUser.username,
    email: savedUser.email,
    firstName: savedUser.firstName,
    lastName: savedUser.lastName,
  };
}
