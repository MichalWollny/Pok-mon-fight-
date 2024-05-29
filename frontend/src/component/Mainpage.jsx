import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const Mainpage = () => {
  return (
    <div>
      {/* navbar */}
      <div className=" flex flex-row items-center justify-center mt-20 h-full">
        <ul className="my-2 flex flex-row gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 bg-[#d7423b] px-20 ">
          <Link to={`/`}>
            {" "}
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-medium text-2xl"
            >
              <a
                href="#"
                className="flex items-center mr-6 hover:text-blue-500 transition-colors"
              >
                Home
              </a>
            </Typography>
          </Link>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium text-2xl"
          >
            <a
              href="#"
              className="flex items-center mr-6 hover:text-blue-500 transition-colors"
            >
              Leaderboard
            </a>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium text-2xl"
          >
            <a
              href="#"
              className="flex items-center hover:text-blue-500 transition-colors"
            >
              instruction
            </a>
          </Typography>
        </ul>
      </div>

      {/*main*/}
      <section className=" flex flex-row justify-evenly flex-wrap">
        <div className=" flex flex-col items-center mt-8">
          <Card />
          <img
            src="./src/assets/pokeball.webp"
            className=" h-[20rem] w-[17rem] mt-9"
          />
        </div>
        <div className=" mt-80">
          {" "}
          <button>
            <img
              src="./src/assets/Schwert.webp"
              className=" h-[20rem] w-[17rem] mt-9"
            />
          </button>{" "}
        </div>

        <div className="flex flex-col items-center mt-8">
          <Card />
          <img
            src="./src/assets/pokeball.webp"
            className=" h-[20rem] w-[17rem] mt-9"
          />
        </div>
      </section>
    </div>
  );
};

export default Mainpage;
