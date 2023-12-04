import React from "react";
import { BiLogoFacebook } from 'react-icons/bi'
import { BiLogoLinkedin } from 'react-icons/bi'
import { BiLogoInstagramAlt } from 'react-icons/bi'
import { BiLogoTwitter } from 'react-icons/bi'
import { BiLogoYoutube } from 'react-icons/bi'
import { FaGooglePlay } from 'react-icons/fa'
import { BsApple } from 'react-icons/bs'
// import { FaLinkedinIn } from 'react-icons/fa'
// import { FaYoutube } from 'react-icons/fa'
// import { BiLogoInstagramAlt } from 'react-icons/bi'


function Footer() {
  return (
    <div id="footerSess">
      <div>
        <footer className="bg-[#333333] p-[50px] flex flex-col text-white h-auto">
          <div className="flex flex-row justify-between"> {/*#imagens*/}
            <div className="flex flex-row gap-[65px]"> {/* container-father */}
              <div className="flex flex-col gap-[17px]"> {/*container*/}
                <h3>Siga o PriBank</h3>
                <div className="flex flex-row items-normal justify-between gap-[10px]"> {/* social-media */}
                  <div className="flex flex-row items-center justify-center border-[1px] border-solid border-white transition duration-300 cursor-pointer w-[40px] h-[40px] rounded-full hover:text-[#ff364e] hover:border-[#ff364e]"><BiLogoLinkedin className="text-[20px] cursor-pointer hover:text-[#ff364e]"/></div>
                  <div className="flex flex-row items-center justify-center border-[1px] border-solid border-white transition duration-300 cursor-pointer w-[40px] h-[40px] rounded-full hover:text-[#ff364e] hover:border-[#ff364e]"><BiLogoInstagramAlt className="text-[20px] cursor-pointer hover:text-[#ff364e]"/></div>
                </div>
              </div>
              <div className="flex flex-col gap-[17px]">
                <h3>Baixe o nosso App</h3>
                <div className="flex flex-row items-normal justify-between gap-[10px]">
                  <div className="flex flex-row items-center justify-center border-[1px] border-solid border-white transition duration-300 cursor-pointer rounded-[5px] h-[40px] w-[110px] hover:text-[#ff364e] hover:border-[#ff364e] ">
                    <FaGooglePlay className="text-[20px] cursor-pointer hover:text-[#ff364e]"/>
                    <p className="ml-[5px] text-[11px]">Google Play</p>
                  </div>
                  <div className="flex flex-row items-center justify-center border-[1px] border-solid border-white transition duration-300 cursor-pointer rounded-[5px] h-[40px] w-[110px] hover:text-[#ff364e] hover:border-[#ff364e]">
                    <BsApple className="text-[20px] cursor-pointer hover:text-[#ff364e]"/>
                    <p className="text-[11px] ml-[5px]">App Store</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center self-end w-[105px] [h-48px]">
                <img src="src/assets/images/logowhite.png"/>
            </div>
          </div>
          <hr className="mt-[26px] mb-[20px] border-[#818181]"/>
          <div className="flex flex-col capitalize gap-[15px]">
            <div className="flex flex-row justify-start w-auto gap-[20px]">
              <p className="text-[11px]">cotação do dólar</p>
              <p className="text-[11px]">tarifas</p>
              <p className="text-[11px]">segurança</p>
              <p className="text-[11px]">privacidade de dados</p>
              <p className="text-[11px]">política de privacidade</p>
              <p className="text-[11px]">política de segurança da informação</p>
              <p className="text-[11px]">política de segurança da informação para fornecedores</p>
            </div>
            <div className="flex flex-row justify-start w-auto gap-[20px]">
              <p className="text-[11px]">© 2023 Banco PriBank S.A. CNPJ: 00.000.000/0001-01</p>
              <p className="text-[11px]">Campinas | SP - Rua Pastor Cicero Canuto de Lima, 71 São Bernardo - Vila Rialto. CEP: 13036-210</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;