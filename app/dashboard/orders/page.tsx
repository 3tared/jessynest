import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import React from 'react';

const OrdersPage = () => {
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Orders</CardTitle>
        <CardDescription>Recent Orders From Your Store</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customers</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <p className="font-medium">Mohamed Tarek</p>
                <p className="hidden md:flex text-sm text-muted-foreground">
                  test@test.com
                </p>
              </TableCell>
              <TableCell>Sale</TableCell>
              <TableCell>Successfull</TableCell>
              <TableCell>2024-11-20</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <p className="font-medium">Mohamed Tarek</p>
                <p className="hidden md:flex text-sm text-muted-foreground">
                  test@test.com
                </p>
              </TableCell>
              <TableCell>Sale</TableCell>
              <TableCell>Successfull</TableCell>
              <TableCell>2024-11-20</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <p className="font-medium">Mohamed Tarek</p>
                <p className="hidden md:flex text-sm text-muted-foreground">
                  test@test.com
                </p>
              </TableCell>
              <TableCell>Sale</TableCell>
              <TableCell>Successfull</TableCell>
              <TableCell>2024-11-20</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default OrdersPage;
