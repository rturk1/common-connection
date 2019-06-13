import React from 'react'

export default class Popular extends React.Component {
  render() {
    const items = ['Living','Wellness','Career','About','Contact']

    return (
      <ul className='flex-center'>
        {items.map((item) => (
          <li key={item}>
            <button className='btn-clear nav-link'>
              {item}
            </button>
          </li>
        ))}
      </ul>
    )
  }
} 