import React,{useState} from 'react';
import ReactReadMoreReadLess from "react-read-more-read-less";
import {longText} from '../../component/text';
import  {Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import './project.scss'

const Project=()=> {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return  (
  <div className='app-container' >
  <div className='project-grid'>
    <div >
      <div className="project-container">
  <img src={require('../../images/bg5.jpg')}  alt="project-bg-img"/>
  <Link to='/image-galery' className="project-btn">Galery</Link>

</div>
<span>
<div className='rm-rl'>
      <ReactReadMoreReadLess
        charLimit={250}
        readMoreText={"Read more ▼"}
        readLessText={"Read less ▲"}
        readMoreClassName="read-more-less--more"
        readLessClassName="read-more-less--less"
      >
        {longText}
      </ReactReadMoreReadLess>
    </div>
</span>
    </div>

    <div>
      <div className="project-container">
  <img src={require('../../images/bg5.jpg')}  alt="project-bg-img"/>
  <Link to='/galery-in-progres' className="project-btn">Galery</Link>

</div>
<span>
<div className='rm-rl'>
      <ReactReadMoreReadLess
        charLimit={150}
        readMoreText={"Read more ▼"}
        readLessText={"Read less ▲"}
        readMoreClassName="read-more-less--more"
        readLessClassName="read-more-less--less"
      >
        {longText}
      </ReactReadMoreReadLess>
    </div>
</span>
    </div>
<div>
<div className="project-container">
  <img src={require('../../images/bg5.jpg')}  alt="project-bg-img"/>
<div>
<div className='project-btn'  onClick={handleShow}>
        Galery
      </div>

      <Modal 
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <div className='x-container'>
        <button className='modal-button'  onClick={handleClose} closeButton>
      X
        </button>
       </div>
     <h1 className='modal-container-message' >
     WE APOLOGIZE, THE GALLERY IS IN PREPARATION ...
     </h1>
        <div>
          <button className='modal-button'  onClick={handleClose}>
          Close
          </button>
        </div>
      </Modal>
</div>
 </div>
<span>
  <div className='rm-rl'>
      <ReactReadMoreReadLess
        charLimit={50}
        readMoreText={"Read more ▼"}
        readLessText={"Read less ▲"}
        readMoreClassName="read-more-less--more"
        readLessClassName="read-more-less--less"
      >
        {longText}
      </ReactReadMoreReadLess>
    </div>
  </span>
    </div>
    
  </div>
  </div>
);
}
  
export default Project;