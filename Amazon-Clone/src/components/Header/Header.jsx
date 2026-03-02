import React from 'react'

function Header() {
  return (
    <>
    <div>
      <div className="left">
        <div className="logo"></div>
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