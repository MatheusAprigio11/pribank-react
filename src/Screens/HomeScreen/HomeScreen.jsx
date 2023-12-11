import React from 'react'
import Card from '../../Components/Cards/Card'
import CardTwo from '../../Components/Cards/CardTwo'
import CardService from '../../Components/CardService/CardService'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'

const HomeScreen = () => {
  return (
    
    <div className='bg-[#f2f0f0]'>
      {/* Usando todos os components na pagina Home */}
      <Navbar />
      <Header />
      <Card />

      <CardTwo />
      
      {/* TAILWIND CSS */}
      <h1 className='font-lexend font-semibold xl:pl-[13.7rem] xl:text-left text-3xl mt-24 md:pl-0 md:text-center'>Conheca nossos <span className='text-[#ff364e]'>outros serviços</span></h1>

      <div className="w-[391px] h-[0px] border-2 rounded-sm border-rose-500 mb-14 xl:ml-[13.79rem] md:ml-[8.7rem] lg:ml-[16.5rem]"></div>

      <div className='flex lg:flex-row md:items-center md:justify-center md:gap-14 md:flex-col'>
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
      <h1 className='font-lexend font-semibold text-[30px] mt-28 pb-40 flex justify-center'>Gostou? venha ser <span className='text-[#ff364e] cursor-pointer ml-2'>Pribank!</span></h1>
    </div>
  )
}

export default HomeScreen