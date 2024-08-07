import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //whenever the Header Component unmounts the unsubscribe event will be called, else
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute flex justify-center py-4 px-10 bg-gradient-to-b from-black w-full h-20 z-50 ">
      <div className="flex justify-between w-9/12 items-center">
        {/* <h1 className="text-[rgb(180,27,27)] font-bold text-4xl">CINEMAGIC</h1> */}
        <img className="h-44" src={`${process.env.PUBLIC_URL}/CINEMAGIC.png`} />
        {user && (
          <div className="">
            <span className="font-bold text-white mr-4">
              {user.displayName}
            </span>
            <button
              onClick={handleSignOut}
              className="text-white bg-[rgb(121,37,37)] px-4 py-2 rounded-lg cursor-pointer"
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
