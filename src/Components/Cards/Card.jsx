import React from 'react'

const Card = () => {
  return (
    <div className='flex pb-24'>
        <div className='pl-24 pt-24'>
            <img src='src/assets/images/card1.png' className='w-[587px]'></img>
        </div>
        <div className='pt-20 w-auto flex flex-col justify-center items-center font-lexend pl-52 whitespace-normal'>
            <h2 className='text-center mb-10 font-semibold text-3xl'>Vantagens de ser Pribank</h2>
            <p className='text-left max-w-[756px] font-semibold text-base'>Oferecemos conveniência incomparável, segurança de última geração e um serviço de suporte ao cliente dedicado, 24 horas por dia, 7 dias por semana.<br></br><br></br>

            Além disso, aqui no PriBank, nossa missão é tornar as finanças pessoais fáceis e acessíveis para todos. Com nossos valores de transparência e compromisso com a comunidade, estamos transformando a maneira como as pessoas gerenciam seu dinheiro.</p>
        </div>
    </div>
  )
}

export default Card