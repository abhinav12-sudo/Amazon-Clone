import React from 'react'

function Header() {
  return (
    <>
    <div>
      <div className="left w-full h-16 bg-[#131921]">
        <div className="logo flex">
          <img className='w-30 h-30 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXt88C7rPiQTCFDr0kksQ9cwAHrqTtpHISQA&s" alt="" />
          <span className='text-white'>.in</span>
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