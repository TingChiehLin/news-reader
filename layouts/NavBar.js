import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 px-10 md:px-20 border-b-2">
      <div className="flex items-center">
        <Link href={"/"}>
          <a>
            <Image
              src="/logo.png"
              width={"56"}
              height={"56"}
              className="cursor-pointer"
            />
          </a>
        </Link>
      </div>
      <nav>
        <ul className="flex justify-center items-center gap-8 font-bold text-base md:text-lg">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Article</li>
          <li className="cursor-pointer">About</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
