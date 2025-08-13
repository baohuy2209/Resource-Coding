import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="w-full flex justify-center items-center">
      <div>
        <h1 className="text-3xl text-red-500 lg:text-5xl font-bold text-center">
          Next.js Streaming
        </h1>
      </div>
      <Link href="/streaming-demo" prefetch={false}>
        <Button size="lg" className="cursor">
          Streaming Demo
        </Button>
      </Link>
    </div>
  );
}
