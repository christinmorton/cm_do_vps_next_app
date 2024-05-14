import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col md:flex-row items-center md:items-baseline md:justify-between p-16 space-y-12 md:space-x-0'>
        <div className='flex flex-col p-4 md:flex-row items-center space-x-0 space-y-4 md:space-x-4 md:space-y-0'>
            {/* <ul className='flex flex-col p-4 md:flex-row space-x-0 space-y-4 md:space-x-4 md:space-y-0'> */}
            <p>Link 1</p>
            <p>Link 2</p>
            <p>Link 3</p>
            <p>Link 4</p>
            {/* </ul> */}
        </div>
        
        <div className='items-center'>
            <h1 className='text-center'>Logo</h1>
        </div>
        
        <div className='flex flex-col p-4 items-center md:flex-row space-x-0 space-y-4 md:space-x-4 md:space-y-0'>
            {/* <ul className=' list-none flex flex-col p-4 md:flex-row space-x-0 space-y-4 md:space-x-4 md:space-y-0'> */}
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
            <p>LinkedIn</p>
            {/* </ul> */}
        </div>
    </footer>
  )
}

export default Footer