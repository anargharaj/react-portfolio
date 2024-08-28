import React from 'react'

function Intro() {
  return (
    <>
    <div className='row container-fluid align-items-center' style={{height:'90vh'}}>
        <div className='col p-4'>
            <h1>portfolio webpage</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cupiditate tempora, ab eius sint veritatis dolorum iusto laborum, numquam harum consequuntur inventore molestiae fugiat. Consequuntur modi laudantium excepturi! Mollitia, explicabo!</p>
            <a href="" className='btn btn-success'>visit</a>

        </div>
        <div className='col'>
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/portfolio-illustration-download-in-svg-png-gif-file-formats--actress-making-multimedia-industry-pack-illustrations-5624195.png" alt="" className='img-fluid' />

        </div>
         
    </div>
    </>
  )
}

export default Intro