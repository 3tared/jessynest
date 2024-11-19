import { ICategory, IProductStatus } from '../interfaces';

export const categories: ICategory[] = [
  {
    id: 1,
    name: 'men',
    title: 'Men',
  },
  {
    id: 2,
    name: 'women',
    title: 'Women',
  },
  {
    id: 3,
    name: 'kids',
    title: 'Kids',
  },
];
export const productStatus: IProductStatus[] = [
  {
    id: 1,
    name: 'draft',
    title: 'Draft',
  },
  {
    id: 2,
    name: 'published',
    title: 'Published',
  },
  {
    id: 3,
    name: 'archived',
    title: 'Archived',
  },
];
