import { connectToDatabase } from "@/lib/mongodb";
import Schedule from "@/models/Schedule";
import { NextResponse } from "next/server";

interface Params {
  params: Promise<{ id: string }>;
}

export async function PATCH(_req: Request, { params }: Params) {
  await connectToDatabase();

  try {
    const { id } = await params;

    const schedule = await Schedule.findOne({ _id: id }).setOptions({
      disableSoftDelete: true,
    });

    if (!schedule) {
      return NextResponse.json(
        { error: "Schedule not found." },
        { status: 404 }
      );
    }
    schedule.isDeleted = false;
    await schedule.save();

    return NextResponse.json({ schedule }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error to delete schedule." },
      { status: 500 }
    );
  }
}
