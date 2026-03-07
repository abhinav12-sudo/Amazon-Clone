import React from 'react'
import amazonLogo from '../../assets/whiteamazonlogo.webp'

function Login() {
    return (
        <>
            <div className='w-full h-96 px-[1.3%] pt-3.5 pb-4.5'>
                <div className='w-full h-7.75 mb-4'>
                    <div className='w-full h-full flex  justify-center pr-10'>
                        <img src={amazonLogo} alt="" className='w-28 h-8 object-cover hover:cursor-pointer' />
                        <div className='text-'>.in</div>
                    </div>
                </div>
                <div className="login mx-[23%] h-76.25" >
                    <div className='h-full w-76.25 mx-[25%]'>
                        <div className='login-box border border-[#d5d9d9] rounded-sm h-full w-full'>
                            <div className='h-full py-5 w-full px-[7.5%]'>
                                <div className='h-64 w-full'>
                                    <h1 className='w-full h-8 pb-1 mb-2  text-lg'>Sign in or create account</h1>
                                    <p className='w-full h-5 mb-1 text-sm font-bold'>Enter mobile number or email</p>
                                    <div className='w-full border border-[#888c8c] rounded-sm h-8 mb-1'>
                                        <input type="text" className='w-full h-full py-1.25 px-2.75' />
                                    </div>
                                    <div className='h-8 bg-[#ffd814] rounded-3xl  mt-2 w-full hover:cursor-pointer hover:bg-gray-500'>
                                        <button className='h-full w-full  '>
                                            <div className='h-full w-full flex justify-center items-center px-2.75 py-1.25'>
                                                <span className='text-sm'>Continue</span>
                                            </div>
                                        </button>
                                    </div>
                                    <p className='w-full  h-8 mt-4 mb-3.5'>
                                        <div className='text-xs'>By continuing, you agree to Amazon's <a href="\" className='underline text-[#2c6aa6] hover:cursor-pointer hover:text-blue-950'>Condition of Use </a>and <a href="\" className='underline text-[#2c6aa6] hover:cursor-pointer hover:text-blue-950'>Privacy Notice.</a></div>
                                    </p>
                                    <div className="second w-full border-t border-t-[#a8b7cb]"></div>
                                    <div className='w-full h-15 mt-3'>
                                        <div className='text-sm font-bold'>Buying for work?</div>
                                        <a href="\" className='text-[#2162a1] hover:underline hover:cursor-pointer hover:decoration-black hover:text-black text-sm'>Create a free business account</a>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="second w-full border-t-2 border-t-[#ceddf1] mt-2.5"></div>
            <div className='w-full h-18.5 mt-8 mb-5.5'>
                <div className="first w-full h-5 text-[#2c6aa6] gap-4 text-xs justify-center mb-2 mt-2 flex ">
                    <div className='hover:underline hover:cursor-pointer hover:decoration-black hover:text-black'>Condition of use</div>
                    <div className='hover:underline hover:cursor-pointer hover:decoration-black hover:text-black'>Privacy Notice</div>
                    <div className='hover:underline hover:cursor-pointer hover:decoration-black hover:text-black'>Help</div>
                </div>
                <div className="second w-full h-5 flex justify-center">
                    <span className='h-3.75 text-[#565959] text-xs'>© 1996–2026, Amazon.com, Inc. or its affiliates</span>
                </div>
            </div>
        </>
    )
}

export default Login