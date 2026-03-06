import React from 'react'
import { ChevronDown } from 'lucide-react'
import { Menu } from 'lucide-react'

function LowerNavBar() {
  return (
    <>
     <div className="bg-[#232F3E] w-full h-9.75 flex items-center gap-2.5 text-white tex-[14px]">
        <div className=' flex justify-center items-center gap-5 m-2 px-2.25 h-9.75 border rounded-xs border-transparent hover:border hover:border-white hover:cursor-pointer'>
           <button><Menu size={20}  color='#FFFFFF' /></button>
           <span className='font-medium text-sm'>All</span>
        </div>
        <div className='h-9.75 flex justify-center items-center px-1.25 border rounded-xs border-transparent hover:border hover:border-white hover:cursor-pointer'>
            <span className='text-sm font-normal mt-.5'>Fresh</span>
            <button> <ChevronDown size={18}  color='#A7ACB2' className='pt-1' /></button>
        </div>
        <button className='px-1 h-9.75 border rounded-xs border-transparent hover:border hover:border-white hover:cursor-pointer'>
            <span className='text-sm font-normal'>MX Player</span>
        </button>
        <button className='px-1 h-9.75 border rounded-xs border-transparent hover:border hover:border-white hover:cursor-pointer'>
            <span className='text-sm font-normal'>Sell</span>
        </button>
        <button className='px-1 h-9.75 border rounded-xs border-transparent hover:border hover:border-white hover:cursor-pointer'>
            <span className='text-sm font-normal'>Best Sellers</span>
        </button>
        <button className='px-1 h-9.75 border rounded-xs border-transparent hover:border hover:border-white hover:cursor-pointer'>
            <span className='text-sm font-normal'>Mobiles</span>
        </button>
        <button className='px-1 h-9.75 border rounded-xs border-transparent hover:border hover:border-white hover:cursor-pointer'>
            <span className='text-sm font-normal'>Customer Service</span>
        </button>
        <button className='px-1 h-9.75 border rounded-xs border-transparent hover:border hover:border-white hover:cursor-pointer'>
            <span className='text-sm font-normal '>Today's deal</span>
        </button>
        <div className='h-9.75 flex justify-center items-center px-1.25 border rounded-xs border-transparent hover:border hover:border-white hover:cursor-pointer'>
            <span className='text-sm font-normal mt-0.5'>Prime</span>
            <button> <ChevronDown size={18}  color='#A7ACB2' className='pt-1' /></button>
        </div>
        <button className='px-1 h-9.75 border rounded-xs border-transparent hover:border hover:border-white hover:cursor-pointer'>
            <span className='text-sm font-normal'>New Releases</span>
        </button>
        <button className='px-1 h-9.75 border rounded-xs border-transparent hover:border hover:border-white hover:cursor-pointer'>
            <span className='text-sm font-normal'>Fashion</span>
        </button>
        <button className='px-1 h-9.75 border rounded-xs border-transparent hover:border hover:border-white hover:cursor-pointer'>
            <span className='text-sm font-normal'>Amazon pay</span>
        </button>
        <button className='px-1 h-9.75 border rounded-xs border-transparent hover:border hover:border-white hover:cursor-pointer  hidden min-[1110px]:block'>
            <span className='text-sm font-normal'>Electronics</span>
        </button>
        <button className='px-1 h-9.75 border rounded-xs border-transparent hover:border hover:border-white hover:cursor-pointer  hidden min-[1230px]:block'>
            <span className='text-sm font-normal'>Home & Kitchen</span>
        </button>
        <button className='px-1 h-9.75 border rounded-xs border-transparent hover:border hover:border-white hover:cursor-pointer  hidden min-[1330px]:block'>
            <span className='text-sm font-normal'>Toys & Games</span>
        </button>
        <button className='px-1 h-9.75 border rounded-xs border-transparent hover:border hover:border-white hover:cursor-pointer hidden min-[1430px]:block '>
            <span className='text-sm font-normal'>Computers</span>
        </button>
        <button className='px-1 h-9.75 border rounded-xs border-transparent hover:border hover:border-white hover:cursor-pointer hidden min-[1500px]:block '>
            <span className='text-sm font-normal'>Books</span>
        </button>
        <button className='px-1 h-9.75 border rounded-xs border-transparent hover:border hover:border-white hover:cursor-pointer hidden min-[1590px]:block '>
            <span className='text-sm font-normal'>Gifts Cards</span>
        </button>
        <button className='px-1 h-9.75 border rounded-xs border-transparent hover:border hover:border-white hover:cursor-pointer hidden min-[1740px]:block '>
            <span className='text-sm font-normal'>Beauty & Personal Care</span>
        </button>
        <button className='px-1 h-9.75 border rounded-xs border-transparent hover:border hover:border-white hover:cursor-pointer hidden min-[1850px]:block '>
            <span className='text-sm font-normal'>Car & Motorbike</span>
        </button>
     </div>
    </>
  )
}

export default LowerNavBar
