import { FiMenu } from "react-icons/fi";

const Nav = ({ setCurrentPage }) => {
  return (
    <nav className="w-full navbar bg-base-300">
      <div className="flex-1 px-2 mx-2 logo text-2xl text-white">
        <h1 onClick={() => setCurrentPage("")} className='cursor-pointer'>Luis Pineda</h1>
      </div>
      <div className="flex-none lg:hidden">
        <label
          htmlFor="my-drawer-4"
          className="btn btn-square btn-ghost text-white"
        >
          <FiMenu size={24} />
        </label>
      </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal text-white">
          <li>
            <a onClick={() => setCurrentPage("About")} href="#About">
              About
            </a>
          </li>
          <li>
            <a onClick={() => setCurrentPage("Work")} href="#Work">
              Work
            </a>
          </li>
          <li>
            <a onClick={() => setCurrentPage("Contact")} href="#Contact">
              Contact
            </a>
          </li>
          <li>
            <a>Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
