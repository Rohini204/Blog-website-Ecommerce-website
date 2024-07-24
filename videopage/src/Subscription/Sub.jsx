import Basic from './Basic';
import Business from './Business';
import Pro from './Pro';
import './sub.css';

const Sub = () => {
  return (
    <>
    <div className="top1">
    </div>
    <hr/>
    <div className='subs'>
        <Basic/>
        <Pro/>
        <Business/>
    </div>
    </>
  )
}

export default Sub