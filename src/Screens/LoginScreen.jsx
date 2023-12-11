import React, { useState } from 'react'
import Inputs from '../Components/Inputs/Inputs'
import Button from '../Components/Button/Button'
import axiosInstance from '../services/axiosInstance'
import { useNavigate } from "react-router-dom";

function LoginScreen() {
    const [CPF, setCPF] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('')
    console.log(senha)
    console.log(CPF)

    const navigation = useNavigate()

    //Função que verifica se as credenciais estão corretas na API
    const makeLogin = async () => {
        if (CPF.length == 0 || senha.length == 0) {
            setError('Inputs não podem ser vazios')
            return
        }
        try {
            const authToken = await axiosInstance.post('/authtoken/login/', {
                cpf: CPF,
                password: senha
            } )
            localStorage.setItem("token", authToken.data.auth_token)
            navigation('/logged')
        } catch (error) {
            setError(error.response.data.non_field_errors[0])
            
        }

    }

    return (
        <div className='bg-gradient-to-b flex justify-center items-center flex-col gap-2 h-[100vh]'>
            <h1 className='text-[#ff364e] text-[50px] font-semibold'>Login</h1>
            <Inputs
                text="CPF"
                onChangeFunction={setCPF}
                type="text"
            />
            <Inputs
                text="SENHA"
                onChangeFunction={setSenha}
                type="password"
            />
            <p className='text-red-700'>{error}</p>
            
            <Button
                title='Entrar'
                classname=' bg-[#ff364e] w-40 text-white md:text-smbs md:w-32 2xl:text-base 2xl:w-36 font-poppins py-2 px-6 rounded-2xl lg:text-smbs lg:w-32 hover:bg-[#802d37] duration-500 '
                onClick={makeLogin}
            />
        </div>
    )
}

export default LoginScreen