import { ERGAST_API_BACKUP } from "@/config";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const season = searchParams.get("season");
  const externalUrl = `${ERGAST_API_BACKUP}/${season}.json`;

  const externalResponse = await fetch(externalUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await externalResponse.json();

  return NextResponse.json(data);
}
