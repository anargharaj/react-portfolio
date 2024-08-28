import React from 'react'
import'./Footer.css'

function Footer() {
  return (
    <>
    <div className='container-fluid bg-primary'>
        <div className='row'>
            <div className="col">
                <h3>portfolio</h3>
                <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure error voluptate est nobis quo amet ducimus omnis, neque dolores, sit facilis quas repellat? Iste temporibus similique neque nobis laudantium? Voluptates!</p>
            </div>
            <div className="col">
                <h3>important links</h3>
                <a href="">link1</a>
                <a href="">link2</a>
                <a href="">link3</a>

            </div>
            <div className="col">
                <h3>feed back</h3>
                <textarea name="" id="" className='form-control mb-3'></textarea>
                <button>submit</button>
            </div>

        </div>
        <h4 className='text-center'>portfolio 2024 &copy;all rights are reserved</h4>
     </div>
        </>
  )
}

export default Footer