import { NextResponse } from "next/server";

const ADMIN_API_URL = process.env.ADMIN_API_URL || "http://localhost:3001";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(`${ADMIN_API_URL}/api/public/vydhra/coupon/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("[Vydhra /api/coupon/validate] Error:", error);
    return NextResponse.json({ error: "Failed to connect to backend" }, { status: 500 });
  }
}
