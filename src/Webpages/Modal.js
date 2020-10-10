import React, {useState} from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')

function ModalBackDrop () {

    const[isModalOpen, setIsModelOpen] = useState(false)
    return (
        <div>
           <br />
           <button className="button" onClick={() => setIsModelOpen(true)}>Open up!</button>
           <Modal className="modal"
             isOpen={isModalOpen} 
             onRequestClose={() => setIsModelOpen(false)}
                style = {
                   {
                        overlay: {
                           background : 'light-grey'
                        },

                        content: {
                           color: 'none'
                           
                        },
                    }
                }
            >  
                <div className="adjusting">
                  <h1>Hello There !</h1>
                  <h3>I'm backdrop!</h3>
                  <h3>You can also call me Model.</h3>
                </div>
               <br />
               <div>
                   <button className="buttonsecond" 
                   onClick={() => setIsModelOpen(false)}>Close</button>
               </div>
           </Modal>
        </div>
    );
}

export default ModalBackDrop;