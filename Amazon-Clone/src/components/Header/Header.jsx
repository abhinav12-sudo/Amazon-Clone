import React from 'react'
import amazonlogo from '../../assets/int (3).png'
import { MapPin } from 'lucide-react'
import indiaFlag from '../../assets/indianflag.png'
import { ChevronDown,ShoppingCart,Search} from "lucide-react";

function Header() {
  return (
    <>
      <div className='w-full flex'>
        <div className="left w-[26%] flex h-16 bg-[#151d28]">
          <div className="logo flex overflow-hidden items-center h-16 w-[39%] hover:border hover:border-white">
            <img className=' h-20 hover:cursor-pointer object-cover p-2 ' src={amazonlogo} alt="" />
          </div>
          <div className="location hover:border hover:border-white hover:cursor-pointer w-[61] flex items-center">
            <MapPin color='#ffff' className='w-5 h-5' />
            <div>
              <p className='text-[#ccc] text-xs'>Delivering to Mumbai 400001</p>
              <p className='text-white font-extrabold text-sm'>Update location</p>
            </div>

          </div>
        </div>
        <div className="middle w-[46%] h-16 bg-[#151d28]">
          <div className="search  mx-2.5 py-2.5 h-16 pr-1 pl-0.75 ">
            <form action="" className='rounded-md border overflow-hidden flex h-11 '>
              <div className="form-left hover:cursor-pointer bg-[#e6e6e6] w-[9%] h-11">
                <div className='w-full hover:cursor-pointer h-full'>
                  <div className='pl-1 w-full h-full hover:cursor-pointer'>
                    <label htmlFor="searchdropdownbox" className='hidden pl-0.5 pb-0.5'>Select the department you want to search in</label>
                    <select name="url" id="searchdropdownbox" className='hover:cursor-pointer w-full h-full text-gray-500'>
                      <option value="all" selected>All</option>
                      <option value="categories">All Categories</option>
                      <option value="alexaskills">Alexa Skills</option>
                      <option value="amazondevices">Amazon Devices</option>
                      <option value="amazonfashion">Amazon Fashion</option>
                      <option value="amazonfresh">Amazon Fresh</option>
                      <option value="amazonfreshmeat">Amazon Fresh Meat</option>
                      <option value="amazonpharmacy">Amazon Pharmacy</option>
                      <option value="appliances">Appliances</option>
                      <option value="appsgames">Apps & Games</option>
                      <option value="audibleaudiobooks">Audible Audiobooks</option>
                      <option value="baby">Baby</option>
                      <option value="beauty">Beauty</option>
                      <option value="books">Books</option>
                      <option value="carmotorbike">Car & Motorbike</option>
                      <option value="clothingaccessories">Clothing & Accessories</option>
                      <option value="collectibles">Collectibles</option>
                      <option value="computeraccessories">Computer & Accessories</option>
                      <option value="deals">Deals</option>
                      <option value="electronics">Electronics</option>
                      <option value="furniture">Furniture</option>
                      <option value="garderoutdoors">Garden & Outdoors</option>
                      <option value="giftcards">Gift Cards</option>
                      <option value="grocerygourmet">Grocery & Gourmet Foods</option>
                      <option value="healthpersonal">Health & Personal Care</option>
                      <option value="homekitchen">Home & Kitchen</option>
                      <option value="industrial">Industrial & Scientific</option>
                      <option value="jewellery">Jewellery</option>
                      <option value="kindlestore">Kindle Store</option>
                      <option value="luggagebags">Luggage & Bags</option>
                      <option value="luxurybeauty">Luxury Beauty</option>
                      <option value="moviestv">Movies & TV Shows</option>
                      <option value="mp3music">MP3 Music</option>
                      <option value="music">Music</option>
                      <option value="musicalinstrument">Musical Instruments</option>
                      <option value="officeproducts">Office Products</option>
                      <option value="petsupplies">Pet Supplies</option>
                      <option value="primevideo">Prime Video</option>
                      <option value="shoeshandbags">Shoes & Handbags</option>
                      <option value="software">Software</option>
                      <option value="sportsfitness">Sports, Fitness & Outdoors</option>
                      <option value="subscribe">Subscribe & Save</option>
                      <option value="tools">Tools & Home Improvement</option>
                      <option value="toys">Toys & Games</option>
                      <option value="under">Under 500</option>
                      <option value="videogames">Video Games</option>
                      <option value="watches">Watches</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-middle hover:cursor-pointer w-[84%] h-11">
                <div className='bg-white w-full h-full'>
                  {/* <label htmlFor="search-bar" className='w-full h-full pl-0.5 pb-0.5 text-gray-500'>Search Amazon.in</label> */}
                  <input placeholder='Search Amazon.in' type="text" id="search-bar" className='text-gray-700 w-full h-full pr-2.5 pb-2.5 pt-1.75 pl-0.5'/>
                </div>
              </div>
              <div className="form-right  hover:cursor-pointer  w-[7%] h-11">
                <div className='pl-1.5 h-full w-full flex items-center bg-[#febd69]'>
                  <Search size={28} color="#2e2e2e" className='' />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="right  flex  w-[28%] h-16 bg-[#151d28]">
          <div className="main w-full flex items-center h-full mt-0.5 pt-0.75">
            <div className="country hover:border hover:border-white hover:cursor-pointer flex gap-1 mx-2">
              <img src={indiaFlag} alt="" className='w-5.5 h-4' />
              <div className="flex items-center">
                <span className='h-4 text-sm text-white'>EN</span>
                <ChevronDown size={16} strokeWidth={3} color='#A7ACB2' className='pt-1' />
              </div>
            </div>
            <div className="signin hover:cursor-pointer flex mx-2 items-end ">
              <div className="flex flex-col hover:border hover:border-white">
                <span className='text-white text-xs '>Hello, sign in</span>
                <span className='text-white text-xs  font-extrabold'>Account & Lists</span>
              </div>
              <ChevronDown size={16} strokeWidth={3} color='#A7ACB2' className='pt-1 mb-1' />
            </div>
            <div className="orders hover:border hover:border-white hover:cursor-pointer flex flex-col mx-2 px-2">
              <span className='text-white text-xs '>Returns</span>
              <span className='text-white text-xs font-extrabold'>& Orders</span>
            </div>
            <div className="cart hover:border hover:border-white hover:cursor-pointer flex mx-1 px-2 items-center">
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