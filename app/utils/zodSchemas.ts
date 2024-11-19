import { z } from 'zod';

export const productSchema = z.object({
  name: z
    .string()
    .min(4, 'Product name must be at least 4 characters long')
    .max(50, 'Product name must be less than 50 characters long'),
  description: z
    .string()
    .min(10, 'Description must be at least 10 characters long')
    .max(500, 'Description must be less than 500 characters long'),
  status: z.enum(['draft', 'published', 'archived']),
  price: z.number().min(1, 'Price must be greater than 0'),
  images: z.array(z.string().min(1, 'at least one image is required')),
  category: z.enum(['men', 'women', 'kids']),
  isFeatured: z.boolean().optional().default(false),
});
