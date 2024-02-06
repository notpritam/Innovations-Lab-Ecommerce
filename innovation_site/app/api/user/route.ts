import { connectDB } from "@/lib/mongodb";

export async function GET(request) {
  //   const res = await fetch("https://data.mongodb-api.com/...", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "API-Key": process.env.DATA_API_KEY,
  //     },
  //   });
  //   const data = await res.json();

  console.log(request, "this is the request object");
  await connectDB();

  return Response.json({ message: "Hello from the API!" });
}
