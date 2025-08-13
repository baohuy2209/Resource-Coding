import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
const CardSkeleton = () => {
  return (
    <Card className="w-full hover:cursor-pointer hover:shadow-md transition-all duration-200">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <Skeleton className="h-[28px] w-24" />
        <Skeleton className="h-10 w-10 rounded-full" />
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center py-6">
        <Skeleton className="h-24 w-24 rounded-md mb-4" />
      </CardContent>
    </Card>
  );
};
export default CardSkeleton;
