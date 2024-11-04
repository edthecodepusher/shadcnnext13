import React from "react"
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
        </div>
      </div>
    </div>
  )
}
export default Main
