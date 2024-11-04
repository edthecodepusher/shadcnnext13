import React from "react"
import Link from "next/link"
import { FaGlobeAmericas, FaPhoneAlt } from "react-icons/fa"
import { PiGlobeSimpleThin, PiPhoneLight } from "react-icons/pi"
import { RiVerifiedBadgeFill } from "react-icons/ri"

export function Main() {
  return (
    <div className="h-screen bg-[#111111] p-3">
      <div className="mx-auto max-w-lg bg-[#111111] pt-14">
        <div>
          <div className="text-center">
            <h3 className="flex items-center justify-center gap-x-2 text-2xl text-white">
              edndacomputer
              <RiVerifiedBadgeFill className="text-2xl text-[#26A7DE]" />
            </h3>
          </div>

          <div className="font-Interegular mt-3 flex items-center justify-center gap-x-2 text-neutral-500">
            <p>Est. 1985</p>
            <span className="size-[3px] rounded-full  bg-neutral-600" />
            <p>Ventura, California</p>
            <span className="size-[3px] rounded-full  bg-neutral-600" />
            <p>He/Him</p>
          </div>
        </div>

        <div>
          <p className="font-Intermedium my-3 text-center text-neutral-500">
            edndacomputer is a technology junky from the West Coast of the
            United States of America.
          </p>
          <div className="flex justify-center gap-x-7">
            <Link
              href={"https://github.com/edthecodepusher/"}
              className="flex items-center gap-x-2 rounded-xl p-1 px-2 transition-all duration-100 ease-in hover:bg-neutral-900"
            >
              <FaGlobeAmericas className=" text-xl text-neutral-500" />
              <p className="font-Intermedium text-white">edndacomputer.xyz</p>
            </Link>

            <div className=" flex cursor-pointer  items-center  gap-x-2 rounded-xl p-1 px-2 transition-all duration-100 ease-in hover:bg-neutral-900">
              <FaPhoneAlt className=" text-xl text-neutral-500" />
              <p className="font-Intermedium text-white"> 805-444-4444</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Main
