import React from 'react'
import { Nav } from './nav'
type Props = {
  dark: boolean;
}

function Header({dark}: Props) {
  return (
    <header className={`sticky top-0 max-w-7xl p-7 flex justify-between mx-auto z-10 snap-start ${dark ? 'text-white': 'text-black'} `}>
      <h1 className='text-xl lg:text-[24px] font-thin tracking-wider'>LUIS PINEDA</h1>
      <Nav dark={dark} />
    </header>
  )

}

export default Header