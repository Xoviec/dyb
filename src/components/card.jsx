import {ReactComponent as Check} from '../images/check.svg'

export const Card = ({planName, profitTab, percentage, secret}) =>{

    
    //standard / plus / pro
    return(
        <div className="flex flex-col items-center w-96 min-h-[30rem] overflow-hidden bg-[#1a1a1a] rounded-lg p-5 text-text relative border border-secondary hover:scale-105 transition sm:w-72 lg:min-h-0 py-10">
            <div className={`${secret ? 'absolute flex justify-center items-end text-[3rem] w-full h-full backdrop-blur-sm bottom-0 pb-12  dupsko' : 'hidden'} `}>
                <div className='absolute top-10 -left-28 sm:-left-20 flex items-center justify-center  w-full h-10 sm:items-end bg-secondary -rotate-45'>
                    <p className='font-bold text-[1.5rem]'>
                        Wkrótce
                    </p>
                </div>
            </div>
            <p className=" ">{planName}</p>
            <p className="text-[5rem] font-bold sm:text-[3rem] ">{percentage}%</p>
            <p className="text-gray-600">Twoich zarobków/ mies*</p>
            <ul className="flex flex-col gap-5 pt-6 text-left  ">
                {
                    profitTab.map((profit)=>(
                        <li className='flex text-[1.4rem] items-center sm:text-[1rem]'><Check />{profit}</li>
                    ))
                }
            </ul>
        </div>
    )


}
