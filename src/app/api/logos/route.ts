import { readdirSync } from "fs";
import { join } from "path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const logosDir = join(process.cwd(), "public/logos");
    const files = readdirSync(logosDir).filter(file =>
      /\.(png|jpg|jpeg|svg|webp)$/i.test(file) // Only include image files
    );

    return NextResponse.json(files);
  } catch (error) {
    console.error("Error loading logos:", error);
    return NextResponse.json({ error: "Failed to load logos" }, { status: 500 });
  }
}
