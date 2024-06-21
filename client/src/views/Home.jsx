import { LoremIpsum } from "lorem-ipsum";
import bg from "src/assets/bg.png";
import logo from "src/assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { homeHeaderSignIn, homeNav } from "src/constant";
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 ">
      <header className="bg-white shadow-lg p-3 flex items-center justify-between">
        <div>
          <img src={logo} alt="logo" className="w-8 h-8" />
        </div>
        <div className="flex gap-3">
          {homeNav.map((item, index) => (
            <Link
              key={index}
              to={item.toPage}
              className="text-base font-semibold border-2 border-transparent hover:border-b-blue-800 border-red-300 px-2"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="items-center flex gap-4">
          {homeHeaderSignIn.map((item, index) => (
            <Link
              key={index}
              to={item.toPage}
              className="font-semibold py-2 px-3 rounded hover:shadow-lg hover:bg-blue-700 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center gap-4 bg-white mt-3">
        <h1 className="font-bold text-2xl font-mono mt-8">
          Shcool Management <span className="text-blue-700">System</span>
        </h1>
        <p className="w-10/12 text-center text-lg leading-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
          blanditiis dolorem sunt repellat a officia eligendi, ea facilis magni,
          excepturi sed eos voluptate doloremque temporibus aperiam eius nihil
          porro fugiat!
        </p>
        <img className="flex-1 " src={bg} alt="background" />
      </main>
    </div>
  );
};

export default Home;
