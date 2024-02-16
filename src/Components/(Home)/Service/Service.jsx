import React from "react";
import { TbSchoolOff } from "react-icons/tb";
import { CiTrophy, CiMedal } from "react-icons/ci";
import "./style.css";
import {
  IoBookOutline,
  IoPersonAddOutline,
  IoLibraryOutline,
} from "react-icons/io5";
import { GiTakeMyMoney, GiExplosiveMaterials } from "react-icons/gi";
import { BsJournalMedical } from "react-icons/bs";

const Service = () => {
  return (
    <div className="service">
      <div>
        <div className="card gap-6 p-8 ">
          <div>
            <h2 className="text-3xl font-bold">
              <span className="text-[#354895]">SoftMax Learning Program</span>{" "}
              <br />
              <span className="text-[#C0187E]">
                is now whole study solution.
              </span>
            </h2>
            <div className="gap-6 my-6 card">
              <button className="btn bg-[#ED49A7] hover:bg-white w-[300px]">
                <TbSchoolOff className="text-2xl text-slate-800" /> Apply For
                Scholarship
              </button>
              <button className="btn bg-white hover:bg-[#ED49A7] w-[300px]">
                <CiTrophy className="text-2xl text-slate-800" /> Join With The
                Contest
              </button>
            </div>
          </div>
          <div>
            <iframe
              src="https://lottie.host/embed/8beaefc5-18f8-4299-bbb3-ec485dcb13f4/bxcglYwRQC.json"
              width={400}
              height={400}
            ></iframe>
          </div>
        </div>
        <div className="grid my-4  popularService max-w-[1200px] border-2 border-blue-900 grid-cols-4 gap-6 mx-auto bg-white p-8 rounded-lg ">
          <div className="flex justify-center items-center gap-4">
            <IoBookOutline className="text-[#FF6E76] font-bold text-xl" />
            <h2 className="text-[#FF6E76] font-bold text-xl">Contest</h2>
          </div>
          <div className="flex justify-center items-center gap-4">
            <TbSchoolOff className="text-[#3DAFFD] font-bold text-xl" />
            <h2 className="text-[#3DAFFD] font-bold text-xl">Model Test</h2>
          </div>
          <div className="flex justify-center items-center gap-4">
            <GiTakeMyMoney className="text-[#0BB4A2] font-bold text-xl" />
            <h2 className="text-[#0BB4A2] font-bold text-xl">Stipend</h2>
          </div>
          <div className="flex justify-center items-center gap-4">
            <CiMedal className="text-[#EBAB21] font-bold text-xl" />
            <h2 className="text-[#EBAB21] font-bold text-xl">Scholarship</h2>
          </div>
          <div className="flex justify-center items-center gap-4">
            <GiExplosiveMaterials className="text-[#505AC9] font-bold text-xl" />
            <h2 className="text-[#505AC9] font-bold text-xl">
              Learning Material
            </h2>
          </div>
          <div className="flex justify-center items-center gap-4">
            <BsJournalMedical className="text-[#505AC9] font-bold text-xl" />
            <h2 className="text-[#505AC9] font-bold text-xl">Journal</h2>
          </div>
          <div className="flex justify-center items-center gap-4">
            <IoPersonAddOutline className="text-[#505AC9] font-bold text-xl" />
            <h2 className="text-[#505AC9] font-bold text-xl">Tutor Finding</h2>
          </div>
          <div className="flex justify-center items-center gap-4">
            <IoLibraryOutline className="text-[#505AC9] font-bold text-xl" />
            <h2 className="text-[#505AC9] font-bold text-xl">Library</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
