/* eslint-disable @next/next/no-img-element */
import React from "react"
import Image from "next/image"
import { PiArrowSquareOutThin } from "react-icons/pi"

export function Card() {
  return (
    <div className=" mt-8 flex justify-between gap-x-6 rounded-xl bg-[#161616] p-3 ">
      <Image
        width={800}
        height={800}
        className="h-9 w-10 rounded-lg object-cover"
        src="/images/avatar1.jpg"
        alt=""
      />
      <div className="flex-1  ">
        <h4 className="font-Interegular text-center text-lg text-white md:text-left">
          Ultra
        </h4>
        <p className="font-Interegular hidden text-sm text-neutral-500 md:block">
          A high quality Framer portfolio template <br /> designed for
          creatives.
        </p>

        <div className="font-Interegular mt-3 hidden h-7 w-fit items-center justify-center rounded-md border border-neutral-800 px-2 text-xs uppercase text-white md:flex">
          Store
        </div>
      </div>

      <button className="flex h-fit items-center gap-x-2 rounded-lg bg-neutral-800 p-2 text-white">
        <span className="font-Intermedium hidden text-xs md:block ">View</span>
        <PiArrowSquareOutThin />
      </button>
    </div>
  )
}
export default Card
