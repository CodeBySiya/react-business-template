import React from 'react'

function Footer() {
  return (
    <div className='bg-black text-white h-auto rounded-t-4xl p-6'>
      <div className='container mx-auto'>

        <div className='flex justify-between items-center'>
          <p className="text-2xl font-bold"><span className='text-orange-500'>I</span>TEK</p>
          <button className='text-white bg-slate-400 py-3 px-6 rounded-2xl hover:bg-orange-500'>Scroll Up </button>
        </div>
        <br />
        <hr />
      {/* grid box */}
      <div className='grid grid-cols-4 mx-auto py-5'>
        <div><p className='text-1xl text-slate-200 uppercase'>Resources</p>
         <ul className='capitalize py-5'>
          <li className='py-2 font-bold text-2xl'>Home</li>
          <li className='py-2 font-bold text-2xl'>about</li>
          <li className='py-2 font-bold text-2xl'>blog</li>
          <li className='py-2 font-bold text-2xl'>content</li>
         </ul>
        </div>
        <div><p className='text-1xl text-slate-200 uppercase'>Use cases</p>
         <ul className='capitalize py-5'>
          <li className='py-2 font-bold text-2xl'>Know Your Business</li>
          <li className='py-2 font-bold text-2xl'>TechSphere Solutions</li>
          <li className='py-2 font-bold text-2xl'>Know Your Customer</li>
          <li className='py-2 font-bold text-2xl'>Onboarding
</li>
         </ul>
        </div>
        <div><p className='text-1xl text-slate-200 uppercase'>Products</p>
         <ul className='capitalize py-5'>
          <li className='py-2 font-bold text-2xl'>Workflow</li>
          <li className='py-2 font-bold text-2xl'>Orchestration</li>
          <li className='py-2 font-bold text-2xl'>No-code onboarding</li>
          <li className='py-2 font-bold text-2xl'>Reports</li>
         </ul>
        </div>
        <div><p className='text-1xl text-slate-200 uppercase'>Developers</p>
         <ul className='capitalize py-5'>
          <li className='py-2 font-bold text-2xl'>Documentation</li>
          <li className='py-2 font-bold text-2xl'>API Reference</li>
          <li className='py-2 text-slate-50'>Language</li>
          <li className='py-2 font-bold text-3xl'></li>
         </ul>
        </div>
      </div>
      <hr/>
      {/* bottom */}
      <div className='flex justify-between my-4'>
        <p>© Itek 2025 | All Rights Reserved</p>
        <ul className='flex gap-4'>
          <li className='border-r-2 px-2'> Privacy </li>
          <li className='border-r-2 px-2'>Terms </li>
          <li className='border-r-2 px-2'>Sitemap</li>
          <li className='border-r-2 px-2'>Help</li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Footer