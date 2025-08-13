import { Card, CardContent, CardHeader } from "@/components/ui/card";
import IconComponent from "./icon-component";
import LikeButton from "./like-button";
export default function IconCard({ tool }) {
  return (
    <Card className="w-full hover:cursor-pointer hover:shadow-md transition-all duration-200">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="text-lg font-medium h-[28px] w-24">{tool}</div>
        <LikeButton />
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center py-6">
        <IconComponent id={tool} />
      </CardContent>
    </Card>
  );
}
