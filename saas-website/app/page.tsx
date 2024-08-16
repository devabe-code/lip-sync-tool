import { Button } from '@nextui-org/react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-primary text-accent">
      <h1 className="text-4xl font-bold">Welcome to SaaS Service</h1>
      <p className="mt-4 text-lg">Your solution for modern software needs.</p>
      <Button color="primary" variant="solid" className="mt-8">
        Get Started
      </Button>
    </div>
  );
}
