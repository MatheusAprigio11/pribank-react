import React from 'react'

function Inputs(props) {
  return (
    <div className='m-0 p-0 box-border'>
        <div className='font-lexend'>
            <input placeholder={props.text} type={props.type} name="myInput" className='border-none rounded-[12px] outline-none bg-[#272727] text-[#fff] placeholder:text-[#8a8a8a] font-semibold pl-5 pt-3 pb-3 w-96' onChange={(text) => props.onChangeFunction(text.target.value)}/>
        </div>
    </div>
  )
}

export default Inputs