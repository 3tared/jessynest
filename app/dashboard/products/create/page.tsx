'use client'; // Enables the usage of client-side rendering in a Next.js application.

// Import necessary utilities and components.
import { createProduct } from '@/app/actions'; // Action for product creation.
import { UploadDropzone } from '@/app/utils/uploadthing'; // Component for uploading files.
import { Button } from '@/components/ui/button'; // Reusable Button component.
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'; // UI Card components for layout.
import { Input } from '@/components/ui/input'; // Input component for text input.
import { Label } from '@/components/ui/label'; // Label component for input fields.
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'; // Select dropdown components.
import { Switch } from '@/components/ui/switch'; // Toggle switch component.
import { Textarea } from '@/components/ui/textarea'; // Textarea component for multiline input.
import { useToast } from '@/hooks/use-toast'; // Hook for displaying toast notifications.
import { motion, AnimatePresence } from 'framer-motion'; // Animation library for React.
import { ChevronLeft, XIcon } from 'lucide-react'; // Icon components.
import Link from 'next/link'; // Next.js link for navigation.
import { useFormState } from 'react-dom'; // Hook for form state management.
import { useForm } from '@conform-to/react'; // Form management library.
import { parseWithZod } from '@conform-to/zod'; // Parsing utility with Zod validation.
import { productSchema } from '@/app/utils/zodSchemas'; // Zod schema for product validation.
import { useState } from 'react'; // React state management hook.
import Image from 'next/image'; // Next.js optimized image component.
import { categories, productStatus } from '@/app/data'; // Predefined product categories and statuses.
import SubmitButton from '@/components/SubmitButton/SubmitButton'; // Custom SubmitButton component.

// Animation variants for Framer Motion animations.
const animationVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

const CreateProduct = () => {
  const { toast } = useToast(); // Toast notification instance.
  const [images, setImages] = useState<string[]>([]); // State for uploaded images.
  const [isOpen, setIsOpen] = useState(false); // State to toggle the image upload UI.
  const [lastResult, formAction] = useFormState(createProduct, undefined); // Form state and submission handler.
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: productSchema }); // Validate form data with Zod schema.
    },
    shouldValidate: 'onBlur', // Validate on input blur.
    shouldRevalidate: 'onInput', // Revalidate on input changes.
  });

  // Handler for deleting images from the state.
  const handleDelete = (idx: number) => {
    const newImages = images.filter((_, i) => i !== idx);
    setImages(newImages);

    if (newImages.length === 0) {
      setIsOpen(false);
    }
  };

  return (
    // Form submission setup with form id and action
    <form id={form.id} onSubmit={form.onSubmit} action={formAction}>
      {/* Header section with back button and title */}
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
      {/* Card container for product details */}
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Product Details</CardTitle>
          <CardDescription>Add Your Product Details Here</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            {/* Product Name Field */}
            <div className="flex flex-col gap-3">
              <Label htmlFor="name">Product Name</Label>
              <Input
                type="text"
                placeholder="Product Name"
                id="name"
                key={fields.name.key}
                name={fields.name.name}
                defaultValue={fields.name.initialValue}
                className="duration-100 focus-visible:ring-offset-1 focus-visible:ring-1"
              />
              <AnimatePresence>
                {fields.name.errors && (
                  <motion.p
                    className="text-red-500"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {fields.name.errors}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            {/* Product Description Field */}
            <div className="flex flex-col gap-3">
              <Label htmlFor="description">Product Description</Label>
              <Textarea
                placeholder=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              assumenda iure! Dignissimos, in? Aut, numquam! Dolor laborum
              possimus itaque animi voluptates?"
                id="description"
                className="duration-100 focus-visible:ring-offset-1 focus-visible:ring-1 resize-none"
                key={fields.description.key}
                name={fields.description.name}
                defaultValue={fields.description.initialValue}
              />
              <AnimatePresence>
                {fields.description.errors && (
                  <motion.p
                    className="text-red-500"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {fields.description.errors}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <div className="flex flex-col gap-3">
              {/* Product Price Field */}
              <Label htmlFor="price">Product Price</Label>
              <Input
                type="number"
                placeholder="$55.00"
                id="price"
                className="duration-100 focus-visible:ring-offset-1 focus-visible:ring-1"
                key={fields.price.key}
                name={fields.price.name}
                defaultValue={fields.price.initialValue}
              />
              <AnimatePresence>
                {fields.price.errors && (
                  <motion.p
                    className="text-red-500"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {fields.price.errors}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <div className="flex flex-col gap-3">
              {/* Product Stock Field */}
              <Label htmlFor="stock">Product Stock</Label>
              <Input
                type="number"
                placeholder="5"
                id="stock"
                className="duration-100 focus-visible:ring-offset-1 focus-visible:ring-1"
                key={fields.stock.key}
                name={fields.stock.name}
                defaultValue={fields.stock.initialValue}
              />
              <AnimatePresence>
                {fields.stock.errors && (
                  <motion.p
                    className="text-red-500"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {fields.stock.errors}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            {/* isFeatured Product Field */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Switch
                  id="featured"
                  key={fields.isFeatured.key}
                  name={fields.isFeatured.name}
                  defaultValue={fields.isFeatured.initialValue}
                />
                <Label htmlFor="featured" className="cursor-pointer">
                  Featured Product
                </Label>
              </div>
              <AnimatePresence>
                {fields.isFeatured.errors && (
                  <motion.p
                    className="text-red-500"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {fields.isFeatured.errors}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            {/* Product Status Field */}
            <div className="flex flex-col gap-3">
              <Label>Product Status</Label>
              <Select
                key={fields.status.key}
                defaultValue={fields.status.initialValue}
                name={fields.status.name}
              >
                <SelectTrigger className="focus:ring-offset-0 focus:ring-0">
                  <SelectValue placeholder="Select Product Status" />
                </SelectTrigger>
                <SelectContent>
                  {productStatus.map(({ id, name, title }) => (
                    <SelectItem key={id} value={name}>
                      {title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <AnimatePresence>
                {fields.status.errors && (
                  <motion.p
                    className="text-red-500"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {fields.status.errors}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            {/* Product Category Field */}
            <div className="flex flex-col gap-3">
              <Label>Product Category</Label>
              <Select
                key={fields.category.key}
                defaultValue={fields.category.initialValue}
                name={fields.category.name}
              >
                <SelectTrigger className="focus:ring-offset-0 focus:ring-0">
                  <SelectValue placeholder="Select Product Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(({ id, name, title }) => (
                    <SelectItem key={id} value={name}>
                      {title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <AnimatePresence>
                {fields.category.errors && (
                  <motion.p
                    className="text-red-500"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {fields.category.errors}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            {/* Image Upload Section */}
            <div className="flex flex-col gap-4">
              <Label>Product Images</Label>
              <input
                type="hidden"
                value={images}
                key={fields.images.key}
                name={fields.images.name}
                defaultValue={fields.images.initialValue?.toString()}
              />
              {/* Conditional rendering for uploaded images */}
              {images.length > 0 ? (
                <div className="flex gap-5 flex-wrap">
                  {/* Render uploaded images */}
                  <AnimatePresence>
                    {images.map((url, idx) => (
                      <motion.div
                        key={idx}
                        className="relative w-[100px] h-[100px]"
                        variants={animationVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        <Image
                          src={url}
                          alt={url.slice(0, 10)}
                          width={100}
                          height={100}
                          className="w-full h-full object-cover rounded-lg border"
                        />
                        {/* Delete button for each image */}
                        <Button
                          variant={'destructive'}
                          type="button"
                          className="absolute -top-3 -right-3 p-2 rounded-lg w-[22px] h-[22px]"
                          onClick={() => handleDelete(idx)}
                        >
                          <XIcon className="w-3 h-3" />
                        </Button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  {/* Add More Images button for uploading more */}
                  <Button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="self-center ml-auto"
                    disabled={images.length >= 10}
                  >
                    {images.length >= 10
                      ? `Max Limit Reached ${images.length}/10`
                      : `Add More Images ${images.length}/10`}
                  </Button>
                </div>
              ) : (
                // Upload dropzone for adding images
                <UploadDropzone
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    setImages((prev) => [
                      ...prev,
                      ...res.map((r) => r.url), // Only saving the URL
                    ]);
                    toast({
                      variant: 'default',
                      duration: 3000,
                      description: `${
                        res.length
                      } images uploaded successfully! total images (${
                        images.length + 1
                      })`,
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
              )}
              {/* Conditional rendering for upload more images box */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    key="uploadBox"
                    variants={animationVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="mt-3"
                  >
                    <UploadDropzone
                      endpoint="imageUploader"
                      onClientUploadComplete={(res) => {
                        setImages((prev) => {
                          const remainingSlots = 10 - prev.length;
                          const newImages = res
                            .slice(0, remainingSlots)
                            .map((r) => r.url);
                          return [...prev, ...newImages];
                        });
                        setIsOpen(false);
                        toast({
                          variant: 'default',
                          duration: 3000,
                          description: `${
                            res.length
                          } images uploaded successfully! total images (${
                            images.length + 1
                          })`,
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
                  </motion.div>
                )}
              </AnimatePresence>
              <p className="text-red-500">{fields.images.errors}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton /> {/* Submit button */}
        </CardFooter>
      </Card>
    </form>
  );
};

export default CreateProduct;
