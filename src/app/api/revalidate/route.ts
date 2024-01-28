import { revalidatePath } from 'next/cache'

export async function GET(request: Request) {
  console.log("revalidated content at " + Date.now());
  revalidatePath('/')
  return Response.json({ revalidated: true, now: Date.now() })
}