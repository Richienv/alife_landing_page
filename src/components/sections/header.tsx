"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
import { IoMenuSharp } from "react-icons/io5";
import Image from "next/image";
import { BlueGradientSeparator } from "@/components/blue-gradient-separator";

export default function Header() {
  const [addBorder, setAddBorder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setAddBorder(true);
      } else {
        setAddBorder(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={
        "relative sticky top-0 z-50 py-4 bg-background/60 backdrop-blur w-full"
      }
    >
      <div className="flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-1"></div> {/* This empty div helps center the logo */}
        <Link
          href="/"
          title="brand-logo"
          className="flex items-center justify-center"
        >
          <Image src="/alife_logo.png" alt="Alife Logo" width={80} height={80} className="w-auto h-12" />
        </Link>
        <div className="flex-1 flex justify-end">
          <div className="lg:hidden">
            <Drawer>
              <DrawerTrigger>
                <IoMenuSharp className="text-3xl" />
              </DrawerTrigger>
              <DrawerContent>
                <div className="px-6 py-6">
                  <Link
                    href="/"
                    title="brand-logo"
                    className="relative flex items-center space-x-2 mb-6"
                  >
                    <Image src="/alife_logo.png" alt="Alife Logo" width={80} height={80} className="w-auto h-12" />
                  </Link>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
      <BlueGradientSeparator />
    </header>
  );
}
