import React from 'react'
import amazonLogo from '../../assets/PerfectLogo.png'
import { Globe,ChevronsUpDown } from 'lucide-react'
import indianFlag from '../../assets/indianflag.png'

function Footer() {
  return (
    <div className='main w-full bg-[#232F3E] h-197.5'>
      <button className='bg-[#37475A] hover:bg-[#506987] h-12.5 w-full flex items-center'>
        <div className='text-white text-xs w-full'>Back to top</div>
      </button>
      <div className="mx-[13%] first bg-[#232F3E] h-81.25 ">
        <div className='text-white mt-5  box-border w-full flex'>
          <div className='w-[13%] px-[1%] h-81.25'>
            <div className='font-bold mb-3.5 mt-1.5 w-full'>Get to know Us</div>
            <ul className='text-gray-300  text-sm w-full'>
              <li className='mb-2.5 hover:cursor-pointer hover:underline'>Careers</li>
              <li className='mb-2.5 hover:cursor-pointer hover:underline'>Press Releases</li>
              <li className='mb-2.5 hover:cursor-pointer hover:underline'>Amazon Science</li>
            </ul>
          </div>
          <div className='h-81.25 w-[8%] px-[1%]'></div>
          <div className='h-81.25 w-[13%] px-[1%]'> 
            <div className='font-bold mb-3.5 mt-1.5 w-full'>Connect with Us</div>
            <ul className='text-gray-300 text-sm'>
              <li className='mb-2.5 hover:cursor-pointer hover:underline'>Facebook</li>
              <li className='mb-2.5 hover:cursor-pointer hover:underline'>Twitter</li>
              <li className='mb-2.5 hover:cursor-pointer hover:underline'>Instagram</li>
            </ul>
          </div>
          <div className='h-81.25 w-[8%] px-[1%]'></div>
          <div className='h-81.25 w-[22%] px-[1%]'>
            <div className='font-bold mb-3.5 mt-1.5 w-full'>Make Money with Us</div>
            <ul className='text-gray-300 text-sm'>
              <li className='mb-2.5 hover:cursor-pointer hover:underline'>Sell on Amazon</li>
              <li className='mb-2.5 hover:cursor-pointer hover:underline' >Sell under Amazon Accelerator</li>
              <li className='mb-2.5 hover:cursor-pointer hover:underline'>Protect and Build Your Brand</li>
              <li className='mb-2.5 hover:cursor-pointer hover:underline'>Amazon Global Selling</li>
              <li className='mb-2.5 hover:cursor-pointer hover:underline'>Supply to Amazon</li>
              <li className='mb-2.5 hover:cursor-pointer hover:underline'>Become an Affiliate</li>
              <li className='mb-2.5 hover:cursor-pointer hover:underline'>Fulfilment by Amazon</li>
              <li className='mb-2.5 hover:cursor-pointer hover:underline'>Advertise Your Products</li>
              <li className='mb-2.5 hover:cursor-pointer hover:underline'>Amazon Pay on Merchants</li>
            </ul>
          </div>
          <div className='h-81.25 w-[8%] px-[1%]'></div>
          <div className='h-81.25 w-[20%] px-[1%]'>
            <div className='font-bold mb-3.5 mt-1.5 w-full'>Let us Help You</div>
            <ul className='text-gray-300 text-sm'>
              <li className='mb-2.5 hover:cursor-pointer hover:underline'>Your Account</li>
              <li className='mb-2.5 hover:cursor-pointer hover:underline'>Returns Centre</li>
              <li className='mb-2.5 hover:cursor-pointer hover:underline'>Recalls and Product Safety Alerts</li>
              <li className='mb-2.5 hover:cursor-pointer hover:underline'>100% Purchase Protection</li>
              <li className='mb-2.5 hover:cursor-pointer hover:underline'>Amazon App Download</li>
              <li className='mb-2.5 hover:cursor-pointer hover:underline'>Help</li>
            </ul>
          </div>

        </div>
      </div>
      <div className="second w-full border-t mt-10 border-t-[#3a4553]"></div>
      <div className="third w-[75%] h-17 mx-[13%] justify-center flex my-2.5">
        <span className='h-17  w-22.5 px-1.75'>
          <div className='mt-7.5 mb-2.75 h-6.75'>
          <img src={amazonLogo} alt="" className='mx-auto my-auto w-full h-full object-cover hover:cursor-pointer' />

          </div>
        </span>
        <span className='ml-17.5 w-[25%] h-8.25 px-[0.7%] mt-4.5'>
          <div className='w-full h-full flex'>
            <div className='w-[56%] h-full rounded hover:cursor-pointer flex border border-[#848688] mr-1 py-1.5 pl-[3.5%] pr-[8%]'>
              <div className=' flex items-center w-[66%] h-full mr-2  '>
              <Globe size={16} color='white' className='mr-3'/>
              <div className='text-xs text-gray-300'>English</div>
              </div>
              <div className='w-[34%] flex items-center h-full '>
                <ChevronsUpDown size={18} color='white' className='ml-6'/>
              </div>

            </div>
            <div className='w-[44%] py-1.5 rounded hover:cursor-pointer mr-2 pl-[9%] pr-[20%] h-full border border-[#848688] '>
              <div className='flex w-full h-full items-center'>
                <img src={indianFlag} alt="" className='w-16 h-3 mr-3'/>
                <span className='text-gray-300 text-sm'>India</span>
              </div>
            </div>
          </div>
        </span>
        
      </div>
      <div className="fourth bg-[#131A22] w-full h-46 mt-7.5 py-7.5">
        <div className='h-full mx-[13%]'>
          <ul className="flex w-full h-10.25 mb-3.75">
            <li className='h-full w-[15%] px-2.25 hover:cursor-pointer hover:underline  hover:decoration-white'>
              <div className='h-full w-full'>
                <h5 className='w-full h-3.5 text-[#d0d1d1] text-xs mb-0.5'>Abebooks</h5>
                <span className='text-[#999] text-xs flex flex-col'>
                  <div>Books, art</div>
                  <div>& collectibles</div>
                </span>
              </div>
            </li>
            <li className='h-full w-[4%]'></li>
            <li className='h-full w-[15%] px-2.25  hover:cursor-pointer hover:underline hover:decoration-white'>
              <div className='h-full w-full'>
                <h5 className='w-full h-3.5 text-[#d0d1d1] text-xs mb-0.5'>Amazon Web Services</h5>
                <span className='text-[#999] text-xs flex flex-col'>
                  <div>Scalable Cloud</div>
                  <div>Computing Services</div>
                </span>
              </div>
            </li>
            <li className='h-full w-[4%]'></li>
            <li className='h-full w-[15%] px-2.25 hover:cursor-pointer hover:underline hover:decoration-white'>
              <div className='h-full w-full'>
                <h5 className='w-full h-3.5 text-[#d0d1d1] text-xs mb-0.5'>Audible</h5>
                <span className='text-[#999] text-xs flex flex-col'>
                  <div>Download</div>
                  <div>Audio Books</div>
                </span>
              </div>
            </li>
            <li className='h-full w-[4%]'></li>
             <li className='h-full w-[15%] px-2.25 hover:cursor-pointer hover:underline hover:decoration-white'>
              <div className='h-full w-full'>
                <h5 className='w-full h-3.5 text-[#d0d1d1] text-xs mb-0.5'>IMDb</h5>
                <span className='text-[#999] text-xs flex flex-col'>
                  <div>Movies, TV</div>
                  <div>& Celebrities</div>
                </span>
              </div>
            </li>
          </ul>
          <ul className="flex w-full h-16.75 mb-3.75">
            <li className='h-full w-[15%] px-2.25  hover:cursor-pointer hover:underline hover:decoration-white'>
              <div className='h-full w-full'>
                <h5 className='w-full h-3.5 text-[#d0d1d1] text-xs mb-0.5'>Shopbop</h5>
                <span className='text-[#999] text-xs flex flex-col'>
                  <div>Designer</div>
                  <div>Fashion Brands</div>
                </span>
              </div>
            </li>
            <li className='h-full w-[4%]'></li>
            <li className='h-full w-[15%] px-2.25  hover:cursor-pointer hover:underline hover:decoration-white'>
              <div className='h-full w-full'>
                <h5 className='w-full h-3.5 text-[#d0d1d1] text-xs mb-0.5'>Amazon Business</h5>
                <span className='text-[#999] text-xs flex flex-col'>
                  <div>Everything For</div>
                  <div>Your Business</div>
                </span>
              </div>
            </li>
            <li className='h-full w-[4%]'></li>
            <li className='h-full w-[15%] px-2.25 hover:cursor-pointer hover:underline hover:decoration-white'>
              <div className='h-full w-full'>
                <h5 className='w-full h-3.5 text-[#d0d1d1] text-xs mb-0.5'>Amazon Prime Music</h5>
                <span className='text-[#999] text-xs flex flex-col'>
                  <div>100 million songs, ad-free</div>
                  <div>Over 15 million podcast episodes</div>
                </span>
              </div>
            </li>
            <li className='h-full w-[4%]'></li>
            <li className='h-full w-[15%] px-2.25'>&nbsp;</li>
          </ul>
        </div>

      </div>
      <div className="fifth w-full flex flex-col  items-center  h-19 bg-[#131A22] pt-2.5 pb-7.5 ">
        <ul className='ml-[1.5%] h-4.5 flex gap-2 justify-center mb-2'>
          <li className='hover:cursor-pointer hover:underline hover:decoration-white' >
            <span className='text-[#d3d3d4] text-xs'>Conditions of Use & Sale</span>
          </li>
          <li className='hover:cursor-pointer hover:underline hover:decoration-white'>
            <span className='text-[#d3d3d4] text-xs'>Privacy Notice</span>
          </li>
          <li className='px-2 hover:cursor-pointer hover:underline hover:decoration-white'>
            <span className='text-[#d3d3d4] text-xs'>Interest-Based Ads </span>
          </li>
        </ul>
        <span className='px-[0.5%] h-4.5 text-[#d3d3d4] text-xs'>© 1996-2026, Amazon.com, Inc. or its affiliates</span>
      </div>

    </div>
  )
}

export default Footer