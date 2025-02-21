import { connectToDatabase } from "@/lib/mongodb";
import Schedule from "@/models/Schedule";
import { NextResponse } from "next/server";

interface Params {
  params: Promise<{ id: string }>;
}

export async function GET(_req: Request, { params }: Params) {
  await connectToDatabase();

  try {
    const { id } = await params;
    const schedule = await Schedule.findById(id);

    if (!schedule) {
      return NextResponse.json(
        { error: "Schedule not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ schedule }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error to find schedule." },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request, { params }: Params) {
  await connectToDatabase();

  try {
    const { id } = await params;

    const schedule = await Schedule.findById(id);

    if (!schedule) {
      return NextResponse.json(
        { error: "Schedule not found." },
        { status: 404 }
      );
    }

    const { name, description } = await req.json();

    const scheduleUpdated = await Schedule.findByIdAndUpdate(
      id,
      { name, description },
      { new: true, runValidators: true, returnDocument: "after" }
    );

    return NextResponse.json({ schedule: scheduleUpdated }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error to update schedule." },
      { status: 500 }
    );
  }
}

export async function DELETE(_req: Request, { params }: Params) {
  await connectToDatabase();

  try {
    const { id } = await params;

    const schedule = await Schedule.findById(id);

    if (!schedule) {
      return NextResponse.json(
        { error: "Schedule not found." },
        { status: 404 }
      );
    }
    const scheduleInstance = new Schedule(schedule);

    await scheduleInstance.softDelete();

    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error to delete schedule." },
      { status: 500 }
    );
  }
}
