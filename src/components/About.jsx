import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (

    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Stitchy!</h1>
            <p className="lead mb-4">
              This website is founded by me .. I started my knitting journey since 4 years and
              it has been one of my favourite hobits since that time. I get an average of 300$ from knitting each year.
              I started doing baby products such as hats, gloves and tiny socks.
              However, while I was progressing in
              my work, I found that I can make it better. I started increasing my work to make it more challenging.
              I started with adults crochet clothing such as sweaters, hats and any other thing. Now I can do
              any thing related to handmade knitting. Consider Logging in this website and if you have any question
              related to this don't hesitate to contact me!
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">Conatact Us</NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src="/pics/about/1.jpg" alt="About this!" height="400px" width="400px" />
          </div>
        </div>
      </div>

    </div>

  )
}

export default About;
