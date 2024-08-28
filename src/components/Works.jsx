import React from 'react'

function Works() {
  return (
    <>
    <h1 className='text-center mt-3'>Our Works</h1>
    <div className='d-flex justify-content-around flex-wrap p-3'>
        <div className='card ' style={{width:'18rem'}}>
            <img src="https://img.freepik.com/free-vector/gradient-interview-portfolio-template_23-2149220443.jpg" alt="" height={'200px'} />
            <div className='card-body'>
                <h5>works1</h5>
            </div>
        </div>
        <div className='card ' style={{width:'18rem'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ZWQlo8v2szeR55CNOTMHZHTirPtsHEU2Qg&s" alt=""  height={'200px'}/>
            <div className='card-body'>
                <h5>works2</h5>
            </div>
        </div>
        <div className='card ' style={{width:'18rem'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRHYC0Ti7AexMY6JjpbXbhwoRIJ5dyfv8J3A&s" alt=""  height={'200px'}/>
            <div className='card-body'>
                <h5>works3</h5>
            </div>
        </div>
        <div className='card ' style={{width:'18rem'}}>
            <img src="https://mir-s3-cdn-cf.behance.net/projects/404/ed94c1191636143.Y3JvcCwyODc2LDIyNTAsNTYyLDA.jpg" alt=""  height={'200px'} />
            <div className='card-body'>
                <h5>works4</h5>
            </div>
        </div>

    </div>
    </>
  )
}

export default Works