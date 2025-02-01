import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { text } = await req.json();

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("msg", text);
  urlencoded.append("lang", "Takumi");
  urlencoded.append("source", "ttsmp3");

  const requestOptions: any = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "https://ttsmp3.com/makemp3_new.php",
      requestOptions
    );

    if (!response.ok) {
      throw new Error("Failed to generate speech");
    }

    const jsonRes = await response.json();

    return new NextResponse(JSON.stringify({ link: jsonRes.URL }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error generating speech:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to generate speech" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
