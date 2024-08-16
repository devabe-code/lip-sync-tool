import Link from 'next/link';
import { Button } from '@nextui-org/react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-primary to-secondary text-white">
      <section className="flex flex-col items-center text-center space-y-6 py-20 px-4">
        <h1 className="text-5xl font-bold leading-tight">
          Welcome to Your Ultimate <span className="text-orange-400">Animation Tool</span>
        </h1>
        <p className="text-lg max-w-2xl">
          Automate your Lipsync animation instantly! Try it out with pre-recorded audio or make a quick soundbyte using our browser tool.
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <Link href="/try_now">
            <Button
              className='bg-orange-400 text-white rounded-xl hover:scale-105 transform transition'>
              Try It Now
            </Button>
          </Link>
          <Link href="/about">
            <Button color='primary' className='rounded-xl hover:scale-105 transform transition'>
              Learn More
            </Button>
          </Link>
          <Link href="/pricing">
            <Button color='secondary' className='rounded-xl hover:scale-105 transform transition'>
              See Pricing
            </Button>
          </Link>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center py-20 bg-white text-secondary w-full text-center">
        <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
        <div className="flex items-center gap-10 max-w-4xl">
          <div className="p-6 border rounded-lg shadow-lg max-w-xs">
            <h3 className="text-2xl font-bold mb-2">Feature One</h3>
            <p>Brief description of the feature. How does it help the user? Why is it beneficial?</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg max-w-xs">
            <h3 className="text-2xl font-bold mb-2">Feature Two</h3>
            <p>Brief description of the feature. How does it help the user? Why is it beneficial?</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg max-w-xs">
            <h3 className="text-2xl font-bold mb-2">Feature Three</h3>
            <p>Brief description of the feature. How does it help the user? Why is it beneficial?</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-accent to-primary text-white w-full text-center">
        <h2 className="text-4xl font-bold mb-6">Get Started with Ease</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Signing up is quick and easy. Start your journey towards better productivity and growth today!
        </p>
        <Link href="/try_now">
        <Button radius="full" className="bg-gradient-to-tr rounded-xl from-pink-500 to-yellow-500 text-white shadow-lg">
          Try It Now!
        </Button>
        </Link>
      </section>
    </div>
  );
}
