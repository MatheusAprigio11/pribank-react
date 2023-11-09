import { useState } from 'react';
import Button from '../Button/Button';

const Navbar = () => {
    let Links = [
        {name: "Transferências Pix", link:"/"},
        {name: "Nossos Serviços", link:"/"},
        {name: "Contate-nos", link:"/"},
    ];
    let [open, setOpen] = useState(false);

  return (
    <div className='z-50 w-full fixed top-0 left-0'>
        <div className='md:flex flex items-center justify-center gap-96 bg-transparent py-4 md:px-10 px-7'>
        <div className='cursor-pointer flex items-center'>
        <img src='src/assets/images/Group 1.png' className='w-13 h-auto'/>
        </div>
        <div onClick={()=>
            setOpen(!open)
            } className='text-3x1 absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16 opacity-100':'top-[-480px]'} md:opacity-100 opacity-0`}>
            {    
                Links.map((link)=>(
                    <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                        <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                    </li>
                ))
            }
            
        </ul>
        <Button
                title='Logar'
                classname='bg-indigo-600 text-white font-poppins py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'
            />
        </div>
    </div>
  )
}

export default Navbar

