import React from 'react'

const CardTwo = () => {
  return (
    <div className='bg-[#949494] bg-opacity-50 flex pb-24'>
      <div className='pt-20 w-auto flex flex-col justify-center items-center font-lexend pl-52 whitespace-normal'>
            <h2 className='text-center mb-10 font-semibold text-3xl'>Conheça o pix</h2>
            <p className='text-left max-w-[756px] font-semibold text-base'>Faça e receba transferências de um modo prático, rápido e seguro utilizando a tecnologia pix. Realize pagamentos, ou receba, em questão de segundos.<br></br><br></br>

            Aqui na PriBank, cuidamos das suas transferências e as tornamos mais seguras.</p>
        </div>
        <div className='pt-24 flex justify-end pr-24 w-full'>
            <img src="src/assets/images/card2.png" alt="Card" className='w-[750px] h-[500px]'/>
        </div>

    </div>
  )
}

export default CardTwo