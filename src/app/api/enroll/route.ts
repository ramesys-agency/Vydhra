import { NextResponse } from "next/server";

const ADMIN_API_URL = process.env.ADMIN_API_URL || process.env.NEXT_PUBLIC_ADMIN_API_URL || "http://127.0.0.1:3002";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(`${ADMIN_API_URL}/api/public/vydhra/enroll`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("[Vydhra /api/enroll] Error:", error);
    return NextResponse.json({ error: "Failed to connect to backend" }, { status: 500 });
  }
}
