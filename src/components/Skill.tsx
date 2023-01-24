import React from 'react'



type Props = {
    skillName: string,
    percentage: string,
    
}

const Skill = ({skillName, percentage}: Props) => {
    
  return (
    <div className='relative flex items-center justify-center mx-auto bg-[#274A71] hover:bg-slate-100 h-60 w-60 rounded-full group  hover:h-52 hover:w-52 transition-all duration-500 ease-in-out cursor-pointer '>
        <img className='h-40 group-hover:opacity-0 transition-all duration-500 ease-in-out' src={require(`../assets/icons/${skillName ==='git'|| skillName === 'ts'? skillName +'.png': skillName + '.svg'}`)} alt={skillName} />
        <div className='absolute  opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out'>
            <h1 className='flex items-center justify-center h-full text-4xl text-black'>{percentage}</h1>
        </div>
    </div>
  )
}

export default Skill