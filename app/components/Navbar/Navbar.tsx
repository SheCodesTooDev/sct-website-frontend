import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-20 top-0 flex justify-between items-center px-4">
      <div>
        <img src="/images/sct-logo.png" alt="Logo" className="h-20 w-auto" />
      </div>
      <ul className="flex gap-x-6 text-black">
        <li>
          <Link href="/">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href="/courses">
            <p>Courses</p>
          </Link>
        </li>
        <li>
          <Link href="/success-stories">
            <p>Success Stories</p>
          </Link>
        </li>
        <li>
          <Link href="/contacts">
            <p>Contacts</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
