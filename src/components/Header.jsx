import React from 'react'


function Header() {
  return (
    <div className='container rounded-2xl p-5 border  border-slate-200 m-2  items-center justify-between mx-auto bg-yellow-50 flex '>
        <p className="text-4xl font-bold"><span className='text-orange-500'>I</span>TEK</p>
        <nav className='flex justify-center '>
          <div className='flex justify-center  align-center'>
          <ul className='flex justify-center mx-auto gap-10'>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
          </div>
        </nav>
          <div>
             <button type='button' className='bg-black text-white py-3 px-6 rounded-2xl hover:bg-orange-500'>Contact Us</button>
          </div>
    </div>
  )
}

export default Header