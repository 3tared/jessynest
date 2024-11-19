'use server';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import { parseWithZod } from '@conform-to/zod';
import { productSchema } from './utils/zodSchemas';
export async function createProduct(currentState: unknown, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user.email !== process.env.ADMIN_EMAIL) {
    return redirect('/');
  }

  const submission = parseWithZod(formData, {
    schema: productSchema,
  });

  if (submission.status !== 'success') {
    return submission.reply();
  }
}
