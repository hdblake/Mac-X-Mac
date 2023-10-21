import mainLogo from "../images/macxmac.png";

export default function Header() {
  return (
    <header>
      <div className="flex justify-center align-center items-center p-3">
        <a href="#home">
          <img src={mainLogo} alt="logo" width={200} height={200} />
        </a>
      </div>
      <div className="bg-main p-2 text-center">
        <span className="font-mainText font-bold text-secondary text-xl">
          Login
        </span>
        <span className="font-mainText font-bold text-accent text-xl"> | </span>
        <span className="font-mainText font-bold text-secondary text-xl">
          Signup
        </span>
      </div>
      <div className="bg-main">
        <nav>
          <ul className="absolute left-0 top-1/2">
            <li className="my-2 ml-4 text-main font-mainText font-bold text-2xl hover:underline hover:decoration-4 hover:decoration-accent hover:underline-offset-4">
              Products
            </li>
            <li className="my-2 ml-4 text-main font-mainText font-bold text-2xl hover:underline hover:decoration-4 hover:decoration-accent hover:underline-offset-4">
              About
            </li>
            <li className="my-2 ml-4 text-main font-mainText font-bold text-2xl hover:underline hover:decoration-4 hover:decoration-accent hover:underline-offset-4">
              Contact
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
