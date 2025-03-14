import Navigation from "./Navigation";

function ProductHeader() {
  return (
    <header
      className={`w-full h-[80vh] bg-product  bg-cover bg-center flex flex-col justify-start items-center`}
    >
      <Navigation />
      <main className="w-4/5 h-[80%] text-white flex flex-col  justify-center items-center">
        <h1 className="font-primary md:text-3xl lg:text-5xl  text-2xl text-center  leading-relaxed lg:leading-normal">
          Products
        </h1>
        <p className="text-center  font-light font-secondary text-sm my-6 max-w-sm">
          Premium accessories that push your performance to the next level.
        </p>
      </main>
    </header>
  );
}

export default ProductHeader;
