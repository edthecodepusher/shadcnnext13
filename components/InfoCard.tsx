import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';

import {
  Card,
  CardButton,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function InfoCard(post: Post) {
  return (
    <Card>
      <Image
        width={800}
        height={800}
        className="h-9 w-10 rounded-lg object-cover"
        src="/images/avatar1.jpg"
        alt="Avatar"
      />
      <div className="flex-1">
        <h4 className="font-Interegular text-center text-lg text-white md:text-left">
          {post.title}
        </h4>
        <CardContent>
          A high quality Framer portfolio template <br /> designed for
          creatives.
        </CardContent>

 {/* <CardFooter>{format(parseISO(post.date), 'LLLL d, yyyy')}</CardFooter> */}
      </div>
      <CardButton href="/store" text="View" />
    </Card>
  );
}

export default InfoCard;
