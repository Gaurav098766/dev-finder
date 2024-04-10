"use client";

import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogIn, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

function AccountDropdown() {
  const session = useSession();

  const isLoggedIn = !!session.data;
  console.log(isLoggedIn);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"}>
          <Avatar className="mr-2">
            <AvatarImage
              src={session.data?.user.image ?? ""}
              height="20px"
              width="20px"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {session.data?.user?.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {isLoggedIn ? (
          <DropdownMenuItem className="gap-2" onClick={() => signOut()}>
            <LogOut />
            Sign Out
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem className="gap-2" onClick={() => signIn()}>
            <LogIn />
            Sign In
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export const Header = () => {
  return (
    <header className="bg-gray-100 py-2 dark:bg-gray-900 container mx-auto">
      <div className="flex justify-between items-center">
        <Link
          className="flex gap-2 items-center text-xl hover:underline"
          href="/"
        >
          <Image src="/code_scout.png" alt="logo" width={40} height={40} />
          Code Scout
        </Link>
        <div className="flex items-center gap-4">
          <AccountDropdown />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
