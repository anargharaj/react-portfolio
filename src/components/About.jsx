import React from 'react'

function About() {
  return (
    <>
    <div className='p-5 mt-5 row container-fluid'>
        <div className='col-8'>
        <h1>About us</h1>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ullam molestiae veritatis optio repellat, harum unde repudiandae illum blanditiis quos maiores illo distinctio ratione eum alias iusto sed laborum aliquam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque corrupti labore similique adipisci nisi deleniti cum, iure obcaecati, optio totam, rem voluptate fugit quos eligendi expedita! Laudantium tenetur tempora molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis eligendi maxime ex, veritatis nisi neque quisquam sapiente fugit doloremque odit distinctio illo. Aut maiores, quidem quibusdam est consequuntur itaque amet!</p>
        </div>
        <div className='col-4'>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/OqyURAoQ4NQ?si=ItoLb_twIKnGySXm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
    </>
  )
}

export default About