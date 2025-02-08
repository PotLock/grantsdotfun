import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import type { NextPage } from 'next'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 Not Found | Grants.fun',
  description: 'The page you are looking for does not exist',
}

const NotFound: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md">
          Sorry, we couldn't find the page you're looking for. Please check the URL or return to the homepage.
        </p>
        <a href="/">
          <Button variant="default" className="mt-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </a>
      </div>
    </div>
  );
} 

export default NotFound;