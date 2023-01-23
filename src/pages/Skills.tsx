import React from 'react'
import Skill from '../components/Skill'
type Props = {}

const Skills = (props: Props) => {
  return (
    <div className='h-screen w-screen snap-center bg-[#232425] text-white justify-center mx-auto flex flex-col items-center'>
       <h2 className='font-thin tracking-wider text-3xl self-start p-28'>SKILLS</h2>
       <div className='flex flex-wrap max-w-7xl gap-5 justify-center items-center'>
            <Skill skillName='codeceptjs' percentage='95%'/> 
            <Skill skillName='css' percentage='100%'/>
            <Skill skillName='git' percentage='100%'/>
            <Skill skillName='graphql' percentage='95%'/>
            <Skill skillName='html' percentage='100%'/>
            <Skill skillName='js' percentage='100%'/>
            <Skill skillName='mongodb' percentage='90%'/>
            <Skill skillName='nodejs' percentage='100%'/>
            <Skill skillName='python' percentage='85%'/>
            <Skill skillName='react' percentage='95%'/>
            <Skill skillName='sql' percentage='96%'/>
            <Skill skillName='tailwind' percentage='100%'/>
            <Skill skillName='ts' percentage='95%'/>
       </div>
    </div>
  )
}

export default Skills