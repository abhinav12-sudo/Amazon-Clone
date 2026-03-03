import React from 'react'
import amazonlogo from './int (3).png'
import { MapPin } from 'lucide-react'

function Header() {
  return (
    <>
    <div>
      <div className="left w-full flex h-16 bg-[#151d28]">
        <div className="logo flex overflow-hidden items-center h-16">
          <img className=' h-20  object-cover p-2' src={amazonlogo} alt="" />
        </div>
        <div className="location flex items-center">
          <MapPin color='#ffff' className='w-5 h-5'/>
          <div>
            <p className='text-[#ccc] text-xs'>Delivering to Mumbai 400001</p>
            <p className='text-white font-extrabold text-sm'>Update location</p>
          </div>

        </div>
      </div>
      <div className="middle">
        <div className="search">
          <form action="">
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
      <div className="right">
        <div className="main">
          <div className="country"></div>
          <div className="signin"></div>
          <div className="orders"></div>
          <div className="cart"></div>
        </div>
      </div>

    </div>
    </>
  )
}

export default Header