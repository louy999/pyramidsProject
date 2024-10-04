import BarsNav from "./BarsNav";
import LoginNav from "./LoginNav";

const Navbar = () => {
  return (
    <div
      className={`w-full md:w-fit relative  flex justify-center items-center md:top-10 left-2/4 -translate-x-2/4 gap-5 md:gap-10 shadow-md md:rounded-md bg-opacity-20 bg-white p-4 md:px-6`}
    >
      <div>
        <BarsNav />
      </div>
      <LoginNav />
    </div>
  );
};

export default Navbar;
