import { auth } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <>
      <section className=" bg-red-300">
        <div className="flex justify-center py-10">
          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>
      <section className="">
        <div className="grid grid-cols-3 m-auto max-w-5xl">
          <div className="flex justify-center">
            <div className="flex flex-col justify-center">
              <Image
                src="/assets/icons/camera.png"
                alt="camera"
                width={100}
                height={100}
              />
              <p className="text-center">Create</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col justify-center">
              <Image
                src="/assets/icons/camera.png"
                alt="camera"
                width={100}
                height={100}
              />
              <p className="text-center">Watch</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col justify-center">
              <Image
                src="/assets/icons/camera.png"
                alt="camera"
                width={100}
                height={100}
              />
              <p className="text-center">Discuss</p>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-red-300">
        <div className="flex justify-center py-10">
          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
