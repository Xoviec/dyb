import './App.css';
import {ReactComponent as Reliability} from './images/reliability.svg'
import {ReactComponent as Time} from './images/time.svg'
import {ReactComponent as Pro} from './images/proffesionalism.svg'
import {ReactComponent as Instagram} from './images/instagram2.svg'
import {ReactComponent as Mail} from './images/mail.svg'
import Logo from './images/DoYeahBunny2.svg'
import { Card } from './components/card';
import { useState } from 'react';



function App() {

  const [mobileNav, setMobileNav] = useState(false)


  return (
    <div className="App text-text flex flex-col items-center">
      <nav className="flex fixed top-0 z-20 items-center justify-between w-[100%] h-14 bg-[#1a1a1a] px-12 sm:h-auto sm:flex-wrap">
        <img src={Logo} className='w-24 h-24' alt="" />
        <button className='hidden sm:block text-text' onClick={(()=>setMobileNav(!mobileNav))}>X</button>
        <ul className={`flex gap-16 sm:flex-col sm:w-full sm:py-10 transition ease-in-out delay-150 ${mobileNav ? `` : `sm:hidden`}`}>
          <li>
            <button onClick={(()=>setMobileNav(false))}>
              <a href="#exp">O nas</a>
              
            </button>
          </li>
          <li>
            <button onClick={(()=>setMobileNav(false))}>
              <a href="#offer">Oferta</a>
             
            </button>
          </li>
          <li>
            <button onClick={(()=>setMobileNav(false))}>
              Korzyści
            </button>
          </li>
          <li>
            <button onClick={(()=>setMobileNav(false))}>
              <a href="#contact">Kontakt</a>
              
            </button>
          </li>
    
        </ul>

      </nav>
      <div className='flex flex-col justify-center items-center dupa w-[100%] h-[40rem] relative text-xl mt-14'>
        <div className='flex flex-col text-left justify-center z-10 w-[50%] h-[100%]'>
          <p className=''>
            We-doimy Twoich klientów za <span className='text-secondary'>Ciebie</span> 
          </p>
          <h1 className=' text-[50px] my-5 leading-tight sm:text-[30px]'>
            Zaoszczędź swój <span className='text-secondary'>czas</span> i pomnóż <span className='text-ofblue'>zyski</span>
          </h1>
          <div className='w-[100%] flex  gap-10 '>
            <button className='border-2 border-secondary w-24 h-10 hover:bg-secondary transition'>
              Oferta
            </button>
            <button className='bg-secondary w-24 h-10'>
              Kontakt
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-col w-[50%] text-left py-20'>
        <p className='text-[50px] sm:text-[30px]'>
          Czy wiesz że...
        </p>
        <p className='text-lg sm:text-sm'>
          Zarobki z DM'ów na <span className='text-ofblue'>Onlyfans</span>  mogą znacznie przekroczyć zarobki z samych subskrypcji. Po nawiązaniu więzi z subskrybentem czuje się on dostrzeżony i będzie on chętniej wysyłał <span className='text-secondary'>TIP-y</span> podczas rozmowy. Dodatkowo można jeszcze bardziej wyróżnić owego klienta wysyłając mu ekskluzywne treści.
        </p>
      </div>
      <div className='flex w-[100%] items-center text-left py-20 lg:flex-col' id='exp'>
        <div className='flex flex-col justify-center items-center w-1/2 h-[30rem] relative dupa2 lg:w-full'>
          <div className='z-10 flex flex-col w-1/2'>
            <p className='text-[30px] text-gradient'>Doświadczenie</p>
            <p className='text-lg'>Nasz team posiada bogate doświadczenie w pisaniu z napalonymi mężczyznami gotowym oddać wszystkie swoje zarobione pieniądze aby ujrzeć kawałek damskiego ciała. Dodatkowo, nasze umiejętności pozwolą zakryć Twoje niedoskonałości i uwydatnić wdzięki.</p>
          </div>
        </div>
        <div className='flex flex-col gap-10 items-center justify-center w-1/2 px-10 lg:w-full lg:pt-10'>
          <p className='text-[40px] sm:text-[30px]'>Nasi podopieczni są dla nas <span className='text-secondary'>najważniejsi</span>!</p>
          <ul className='flex flex-col gap-5'>
            <li className='flex items-center text-[1.5rem] gap-5 sm:text-[1rem]'><Time className='w-10 h-10 sm:h-7 sm:w-8'/> Cenimy Twój czas</li>
            <li className='flex items-center text-[1.5rem] gap-5 sm:text-[1rem]'><Reliability className='w-10 h-10 sm:h-7 sm:w-8'/>Rzetelnie wypełniamy swoje obowiązki</li>
            <li className='flex items-center text-[1.5rem] gap-5 sm:text-[1rem]'><Pro className='w-10 h-10 sm:h-7 sm:w-8'/> Profesjonalnie podchodzimy do pisania z subskrybentami</li>
          </ul>
        </div>
      </div>
      <div className='w-4/5 flex flex-col py-10 xl:w-[95%]' id='offer'>
        <p className='text-[3rem] font-bold sm:mt-12'>
          Oferta
        </p>
        <div className='flex justify-center items-center py-10 gap-20 2xl:gap-10 lg:flex-col'>
          <Card profitTab={['Obsługa czatu', 'Publikacja zdjęć']} planName={'Standard'} percentage={20}/>
          <Card profitTab={['Obsługa czatu', 'postowanie zdjęć', 'Retusz zdjęć', 'Montaż wideo']} planName={'Plus'} percentage={30}/>
          <Card profitTab={['Organizacja sesji zdjęciowych', 'Kolaboracje']} planName={'Pro'} percentage={50} secret={true} />
        </div>
        <p className='text-gray-500'>* % są przybliżone, każda oferta jest indywidualna i podlega obustronnym negocjacjom.</p>
        <div className='flex flex-col items-center justify-center pt-20' id='contact'>
          <p className='text-[3rem] xl:text-[2.5rem]'>
            Skontaktuj się z nami poprzez formularz.
          </p>
          <div className='flex flex-col py-10 gap-5 w-2/3 sm:w-4/5'>
            <input className='bg-transparent border border-secondary rounded-md focus:outline-0 p-3' placeholder='E-mail' type="text" name="email" id="email" />
            <input className='bg-transparent border border-secondary rounded-md focus:outline-0 p-3' placeholder='Miesięczne zarobki z Onlyfans' type="text" name="earnings" id="earnings" />
            <input className='bg-transparent border border-secondary rounded-md focus:outline-0 p-3' placeholder='Instagram nickname' type="text" name="instagram" id="instagram" />
            <textarea className='bg-transparent border border-secondary rounded-md focus:outline-0 p-3' placeholder='Wiadomośc' name="message" id="message" cols="30" rows="10"></textarea>


          </div>
          <p className='text-[1.5rem]'>
            ...lub bezpośrednio za pomocą Intagrama lub maila!
          </p>
          <div className='flex w-full justify-around mt-10'>
            <ul>
              <li><a href="https://instagram.com/addrjan/" target="_blank" rel="noreferrer" className='flex items-center gap-5'><Instagram className='w-10 h-auto'/>Doyeahbunny</a></li>
              <li className='flex items-center gap-5 mt-5'><Mail className='w-10 h-auto'/>kontakt@doyeahbunny.com</li>
            </ul>
            
          </div>

        </div>



      </div>
      <footer className='flex flex-col w-full h-72 bg-[#1a1a1a]'>
        <div className='flex justify-center items-center grow w-full'>
          <div>
            <img src={Logo} className='w-32 h-32' alt="" />
          </div>
    
        </div>

        <div className='flex justify-center items-center w-full border-t border-secondary py-5'>
          <div className='flex justify-between items-center w-1/2 '> 
          <p>
          Copyright © 2023 DoYeahBunny, management dla fotomodelek z Onlyfans
          </p>
          <a href="https://instagram.com/addrjan/" target="_blank" rel="noreferrer"><Instagram className='w-8 h-8'/></a>
          

      
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
