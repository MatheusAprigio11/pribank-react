import React from 'react'

const CardService
 = (props) => {
  return (
    <div className='w-[400px] h-[420px] flex flex-col border-2 border-[#C7C6C6] pl-8 pr-8 rounded-[15px] bg-[#f2f0f0]'>
        <div className='w-full flex justify-center items-center mt-11 mb-6'>
            <img src={props.url} alt="image" />
        </div>
        <div className='w-full font-semibold font-lexend text-2xl flex justify-center items-center mb-4 text-[#ff364e]'>
            {props.title}
        </div>
        <div className='w-full flex justify-center text-center font-lexend font-semibold text-base'>
            {props.text}
        </div>
    </div>
  )
}

export default CardService
