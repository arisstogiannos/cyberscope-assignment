"use client";

import Image from "next/image";

export default function BackButton() {
  return (
    <button
      className="mb-2 cursor-pointer hover:bg-white/10 transition-colors -translate-y-3 px-3 py-2 bg-white/5 w-fit rounded-lg flex gap-2"
      onClick={() => history.back()}
    >
      <Image src={"/arrow.svg"} width={13} height={10} alt="arrow" /> Go Back
    </button>
  );
}
