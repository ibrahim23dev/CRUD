import React from "react";
import {BsImage} from 'react-icons/bs'
function AddContact() {
  return (
    <>
      <div className="pt-10 justify-between pl-24">
        <button className=" justify-center text-white font-serif font-semibold bg-green-500 border px-4 py-3 rounded-lg items-center">
          Add Contact
        </button>
      </div>
      <div className=" pt-4 flex flex-col mb-3 md:flex-row gap-4 w-full pl-24 pr-24 text-[#d0d2d6]">
        <div className="flex flex-col w-full gap-1">
          <label className="text-black font-semibold font-serif" htmlFor="name">
            Name
          </label>
          <input
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]"
            type="text"
            placeholder="Name"
            name="name"
            id="name"
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <label
            className="text-black font-semibold font-serif"
            htmlFor="brand"
          >
            Email
          </label>
          <input
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]"
            type="text"
            placeholder="email"
            name="brand"
            id="brand"
          />
        </div>
      </div>
      <div className=" pt-4 flex flex-col mb-3 md:flex-row gap-4 w-full pl-24 pr-24 text-[#d0d2d6]">
        <div className="flex flex-col w-full gap-1">
          <label className="text-black font-semibold font-serif" htmlFor="name">
            Phone Number
          </label>
          <input
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]"
            type="text"
            placeholder="Phone Number"
            name="name"
            id="name"
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <label
            className="text-black font-semibold font-serif"
            htmlFor="brand"
          >
            Address
          </label>
          <input
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]"
            type="text"
            placeholder="Address"
            name="brand"
            id="brand"
          />
        </div>
      </div>
       
      <div className="pt-4 flex flex-col mb-3 md:flex-row gap-4  pl-24 pr-24 text-[#18181a]">
        
        <div className="justify-center">
          <label
            className="bg-[#d0d2d6] flex justify-center items-center flex-col h-[150px] cursor-pointer border border-dashed hover:border-indigo-500 w-[150px] border-[#18181a]"
            htmlFor="image"
          >
              <>
                <span>
                  <BsImage />
                </span>
                <span>select Image</span>
              </>
          
          </label>
        </div>
        <input
          className="hidden"
          type="file"
          name="image"
          id="image"
          required
        />
      
      </div>
        <div className="mt-4 items-end pl-24">
          <button className="bg-blue-500 w-[150px] hover:shadow-blue-500/20 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3 justify-center">
           Submit
       </button>
        </div>
       
    </>
  );
}

export default AddContact;
