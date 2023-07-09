import logo from './logo.svg';
import './App.css';
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { useState } from 'react';
function App() {
  const[darkMode,setDarkMode]=useState(false);
  const handelCheckChange = (e) => {
    console.log(e.target.checked);

    setDarkMode(e.target.checked);
  };
  return (
    <div className={darkMode && 'dark'}>
    <div className='text-slate-400
    dark:text-slate-200
     dark:bg-darkbg-dark'>
      {/* header */}
      <div className='bg-bg pb-40 dark:bg-darkbg'>
        <div className='container py-9 flex 
           justify-between
          items-center'>
             <div>
              <h1 className='text-slate-800  dark:text-white
              font-bold
              text-3xl'>Social Media Dashboard</h1>
              <span className='text-sm'>Total Followers : 15.7589</span>
             </div>
             <div>
              <label className='mr-2' htmlFor='checkbox'>Dark Mode</label>
              <span>
                <input id='checkbox' type='checkbox'
                onChange={handelCheckChange}/>
              </span>
             </div>
          </div>
      </div>

<div className='container -mt-40'>

        {/* main cards */}  
    <div className=' grid grid-cols-1
    md:grid-cols-2 lg:grid-cols-4  
    gap-6 lg:gap-8'>
      {/* card */}
      <div className="card before:bg-facebook ">
        <div className='flex items-center justify-center gap-1
        font-bold pb-6'>
           <span className='text-facebook'>
             <AiFillFacebook size={22}/> {/* icons from ReactIcons lib */}
           </span>
           <span>@abcd</span>
        </div>
      <h2 className='text-slate-800  dark:text-white
      text-6xl'>1987</h2>
      <p className='font-medium
      uppercase
      tracking-[.3rem]'>Followers</p>
      <div className='flex items-center justify-center gap-1
       pt-6 text-maingreen' >
        <span>
          <RiArrowUpSFill/>{/* *************** */}
        </span>
        <span>Today</span>
      </div>
      </div>
      
      {/* card */}
      <div className="card before:bg-twitter">
        <div className='flex items-center justify-center gap-1
        font-bold pb-6'>
           <span className='text-twitter'>
             <AiFillTwitterSquare size={22}/> {/* icons from ReactIcons lib */}
           </span>
           <span>@abcd</span>
        </div>
      <h2 className='text-slate-800  dark:text-white
      text-6xl'>1987</h2>
      <p className='font-medium
      uppercase
      tracking-[.3rem]'>Followers</p>
      <div className='flex items-center justify-center gap-1
       pt-6 text-maingreen' >
        <span>
          <RiArrowUpSFill/>{/* *************** */}
        </span>
        <span>Today</span>
      </div>
      </div>
      {/* card */}
      <div className="card before:bg-gradient-to-r from-amber-400 to-fuchsia-600">
        <div className='flex items-center justify-center gap-1
        font-bold pb-6'>
           <span className='text-fuchsia-600'>
             <AiFillInstagram size={22}/> {/* icons from ReactIcons lib */}
           </span>
           <span>@abcd</span>
        </div>
      <h2 className='text-slate-800  dark:text-white
      text-6xl'>1987</h2>
      <p className='font-medium
      uppercase
      tracking-[.3rem]'>Followers</p>
      <div className='flex items-center justify-center gap-1
       pt-6 text-maingreen' >
        <span>
          <RiArrowUpSFill/>{/* *************** */}
        </span>
        <span>Today</span>
      </div>
      </div>
      {/* card */}
      <div className="card before:bg-gradient-to-r from-rose-200 to-rose-700">
        <div className='flex items-center justify-center gap-1
        font-bold pb-6'>
           <span className='text-rose-700'>
             <AiFillYoutube size={22}/> {/* icons from ReactIcons lib */}
           </span>
           <span>@abcd</span>
        </div>
      <h2 className='text-slate-800  dark:text-white
      text-6xl'>1987</h2>
      <p className='font-medium
      uppercase
      tracking-[.3rem]'>Followers</p>
      <div className='flex items-center justify-center gap-1
       pt-6 text-rose-700' >
        <span>
          <RiArrowDownSFill/>{/* *************** */}
        </span>
        <span>Today</span>
      </div>
      </div>

    </div>

    {/* small cards */}
    <div className="mt-12">
            <h2 className="text-2xl font-bold"> Overview - Today </h2>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 lg:gap-6 mt-6 ">
              {Array(8)
                .fill(" ")
                .map((el) => (
                  <div className="card-sm">
                    <div className="flex items-center justify-between">
                      <h4 className=" font-bold">Pages Views</h4>
                      <AiFillFacebook className=" text-facebook" size={22} />
                    </div>

                    <div className="flex items-center justify-between mt-8">
                      <h3 className=" font-black text-2xl text-slate-800  dark:text-white dark:text-white">
                        {" "}
                        101
                      </h3>
                      <div className="flex items-center gap-1 text-maingreen text-sm">
                        <span>
                          <RiArrowUpSFill />
                        </span>
                        <span>300%</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      </div>

);
}

export default App;
