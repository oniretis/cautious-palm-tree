import Image from "next/image";
import profilePic from "../public/me.png";

const NavItem = (props) => (
  <li className="font-pop cursor-pointer">{props.text}</li>
);

function NavBar() {
  return (
    <div>
      <header>
        <nav className="container flex items-center py-4 px-4 sm:mt-12">
          <div className="py-1">
            <div className="inline-block h-12 w-12 rounded-full ring-2 ring-white">
              <Image src={profilePic} alt="Picture of the author" priority />
            </div>
          </div>
          <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-blue-900 uppercase text-xs">
            <NavItem text="features" />
            <NavItem text="pricing" />
            <NavItem text="contact" />
            <button
              type="button"
              className=" text-white rounded-md px-7 py-3 cursor-pointer uppercase transition ease-in-out delay-150 bg-red-500 hover:-translate-y-1 hover:scale-110 hover:bg-red-900 duration-300"
            >
              login
            </button>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
