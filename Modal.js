import React from 'react';

function Modal ( props){
    if(!props.show){
        return null
    }
    return (
    <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={e=>e.stopPropagation()}>
            <div className="modal-header">Modal header</div>
            <div className="modal-body"><h1>Opened mOdal</h1>
            </div>
            <div className="modal-footer">
                <button onClick={props.onClose}>Close</button>
            </div>


        </div>

    </div>)

}
export default Modal;
