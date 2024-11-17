'use client';
import { UploadDropzone } from '@/app/utils/uploadthing';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

const CreateProduct = () => {
  const { toast } = useToast();
  return (
    <form>
      <div className="flex items-center gap-4">
        <Button size={'icon'} variant={'outline'}>
          <Link href={'/dashboard/products'}>
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-2xl font-semibold tracking-tight">
          Create New Product
        </h1>
      </div>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Product Details</CardTitle>
          <CardDescription>Add Your Product Details Here</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <Label htmlFor="name">Product Name</Label>
              <Input
                type="text"
                placeholder="Product Name"
                id="name"
                className="duration-100 focus-visible:ring-offset-1 focus-visible:ring-1"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="description">Product Description</Label>
              <Textarea
                placeholder=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              assumenda iure! Dignissimos, in? Aut, numquam! Dolor laborum
              possimus itaque animi voluptates?"
                id="description"
                className="duration-100 focus-visible:ring-offset-1 focus-visible:ring-1 resize-none"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="price">Product Price</Label>
              <Input
                type="number"
                placeholder="$55.00"
                id="price"
                className="duration-100 focus-visible:ring-offset-1 focus-visible:ring-1"
              />
            </div>
            <div className="flex items-center gap-3">
              <Switch id="featured" />
              <Label htmlFor="featured" className="cursor-pointer">
                Featured Product
              </Label>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Product Status</Label>
              <Select>
                <SelectTrigger className="focus:ring-offset-0 focus:ring-0">
                  <SelectValue placeholder="Select Product Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Product Images</Label>
              <UploadDropzone
                endpoint="imageUploader"
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                onClientUploadComplete={(res) => {
                  toast({
                    variant: 'default',
                    duration: 3000,
                    description: 'Product images uploaded successfully!',
                    title: 'Uploaded Successfully',
                    className: 'bg-green-600 text-primary-foreground',
                  });
                }}
                onUploadError={(error: Error) => {
                  toast({
                    variant: 'destructive',
                    title: 'Uh oh! Something went wrong.',
                    description:
                      error.message == 'Invalid config: FileCountMismatch'
                        ? "You Can't Upload More Than 10 Images"
                        : error.message,
                    duration: 3000,
                  });
                }}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Create Product</Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default CreateProduct;
