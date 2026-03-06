import React from 'react'
import amazonlogo from '../../assets/int (3).png'
import { MapPin } from 'lucide-react'
import indiaFlag from '../../assets/indianflag.png'
import { ChevronDown,ShoppingCart} from "lucide-react";

function Header() {
  return (
    <>
      <div className='w-full flex'>
        <div className="left w-[26%] flex h-16 bg-[#151d28]">
          <div className="logo flex overflow-hidden items-center h-16 w-[39%]">
            <img className=' h-20  object-cover p-2' src={amazonlogo} alt="" />
          </div>
          <div className="location w-[61] flex items-center">
            <MapPin color='#ffff' className='w-5 h-5' />
            <div>
              <p className='text-[#ccc] text-xs'>Delivering to Mumbai 400001</p>
              <p className='text-white font-extrabold text-sm'>Update location</p>
            </div>

          </div>
        </div>
        <div className="middle w-[46%] h-16 bg-[#151d28]">
          <div className="search mx-2.5 h-16">
            <form action="" className='flex my-2.5 mx-0.75'>
              <div className="form-left"></div>
              <div className="form-middle">
                <div>
                  <label htmlFor="search-bar"></label>
                  <input type="text" id="search-bar" />
                </div>
              </div>
              <div className="form-right"></div>
            </form>
          </div>
        </div>
        <div className="right flex  w-[28%] h-16 bg-[#151d28]">
          <div className="main w-full flex items-center h-full mt-0.5 pt-0.75">
            <div className="country flex gap-1 mx-2">
              <img src={indiaFlag} alt="" className='w-5.5 h-4' />
              <div className="flex items-center">
                <span className='h-4 text-sm text-white'>EN</span>
                <ChevronDown size={16} strokeWidth={3} color='#A7ACB2' className='pt-1' />
              </div>
            </div>
            <div className="signin flex mx-2 items-end ">
              <div className="flex flex-col">
                <span className='text-white text-xs '>Hello, sign in</span>
                <span className='text-white text-xs  font-extrabold'>Account & Lists</span>
              </div>
              <ChevronDown size={16} strokeWidth={3} color='#A7ACB2' className='pt-1 mb-1' />
            </div>
            <div className="orders flex flex-col mx-2 px-2">
              <span className='text-white text-xs '>Returns</span>
              <span className='text-white text-xs font-extrabold'>& Orders</span>
            </div>
            <div className="cart flex mx-1 px-2 items-center">
                <ShoppingCart size={34} color='#ffff'/>
                <div className='flex items-end mt-3'>
                <span className='mt-4 text-white text-xs  h-8 font-bold'>Cart</span>

                </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Header