import React from "react"
import Image from "next/image"

function Header() {
  return (
    <>
      <div className="relative -z-10 h-60 w-full">
        <img
          className="absolute size-full object-cover opacity-40 blur-sm"
          src="/images/background.png"
          alt="Background"
        />
      </div>
      <div className="relative -top-10 z-10 flex w-full justify-center">
        <div className="absolute rounded-full bg-[#111111] p-1">
          <img
            className="size-20 rounded-full object-cover"
            src="/images/avatar1.jpg"
            alt="Avatar"
          />
        </div>
      </div>
    </>
  )
}

export default Header
