import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardButton } from "@/components/ui/card"; // Import the new CardButton

export function InfoCard() {
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
          Ultra
        </h4>
        <CardContent>
          A high quality Framer portfolio template <br /> designed for creatives.
        </CardContent>

        <CardFooter>
          Store
        </CardFooter>
      </div>
      <CardButton href="/store" text="View" />
    </Card>
  );
}

export default InfoCard;
