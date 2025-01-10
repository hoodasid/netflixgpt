import React, { useEffect } from "react";
import { auth } from "../utils/FireBase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, Supported_Lang } from "../utils/Constants";
import { toggleGptSearchView } from "../utils/GptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const HandleGPTSearchComp = () => {
    dispatch(toggleGptSearchView());
  };

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        // ...
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribes when component unmounts
    return () => unsubscribe();
  }, [user]);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between z-10">
      <img className="w-44 " src={LOGO} alt="logo" />
      {user?.photoURL && (
        <div className="flex p-2">
          { showGptSearch ? <select
            className="p-2 bg-gray-900 text-white m-2"
            onChange={handleLanguageChange}
          >
            {Supported_Lang.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select> : <></>}
          <button
            className="py-2 px-4 m-2 bg-white rounded-lg mx-4"
            onClick={HandleGPTSearchComp}
          >
            {!showGptSearch ?  "GPT Search" : "Homepage"}
          </button>
          <img className="w-12 h-12" src={user.photoURL} alt="usericon" />
          <button className="font-bold text-white " onClick={handleSignout}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
