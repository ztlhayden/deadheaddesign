import React from 'react'

const PortfolioItems = props => {
  return (
    <div className='max-w-xs w-full bg-bright_white text-center rounded shadow-md mr-2 mt-10'>
      <a href={props.url} target='_blank' rel='noreferrer'>
        <h3 className='font-semibold text-lg mt-1 mb-5'>{props.name || 'No Name'}</h3>
        {props.children}
      </a>
    </div>
  )
}

export default PortfolioItems
