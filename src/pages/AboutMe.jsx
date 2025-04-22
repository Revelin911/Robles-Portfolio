import './AboutMe.jsx';
// import { FaUserCircle } from 'react-icons/fa';
// import { useState } from 'react';

function AboutMe() {
    return (
        <section className="about-section">
      <h2 className="about-heading">About me</h2>
      <div className="about-content"></div>
        {/* <FaUserCircle className="profile-icon" /> */}
        <div className="about-text"></div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequatur quod quam error excepturi sit est laborum distinctio nemo. Delectus obcaecati ullam rem omnis aliquam, repudiandae autem iste cum a!
            </p>
            <p>
                My Skills Include:
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </p>
        </section>
  );
};

export default AboutMe;