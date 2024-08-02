const Header = () => {
  return (
    <div className="absolute flex justify-center py-6 px-10 bg-gradient-to-b from-black w-full h-24">
      <div className="flex justify-between w-9/12">
        <h1 className="text-white font-bold text-3xl">CINEMAGIC</h1>
        <div>
          <button className="text-white bg-[#ff0000] px-4 py-2 rounded-lg">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
