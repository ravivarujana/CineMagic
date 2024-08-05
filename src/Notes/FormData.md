# Getting form data using useState hook

```js
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const handleUserInfo = (e) => {
    const { name, value } = e.target;

    console.log(name);
    console.log(value);
    // setUserInfo();

    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log("USERinfo", userInfo);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative">
      <Header />
      <div>
        <img
          className="h-[100vh] w-full object-cover"
          src={`${process.env.PUBLIC_URL}/img-3.jpg`}
          alt="img-3"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center ">
        <form
          className="p-10 flex flex-col justify-center bg-[#000000cc] text-white h-[34rem] w-[24rem] rounded-lg"
          method=""
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl font-bold my-4">Sign In</h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="my-3 p-3 bg-[#3b3b3ba4] placeholder-zinc-400  border rounded-sm"
            />
          )}

          <input
            name="email"
            value={userInfo.email}
            type="text"
            placeholder="Email or phone number"
            className="my-3 p-3 bg-[#3b3b3ba4] placeholder-zinc-400  border rounded-sm"
            onChange={handleUserInfo}
          />
          <input
            name="password"
            value={userInfo.password}
            type="password"
            placeholder="Enter password"
            className="my-3 p-3 bg-[#3b3b3ba4]  placeholder-zinc-400 border rounded-sm"
            onChange={handleUserInfo}
          />
          <button className="bg-red-800 p-2 rounded-lg my-6 opacity-100">
            SignIn
          </button>

          <span className="font-medium">
            {isSignInForm ? "New to Cinemagic? " : "Already a member? "}
            <span
              className="hover:text-red-900 text-[1.2rem] cursor-pointer"
              onClick={toggleForm}
            >
              {isSignInForm ? "Sign up now" : "Sign In now "}
            </span>
          </span>
        </form>
      </div>
    </div>
  );
};
```
