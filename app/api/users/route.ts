import { NextResponse } from "next/server";

import { connectDB } from "@/lib/db";

import { getUsers, createUser } from "@/services/user.service";

export async function GET() {
  await connectDB();

  const users = await getUsers();

  return NextResponse.json(users);
}

export async function POST(request: Request) {
  await connectDB();

  const body = await request.json();

  const user = await createUser(body.name, body.email);

  return NextResponse.json(user);
}
