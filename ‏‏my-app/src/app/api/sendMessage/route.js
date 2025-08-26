import axios from "axios";

export async function POST(req) {
  try {
    const { description } = await req.json(); // نستقبل فقط حقل text

    if (!description || description.trim() === "") {
      return new Response(
        JSON.stringify({ success: false, error: "Text is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    await axios.post(
      `https://api.telegram.org/bot7435003368:AAGNPSAS2dvGShovUTneJ-FGTeoF68XSrWQ/sendMessage?chat_id=6926577665&text=${encodeURIComponent(
        description
      )}`
    );

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
