import React from "react";

function AddContact() {
  return (
    <>
      <div className="pt-20 justify-between pl-28">
        <button className=" justify-center text-white font-serif font-semibold bg-green-500 border px-4 py-3 rounded-lg items-center">
          All contact
        </button>
      </div>
      <div className=" pt-12 flex flex-col mb-3 md:flex-row gap-4 w-full pl-24 pr-24 text-[#d0d2d6]">
        <div className="flex flex-col w-full gap-1">
          <label className="text-black font-semibold font-serif" htmlFor="name">Name</label>
          <input
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]" type="text"
            placeholder="Name"
            name="name"
            id="name"
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <label className="text-black font-semibold font-serif" htmlFor="brand">Email</label>
          <input
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]"
            type="text"
            placeholder="email"
            name="brand"
            id="brand"
          />
        </div>
      </div>
       <div className=" pt-12 flex flex-col mb-3 md:flex-row gap-4 w-full pl-24 pr-24 text-[#d0d2d6]">
        <div className="flex flex-col w-full gap-1">
          <label className="text-black font-semibold font-serif" htmlFor="name">Phone Number</label>
          <input
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]" type="text"
            placeholder="Phone Number"
            name="name"
            id="name"
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <label className="text-black font-semibold font-serif" htmlFor="brand">Address</label>
          <input
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]"
            type="text"
            placeholder="Address"
            name="brand"
            id="brand"
          />
        </div>
      </div>
      <div className=" pt-12 flex flex-col mb-3 md:flex-row gap-4 w-full pl-24 pr-24 text-[#d0d2d6]">
        <div className="flex flex-col w-full gap-1">
          <label className="text-black font-semibold font-serif" htmlFor="name">Image URL</label>
          <input
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]" type="text"
            placeholder="Phone Number"
            name="name"
            id="name"
          />
        </div>
       
      </div>
    </>
  );
}

export default AddContact;
