import Image from "next/image";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 px-20 border-b-2">
      <div className="flex items-center">
        <Image
          src="/logo.png"
          width={"56"}
          height={"56"}
          className="cursor-pointer"
        />
      </div>
      <nav>
        <ul className="flex justify-center items-center gap-8 font-bold ">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Article</li>
          <li className="cursor-pointer">About</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
