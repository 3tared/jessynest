import DashboardCard from '@/components/dashboard/DashboardCard/DashboardCard';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { DollarSign, PartyPopper, ShoppingBag, User2 } from 'lucide-react';

const Dashboard = () => {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <DashboardCard
          items={{
            title: 'Total Revenue',
            icon: <DollarSign className="h-4 w-4 text-green-500" />,
            description: '$100,000',
            subDescription: 'Based on 100 Charges',
          }}
        />
        <DashboardCard
          items={{
            title: 'Total Sales',
            icon: <ShoppingBag className="h-4 w-4 text-blue-500" />,
            description: '+50',
            subDescription: 'Total Sales on JessyNest',
          }}
        />
        <DashboardCard
          items={{
            title: 'Total Products',
            icon: <PartyPopper className="h-4 w-4 text-indigo-500" />,
            description: '40',
            subDescription: 'total Products created',
          }}
        />
        <DashboardCard
          items={{
            title: 'Total Users',
            icon: <User2 className="h-4 w-4 text-orange-500" />,
            description: '5',
            subDescription: 'Total Users Signed Up',
          }}
        />
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 mt-10">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
            <CardDescription>
              Recent transactions from your store
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <Avatar className="hidden md:flex h-9 w-9">
                <AvatarFallback>MT</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Mohamed Tarek</p>
                <p className="text-sm text-muted-foreground">test@test.com</p>
              </div>
              <div className="ml-auto font-medium">+$1,999.00</div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden md:flex h-9 w-9">
                <AvatarFallback>MT</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Mohamed Tarek</p>
                <p className="text-sm text-muted-foreground">test@test.com</p>
              </div>
              <div className="ml-auto font-medium">+$1,999.00</div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden md:flex h-9 w-9">
                <AvatarFallback>MT</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Mohamed Tarek</p>
                <p className="text-sm text-muted-foreground">test@test.com</p>
              </div>
              <div className="ml-auto font-medium">+$1,999.00</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Dashboard;
