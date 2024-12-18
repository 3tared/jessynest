import prisma from "@/app/utils/prismadb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal, PlusCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const getProducts = async () => {
  const products = prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return products;
};

const ProductsPage = async () => {
  const products = await getProducts();
  return (
    <>
      <div className="flex justify-end items-center">
        <Button asChild className="flex items-center gap-x-2">
          <Link href="/dashboard/products/create">
            <PlusCircle style={{ height: 14, width: 14 }} />
            <span>Add Product</span>
          </Link>
        </Button>
      </div>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription>
            Manage Your Products And View Thier Sales Performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map(
                ({ id, images, name, price, status, updatedAt }) => (
                  <TableRow key={id}>
                    <TableCell>
                      <Image
                        alt={name}
                        src={images[0]}
                        width={64}
                        height={64}
                        className="object-cover w-16 h-16 rounded-md"
                      />
                    </TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell>{status}</TableCell>
                    <TableCell>${price}</TableCell>
                    <TableCell>
                      {new Intl.DateTimeFormat("en-US").format(updatedAt)}
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant={"ghost"} size={"icon"}>
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem asChild>
                            <Link href={`/dashboard/products/${id}`}>Edit</Link>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductsPage;
