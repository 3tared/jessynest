import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ReactNode } from 'react';

interface Iprops {
  items: {
    title: string;
    icon: ReactNode;
    description: string;
    subDescription: string;
  };
}

function DashboardCard({ items }: Iprops) {
  const { title, icon, description, subDescription } = items;
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{description}</p>
        <p className="text-xs text-muted-foreground">{subDescription}</p>
      </CardContent>
    </Card>
  );
}

export default DashboardCard;
