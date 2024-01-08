import React from 'react'

function AllContact() {
  return (
    <>
   <div className='pt-20 justify-between pl-28'>
        <button className=' justify-center text-white font-serif font-semibold bg-green-500 border px-4 py-3 rounded-lg items-center'>All contact</button>
      </div>
      <div className='pt-15 flex flex-wrap justify-center'>
        <table className='border-collapse border border-slate-500'>
          <thead className='px-10 py-6 items-center'>
            <tr className>
              <th className='border border-slate-600'>Name</th>
              <th className='border border-slate-600'>Email</th>
              <th className='border border-slate-600'>Phone</th>
              <th className='border border-slate-600'>Address</th>
              <th className='border border-slate-600'>Image</th>
              <th className='border border-slate-600'>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-slate-600'>Md Ibrahim</td>
              <td className='border border-slate-600'>ibrahim.soft.dev23@gmail.com</td>
                <td className='border border-slate-600'>01315974775</td>
              <td className='border border-slate-600'>Mirpur-1/Dhaka-1216</td>
              <td className='border border-slate-600'>...........</td>
              <td className='border border-slate-600'> Delete  update</td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AllContact
