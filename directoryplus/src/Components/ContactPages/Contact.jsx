import React from 'react'

export default function Contact(props) {
  return (
    <div className='row p-md-2 mb-2 m-1 pb-3' style={{borderRadius: "20px", border: "1px solid #555"}}>
        <div className='col-2'><img src={`https://ui-avatars.com/api/?name=${props.tempContact.name}`}/></div>
        <div className='col-6'>
            <span className='text-warning'>{props.tempContact.name}</span>
            <div className='text-white-50'>
                {props.tempContact.phone}
                <br/>
                {props.tempContact.email}
            </div>
        </div>
        <div className='col-1'>
            <button onClick={()=>props.favClick(props.tempContact)} className={`btn btn-sm-1 ${props.tempContact.isFavourite ? "btn-warning" : "btn-outline-warning" }`}>
                <i className="bi bi-star-fill"></i>
            </button>
        </div>
        <div className='col-3'>
            <button className='btn btn-primary btn-sm-2'>
                <i className="bi bi-pencil-square"></i>
            </button>
            <button onClick={()=>props.delContact(props.tempContact.id)} className='btn btn-danger btn-sm-2'>
                <i className="bi bi-trash"></i>
            </button>
        </div>
        
    </div>
  )
}
