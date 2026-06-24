import User from "@/models/User";

export const getUsers = async () => {
  return User.find().lean();
};

export const createUser = async (name: string, email: string) => {
  return User.create({
    name,
    email,
  });
};
