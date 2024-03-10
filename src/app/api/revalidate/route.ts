import { revalidatePath } from 'next/cache';

export async function GET(request: Request) {
  revalidatePath('/');
  return Response.json({ revalidated: true, now: Date.now() });
}
