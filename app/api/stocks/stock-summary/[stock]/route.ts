import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET(request: NextRequest) {
	const filePath = path.join(process.cwd(), "appl.json");

	try {
		const data = await fs.readFile(filePath, "utf-8");
		return NextResponse.json(JSON.parse(data));
	} catch (error) {
		console.error("Error reading stock summary data file:", error);
		return NextResponse.json(
			{ error: "Error reading stock summary data file" },
			{ status: 500 }
		);
	}
}
