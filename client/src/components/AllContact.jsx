import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
function AllContact() {
  return (
    <>
      <div className="pt-20 justify-between pl-28 bt-15">
        <button className="text-white font-serif font-semibold bg-green-500 border px-4 py-3 rounded-lg items-center">
          All contact
        </button>
      </div>
      <div className="flex flex-wrap justify-center pt-12">
        <table className="border-collapse border border-slate-500">
          <thead className="px-10 py-6 items-center">
            <tr className="uppercase">
              <th className="border border-slate-600 h-9 w-36">Name</th>
              <th className="border border-slate-600  h-9 w-36">Email</th>
              <th className="border border-slate-600  h-9 w-36">Phone</th>
              <th className="border border-slate-600  h-9 w-36">Address</th>
              <th className="border border-slate-600  h-9 w-36">Image</th>
              <th className="border border-slate-600  h-9 w-36">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-600">Md Ibrahim</td>
              <td className="border border-slate-600">
                ibrahim.soft.dev23@gmail.com
              </td>
              <td className="border border-slate-600">01315974775</td>
              <td className="border border-slate-600">Mirpur-1/Dhaka-1216</td>
              <td className="border border-slate-600">...........</td>
              <td className="border border-slate-600">
                <ul className="flex justify-center gap-10">
                  <li className="px-2 py-2 bg-green-500 rounded-md">
                    <FaEdit />
                  </li>
                  <li className="px-2 py-2 bg-red-500 rounded-md">
                    <MdDelete />
                  </li>
                </ul>
              </td>
            </tr>
             <tr>
              <td className="border border-slate-600">Md Ibrahim</td>
              <td className="border border-slate-600">
                ibrahim.soft.dev23@gmail.com
              </td>
              <td className="border border-slate-600">01315974775</td>
              <td className="border border-slate-600">Mirpur-1/Dhaka-1216</td>
              <td className="border border-slate-600">...........</td>
              <td className="border border-slate-600">
                <ul className="flex justify-center gap-10">
                  <li className="px-2 py-2 bg-green-500 rounded-md">
                    <FaEdit />
                  </li>
                  <li className="px-2 py-2 bg-red-500 rounded-md">
                    <MdDelete />
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AllContact;
