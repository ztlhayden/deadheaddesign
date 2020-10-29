import React from 'react'

const PortfolioItems = props => {
  return (
    <div className='flex flex-wrap justify-center'>
      <div className='bg-bright_white max-w-xs w-full text-center rounded shadow-md'>
        <a href={props.url}>
          <h3 className='font-semibold text-lg mt-1 mb-5'>{props.name}</h3>
          {props.children}
        </a>
      </div>
    </div>
  )
}

export default PortfolioItems
