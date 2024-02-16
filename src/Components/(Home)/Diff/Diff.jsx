import React from "react";

const Diff = () => {
  return (
    <div>
      <div className="diff rounded-lg service aspect-[16/9] max-w-[1200px] p-12 ml-8 mx-auto">
        <div className="diff-item-1">
          <div className="bg-[#1A213A] text-primary-content text-9xl font-black grid place-content-center md:flex justify-center items-center sm:flex-col">
            <iframe
              src="https://lottie.host/embed/002ff632-7e28-4777-abe1-fbf722c2120d/jVa9KvW6Df.json"
              width={400}
              height={400}
            ></iframe>
            <h2 className="text-2xl navbarText">Eager To Learn</h2>
          </div>
        </div>
        <div className="diff-item-2">
          <div className="bg-accent text-9xl font-black grid place-content-center md:flex justify-center items-center sm:flex-col">
            <iframe
              src="https://lottie.host/embed/7c388259-c107-42e8-b6e4-4fe5e64f4121/TfOCGgxoMN.json"
              width={400}
              height={400}
            ></iframe>
            <h2 className="text-2xl navbarText">Explore Technology</h2>
          </div>
        </div>
        <div className="diff-resizer"></div>
      </div>
    </div>
  );
};

export default Diff;
