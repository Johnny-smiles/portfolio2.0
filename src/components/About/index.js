import React from 'react'
import coverImage from "../../assets/cover/Me.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
      <p>
                 With experience in wed design, videoagraphy and automation, John knows that sensory pleasing style mixed with functionality is the ultimate user experience.
                With a robust repertoire of life experiences to draw from, John is eager to work with you to bring your ultimate user experience into fruition.
            </p>
      </div>
    </section>
  )
}

export default About