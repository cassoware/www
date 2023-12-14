import Demo from "@/components/demo";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-center p-4">
      <div className="mb-8">
        <Image
          alt="Logo"
          className="rounded-full"
          height="100"
          src="/logo.png"
          width="100"
        />
      </div>
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
        Welcome to Cassoware!
      </h1>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
        Our website is currently under development. Please check back later.
      </p>
      <div className="mt-8">
        <Button variant="outline">Notify Me</Button>
      </div>
      <Demo />
    </section>
  );
}
