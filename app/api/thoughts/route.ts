import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  const { text } = await request.json();
  const thought = await prisma.thought.create({
    data: { text },
  });
  return Response.json(
    { message: "Thought Created", thought },
    { status: 201 }
  );
}

export async function GET() {
  const thoughts = await prisma.thought.findMany();
  return Response.json({ thoughts });
}
