'use server';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import { parseWithZod } from '@conform-to/zod';
import { productSchema } from './utils/zodSchemas';
import prisma from './utils/prismadb';
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

  const images = submission.value.images.flatMap((urlString) =>
    urlString.split(',').map((url) => url.trim())
  );
  await prisma.product.create({
    data: {
      name: submission.value.name,
      description: submission.value.description,
      status: submission.value.status,
      price: submission.value.price,
      images: images,
      category: submission.value.category,
      isFeatured: submission.value.isFeatured,
      stock: submission.value.stock,
    },
  });

  redirect('/dashboard/products');
}
