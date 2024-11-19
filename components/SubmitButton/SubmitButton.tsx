'use client';
import { useFormStatus } from 'react-dom';
import { Button } from '../ui/button';
import { Loader2 } from 'lucide-react';

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button type="submit" disabled>
          <Loader2 className="animate-spin h-4 w-4" />
          Please Wait
        </Button>
      ) : (
        <Button type="submit">Create Product</Button>
      )}
    </>
  );
};

export default SubmitButton;
