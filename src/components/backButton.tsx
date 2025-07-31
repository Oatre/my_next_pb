"use client";
import React, { useState } from "react";
import Image from "next/image";
import leftArrow from "@/assets/leftArrow.png";
import leftArrowHover from "@/assets/leftArrowHover.png";

export default function BackButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={() => window.history.back()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-teal-600 text-white px-1 py-1 rounded hover:bg-teal-500"
    >
      <Image alt="Back" src={isHovered ? leftArrowHover : leftArrow} />
    </button>
  );
}
