import { connectToDatabase } from "@/lib/mongodb";
import Schedule from "@/models/Schedule";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDatabase();

  try {
    const schedules = await Schedule.find();
    return NextResponse.json({ schedules }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error to list schedules." },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  await connectToDatabase();

  try {
    const { name, description } = await req.json();

    const schedule = await Schedule.create({ name, description });

    return NextResponse.json({ schedule }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error to create schedule." },
      { status: 500 }
    );
  }
}
