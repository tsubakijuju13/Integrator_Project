import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import Nav from './Nav'

export default function Header() {
  return (
    <header className='bg-gray-800/[0.5] sticky top-0 z-[1] flex-wrap mx-auto flex w-full items-center justify-between border-b border-gray-500 pl-8 pr-8 py-2'>
        <Logo />
        <Nav />
    </header>
  )
}
