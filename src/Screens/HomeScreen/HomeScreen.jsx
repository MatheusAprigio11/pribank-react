import React from 'react'
import Card from '../../Components/Cards/Card'
import CardTwo from '../../Components/Cards/CardTwo'
import CardService from '../../Components/CardService/CardService'
import { TbPigMoney } from 'react-icons/tb'
import { PiPiggyBankThin } from 'react-icons/pi'

const HomeScreen = () => {
  return (
    
    <div className='bg-[#f2f0f0]'>
      <Card />

      <CardTwo />

      <h1 className='font-lexend font-semibold pl-[13.7rem] text-3xl mt-24 '>Conheca nossos <span className='text-[#ff364e]'>outros serviços</span></h1>

      <div className="w-[391px] h-[0px] border-2 rounded-sm border-rose-500 mb-14 ml-[13.79rem]"></div>

      <div className='flex items-center justify-center gap-28'>
        <CardService 
        url='src/assets/images/pig.png'
        title='Caixinhas'
        text='Forma fácil e prática de você economizar para seus objetivos com ótimos valores de rendimento e diferentes opções de economia para você.'
        />
        <CardService 
        url='src/assets/images/emprest.png'
        title='Empréstimos'
        text='Calcule e realize seus empréstimos de uma forma mais fácil. Temos a melhor oferta e parcelas que cabem no seu bolso.'
        />
        <CardService 
        url='src/assets/images/bank.png'
        title='Conta'
        text='Receba, movimente e guarde seu dinheiro de um jeito simples e com rendimento maior que a poupança.'
        />
      </div>
      <h1 className='font-lexend font-semibold text-[30px] mt-28 pb-40 flex justify-center'>Possui alguma dúvida? <span className='text-[#ff364e] cursor-pointer ml-2'>contate-nos!</span></h1>
    </div>
  )
}

export default HomeScreen