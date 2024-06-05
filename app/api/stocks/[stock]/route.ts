import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { promises as fs } from "fs";
import path from "path";

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const interval = searchParams.get("interval");

	if (!interval) {
		return NextResponse.json(
			{ error: "Missing required query parameters" },
			{ status: 400 }
		);
	}

	const filePath = path.join(
		process.cwd(),
		"stock_data",
		`response_${interval}.json`
	);

	try {
		const data = await fs.readFile(filePath, "utf-8");
		return NextResponse.json(JSON.parse(data));
	} catch (error) {
		console.error("Error reading stock data file:", error);
		return NextResponse.json(
			{ error: "Error reading stock data file" },
			{ status: 500 }
		);
	}
}
