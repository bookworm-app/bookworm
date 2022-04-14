import React, { useState } from 'react';
import Modal from 'react-modal';
import BookModal from './BookModal';
import '../styles.scss';


const Button = props => {
  const [apiBookInfo, setapiBookInfo] = useState(null);
  const { bookID } = props;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const setModalIsOpenToTrue =()=>{
      
// ----------GET REQUEST FOR API BOOK INFO-------------------------
   
     fetch(`/books/modal/${bookID}`, {
      method: 'GET'
    })
      .then(res => res.json()) 
      .then(res => {
        const result = Object.values(res);
        setapiBookInfo(result)
      })
      .then(setModalIsOpen(true))
      .catch(err=>{console.log(err)});
      
  };

  const setModalIsOpenToFalse = ()=>{
    setModalIsOpen(false)
  }

//-----------Modal window opens and closes on button clicks---------------

  return  (
    <div>
      <button type="info" className="info" id="infoBtn" onClick={setModalIsOpenToTrue}>MORE INFO</button>  
      <Modal isOpen={modalIsOpen} id="modal">
        <button onClick={setModalIsOpenToFalse}>X</button>
        <BookModal bookinfo={props.props.books} apiBookInfo={apiBookInfo}/>
      </Modal>
    </div>
  );
};

export default Button;