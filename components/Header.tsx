import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <>
      <div className="relative -z-10 h-60 w-full">
        <Image
          className="absolute size-full object-cover opacity-40 blur-sm"
          src="/images/background.png"
          alt="Background"
          layout="fill" // This makes the image take up the full size of its parent
          objectFit="cover" // Ensures the image covers the area without stretching
        />
      </div>
      <div className="relative -top-10 z-10 flex w-full justify-center">
        <div className="absolute rounded-full bg-[#111111] p-1">
          <Image
            className="size-20 rounded-full object-cover"
            src="/images/avatar1.jpg"
            alt="Avatar"
            width={80} // Set a fixed width for the avatar image
            height={80} // Set a fixed height for the avatar image
          />
        </div>
      </div>
    </>
  );
}

export default Header;
