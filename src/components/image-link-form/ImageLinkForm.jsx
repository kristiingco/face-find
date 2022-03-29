import React from "react";

const ImageLinkForm = () => {
  return (
    <div className="flex flex-col items-center m-10 space-y-10 w-full">
      <p className="text-xl text-center font-normal w-3/5">
        FaceFind can detect faces in pictures. Give it a try!
      </p>
      <div className="bg-white w-5/5 p-10 rounded-lg drop-shadow-lg">
        <input
          className="p-3 border border-slate-300 border-r-0 w-6/7 rounded-l-lg"
          type="text"
        />
        <button className="bg-french-violet text-white p-3 font-semibold w-1/7 rounded-r-lg">
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
