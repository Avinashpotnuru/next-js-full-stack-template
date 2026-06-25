export const dynamic = "force-dynamic";

import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { IUser } from "@/types/user";

export default async function SSRPage() {
  await connectDB();

  const users = (await User.find().lean()) as IUser[];

  const formattedUsers = users.map((user) => ({
    ...user,
    _id: user._id.toString(),
  }));
 

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">SSR Users</h1>

    

      <ul className="space-y-2">
        {formattedUsers.map((user) => (
          <li key={user._id} className="border p-3 rounded">
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Age:</strong> {user.age}
            </p>
            <p>
              <strong>City:</strong> {user.city}
            </p>
            <p>
              <strong>Role:</strong> {user.role}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
