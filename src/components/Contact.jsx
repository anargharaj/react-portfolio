import React from 'react'

function Contact() {
  return (
    <>
    <div className='container-fluid p-5 mt-5'>
        <h1>contact us</h1>
        <textarea name="" id="" className='form-control' placeholder='enter your message'></textarea>
        <input type="text" name="" id="" className="form-control mt-3"  placeholder='enter your mail id'/>
       <button className='btn btn-info mt-4'>send</button>
    </div>
    </>
  )
}

export default Contact