import { connectDB } from "@/lib/db";
import Client from "@/models/Client";
import { IClient } from "@/types/client";

export default async function SSGPage() {
  console.log("SSGPage rendered");
  await connectDB();
  const clients = (await Client.find().lean()) as Array<
    IClient & { _id: string }
  >;

  const formattedClients = clients.map((client) => ({
    ...client,
    _id: client._id.toString(),
  }));

  return (
    <div>
      <h1>SSG Page</h1>

      <ul>
        {formattedClients.map((client) => (
          <li className="my-2 text-amber-600" key={client._id}>
            {client.name} - {client.email} - {client.age}
          </li>
        ))}
      </ul>
    </div>
  );
}
