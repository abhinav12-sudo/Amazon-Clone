import React from 'react'
import amazonlogo from './int (3).png'

function Header() {
  return (
    <>
    <div>
      <div className="left w-full flex h-16 bg-[#151d28]">
        <div className="logo flex overflow-hidden items-center h-16">
          <img className=' h-20  object-cover p-2' src={amazonlogo} alt="" />
        </div>
        <div className="location"></div>
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