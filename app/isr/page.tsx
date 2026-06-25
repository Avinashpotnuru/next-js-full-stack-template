export const revalidate = 10;

import { connectDB } from "@/lib/db";
import Role, { IRole } from "@/models/Role";

export default async function ISRPage() {
  await connectDB();

  const roles = (await Role.find().lean()) as Array<IRole & { _id: string }>;
  const formattedRoles = roles.map((role) => ({
    ...role,
    _id: role._id.toString(),
  }));

  console.log("ISRPage rendered");

  return (
    <div>
      <h1>ISR Page</h1>
      <ul>
        {formattedRoles.map((role) => (
          <li className="my-2 text-amber-600" key={role._id}>
            {role.name} - {role.role}
          </li>
        ))}
      </ul>
    </div>
  );
}
