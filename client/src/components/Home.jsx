import { LoremIpsum } from "lorem-ipsum";
import bg from "src/assets/bg.png";
import logo from "src/assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col  bg-blue-300 ">
      <header className="bg-blue-400 p-3 flex items-center justify-between">
        <div>
          <img src={logo} alt="logo" className="w-8 h-8" />
        </div>
        <div className="text-lg font-semibold flex gap-3">
          <Link className="hover:scale-110" to="about">
            About Us
          </Link>
          <Link className="hover:scale-110" to="product">
            Product
          </Link>
          <Link className="hover:scale-110" to="contact">
            Contact Us
          </Link>
        </div>
        <div className="items-center">
          <Link
            to="/choose_user"
            className="py-2 px-3 hover:bg-orange-500 text-white "
          >
            Sign In
          </Link>
          <Link
            to="/choose_user"
            className="py-2 px-3 hover:bg-orange-500 text-white "
          >
            Guest Mode
          </Link>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center gap-4">
        <h1 className="text-white font-bold text-lg mt-8">
          Shcool Management System
        </h1>
        <p className="w-10/12 text-center text-white text-lg">
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
