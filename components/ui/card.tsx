import * as React from 'react';
import Link from 'next/link';
import { allPosts, Post } from 'contentlayer/generated'; // Assuming Post is a type you want to use
import { compareDesc, format, parseISO } from 'date-fns';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { PiArrowSquareOutThin } from 'react-icons/pi';

import { cn } from '@/lib/utils'; // Assuming you have a utility function `cn` for conditional classNames

// Card component
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  post: Post; // Define the type of 'post' prop here
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, post, ...props }, ref) => (
    <Link href={post.url}>
      {' '}
      {/* Use 'post.url' here */}
      <div
        ref={ref}
        className={cn(
          'mt-8 flex justify-between gap-x-6 rounded-xl bg-[#161616] p-3',
          className
        )}
        {...props}
      />
    </Link>
  )
);
Card.displayName = 'Card';

// CardHeader component
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'font-Interegular hidden text-sm text-neutral-500 md:block',
      className
    )}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

// CardTitle component
const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

// CardDescription component
const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

// CardContent component
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'font-Interegular hidden text-sm text-neutral-500 md:block',
      className
    )}
    {...props}
  />
));
CardContent.displayName = 'CardContent';

// CardFooter component
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'font-Interegular mt-3 hidden h-7 w-fit items-center justify-center rounded-md border border-neutral-800 px-2 text-xs uppercase text-white md:flex',
      className
    )}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

// CardButton component (new component to handle button inside the card)
const CardButton = ({
  href,
  text = 'View',
}: {
  href: string;
  text?: string;
}) => (
  <Link href={href} passHref>
    <button className="flex h-fit items-center gap-x-2 rounded-lg bg-neutral-800 p-2 text-white">
      <span className="font-Intermedium hidden text-xs md:block">{text}</span>
      <PiArrowSquareOutThin />
    </button>
  </Link>
);

// Exporting everything
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardButton, // Export CardButton to be used externally
};
