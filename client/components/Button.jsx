import React, { useState } from 'react';
import Modal from 'react-modal';
import BookModal from './BookModal';
import '../styles.scss';


const Button = props => {
  const [apiBookInfo, setapiBookInfo] = useState(null);
  const { bookid } = props;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const setModalIsOpenToTrue =()=>{
      setModalIsOpen(true)

  // ---GET REQUEST FOR API BOOK INFO
      // useEffect(()=>{
      //   fetch(`/books/modal/${bookID}`, {
      //     method: 'GET'
      //   })
      //     .then(res => res.json()) 
      //     .then(res => {
      //       const apiBookInfo = Object.values(res);
      //       setapiBookInfo(apiBookInfo)
      //       console.log(apiBookInfo[0])
      //     })
          
      //     .catch(err=>{console.log(err)})
      // },[])

  }
  const setModalIsOpenToFalse = ()=>{
    setModalIsOpen(false)
  }

  return  (
    <div>
      <button type="info" className="info" id="infoBtn" onClick={setModalIsOpenToTrue}>MORE INFO</button>  
      <Modal isOpen={modalIsOpen} id="modal">
        <button onClick={setModalIsOpenToFalse}>X</button>
        {/* {apiBookInfo && apiBookInfo.map(books => <BookModal key={"book"+ books.readinglistid} bookInfo={bookInfo}/>)} */}
        <BookModal bookinfo={props.books}/>
      </Modal>
    </div>
  );
};

export default Button;