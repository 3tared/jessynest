import prisma from "@/app/utils/prismadb";
import { notFound } from "next/navigation";

interface IParams {
  params: {
    id: string;
  };
}

const getProductData = async (productId: string) => {
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!product) {
    return notFound();
  }

  return product;
};

const EditProduct = async ({ params }: IParams) => {
  const product = await getProductData(params.id);
  const { name } = product;
  return <div>{name}</div>;
};

export default EditProduct;
