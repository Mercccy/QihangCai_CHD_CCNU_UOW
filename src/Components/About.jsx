/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component
/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Machine Learning",
  "Multi-agent System",
  "Decision-making Algorithm",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p>
          {"I'm Qihang Cai, and I've earned "}
          {"Master's degrees"}
          {" in "}
          <em>{"Computer Science"} </em>
          <strong>(Top 5%)</strong>
          <em> from the </em>
          <em><i><u>University of Wollongong, Australia</u></i></em>
          {", and "}
          <em><i><u>Central China Normal University, China</u></i></em>
          {"."}
          {" I received my "}
          undergraduate degree
          {" "}
          <strong>(Top 15%)</strong>
          {" in "}
          <em><i>computer science</i></em>
          {" from "}
          <em><i><u>{"Chang'an University, China"}</u></i></em>
          {"."}
        </p>
        <hr />
        <p className="large"><strong>Current Research Focus</strong></p>
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1rem",
            margin: "4rem 4rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p>
          {"Well, folks, since July 2023, I've been on the quest for a kind-hearted soul willing to take on the noble role of being my PhD supervisor. It's been a rollercoaster ride so far. 🌟🎢 So, if you're out there, dear mentor, be ready to embark on this wild academic adventure with me. Let's make some scholarly magic happen! ✨🎓😄"}
        </p>


      </div>
    </section>
  );
};

export default About;
