import React from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import { getMDXComponent } from 'next-contentlayer/hooks';

import {
  Card,
  CardButton,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

function PostCard(post: Post) {
  const Content = getMDXComponent(post.body.code);
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

export default PostCard;

// import Link from "next/link";
// import { compareDesc, format, parseISO } from "date-fns";
// import { allPosts, Post } from "contentlayer/generated";
// import { getMDXComponent } from "next-contentlayer/hooks";

// function PostCard(post: Post) {
//   const Content = getMDXComponent(post.body.code);

//   return (
//     <div className="mb-8">
//       <h2 className="text-xl">
//         <Link
//           href={post.url}
//           className="text-blue-700 hover:text-blue-900"
//           legacyBehavior>
//           {post.title}
//         </Link>
//       </h2>
//       <time dateTime={post.date} className="block mb-2 text-xs text-gray-600">
//         {format(parseISO(post.date), "LLLL d, yyyy")}
//       </time>
//       <div className="text-sm">
//         <Content />
//       </div>
//     </div>
//   );
// }

// export default function Home() {
//   const posts = allPosts.sort((a, b) =>
//     compareDesc(new Date(a.date), new Date(b.date))
//   );

//   return (
//     <div className="max-w-xl py-8 mx-auto">
//       <h1 className="mb-8 text-3xl font-bold text-center">Next.js Example</h1>

//       {posts.map((post, idx) => (
//         <PostCard key={idx} {...post} />
//       ))}
//     </div>
//   );
// }
