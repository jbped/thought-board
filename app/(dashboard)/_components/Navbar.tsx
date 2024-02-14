"use client";

import {  UserButton } from "@clerk/nextjs"

export default function Navbar() {
  return (
    <div className="flex items-center gap-x-4 p-5 bg-secondary">
      <div className="hidden lg:flex lg:flex-1">
        {/* Add search input */}
      </div>
      <UserButton />
    </div>
  )
}
