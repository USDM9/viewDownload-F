import React from 'react'
import listLogo from '../../Assets/data/footer'

const Footer = () => {
  return (
    <footer role='Footer' className='bg-black  grid grid-cols-2  justify-center items-center p-[0.5rem] '>
      <div>
        <h2 className='text-textIconsColor'>
          Tecnologias Usadas En La Creacion.
        </h2>
      </div>
      <ul className='grid grid-rows-2 gap-2 p-1'>
        {listLogo.map((item, index) => {
          return (
            item.content === 'demo'
              ? <li key={index} className='flex justify-start items-center gap-2'>
                <img src={`${item.img}`} alt='' className='w-21 h-7 bg-white' />
                <h3 className='text-textIconsColor'>{item.content} </h3>
                </li>
              : <li key={index} className='flex justify-start items-center gap-2'>
                <img src={`${item.img}`} alt='' className='w-21 h-7' />
                <h3 className='text-textIconsColor'>{item.content}</h3>
              </li>
          )
        })}
      </ul>
    </footer>
  )
}

export default Footer
