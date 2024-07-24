import React from 'react'
import Bposta from '../Posthome/Bposta'
import Fdposta from '../Posthome/Fdposta'
import Fposta from '../Posthome/Fposta'
import Posta from '../Posthome/Posta'

const Posts = () => {
  return (
    <div className='posts1'>
      <Posta/>
      <Bposta/>
      <Fposta/>
      <Fdposta/>
      
    </div>
  )
}

export default Posts

