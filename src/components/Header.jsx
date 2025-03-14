import Navigation from "./Navigation";

function Header() {
  return (
    <header
      className={`w-full h-screen bg-homepage  bg-cover bg-center flex flex-col justify-start items-center`}
    >
      <Navigation />
      <main className="w-4/5 h-[90vh] text-white flex flex-col  justify-center items-center lg:items-start">
        <h1 className="font-primary md:text-3xl lg:text-5xl  text-2xl text-center lg:text-start leading-relaxed lg:leading-normal">
          Your Fitness Journey, <br />
          Upgraded
        </h1>
        <p className="text-center lg:text-start font-light font-secondary text-sm my-6 max-w-sm">
          Premium accessories that push your performance to the next level.
        </p>
        <button className="font-primary bg-primary px-6 py-3 text-xs rounded-md">
          UPGRADE YOUR GEAR TODAY
        </button>
      </main>
    </header>
  );
}

export default Header;
