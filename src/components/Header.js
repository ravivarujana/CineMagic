import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="absolute flex justify-center py-6 px-10 bg-gradient-to-b from-black w-full h-24">
      <div className="flex justify-between w-9/12">
        <h1 className="text-white font-bold text-3xl">CINEMAGIC</h1>
        {user && (
          <div className="">
            <span className="font-bold text-white mr-4">
              {user.displayName}
            </span>
            <button
              onClick={handleSignOut}
              className="text-white bg-[#ff0000] px-4 py-2 rounded-lg cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
