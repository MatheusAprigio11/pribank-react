import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import instance from '../../services/axiosInstance';

const Navbar = () => {

  const [scrolling, setScrolling] = useState(false);
  const [data, setData] = useState([])

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    let Links = [
        {name: "Transferências Pix", link:"/"},
        {name: "Nossos Serviços", link:"/"},
        {name: "Contate-nos", link:"/"},
    ];
    let [open, setOpen] = useState(false);



  const getClientes = async () => {
    try{
      const cliente = await instance.get('/clientes')
      console.log(cliente.data[0].nome)
      setData(cliente.data)
    }catch(err){
      console.log(err)
    }
  }    

  return (
    <div
      className={`z-50 fixed w-full h-9 top-0 left-0 `}
      onClick={getClientes}
    >
        <div className={`md:flex flex items-center justify-center md:gap-10 lg:gap-16 xl:gap-36 2xl:gap-80 py-4 md:px-10 px-7 transition-all duration-500 bg-transparent ${scrolling ? 'bg-[#200609] h-20' : 'bg-transparent'}`}>
        <div className='cursor-pointer flex items-center sm:pr-32 md:pr-0 lg:pr-0 '>
        <img src='src/assets/images/Group 1.png' className='w-13 md:w-12 xl:w-20 h-auto'/>
        </div>
        <div onClick={()=>
            setOpen(!open)
            } className='text-5xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-transparent md:z-auto z-[-1] left-0 w-auto md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'flex justify-end items-center flex-col top-40 opacity-100 right-[-400px]':'left-[480px]'} md:opacity-100 opacity-0`}>
            {    
                Links.map((link)=>(
                    <li key={link.name} className='md:ml-8 text-base md:my-0 my-7'>
                        <a href={link.link} className='text-white font-lexend font-semibold text-xs p-7 md:text-sm xl:text-smbs lg:text-base hover:text-gray-400 duration-500'>{link.name}</a>
                    </li>
                ))
            }
            
        </ul>
        <div className='sm:pr-60 md:pr-0'>
        <Button
                title='Faça parte'
                classname=' bg-[#ff364e] w-40 text-white md:text-smbs md:w-32 2xl:text-base 2xl:w-36 font-poppins py-2 px-6 rounded-2xl lg:text-smbs lg:w-32 hover:bg-[#802d37] duration-500 '
                // onClick={() => console.log('akjdskja')}
            />
        </div>
        </div>
    </div>
  )
}

export default Navbar

