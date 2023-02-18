import './App.css';
import React, { useState } from 'react';
import imgdata from "./imgdata"
function App() {
  const images = imgdata.data.images
  const [pic1, setImage] = useState("")
  const [pic2, setImage2] = useState("")
  const [pic3, setImage3] = useState("")
  function showJava() {
    setImage(images[0].url)
  }
  function showPython1() {
    setImage2(images[1].url)
  }
  function showPython2() {
    setImage3(images[2].url)
  }
  return (
    <body>
      <div class="page">
        <nav>
          <h1>Zakary <span>Koslosky</span></h1>
        </nav>
        <h2>Projects</h2>
        <article>
          <section id="Project 1">
            <h1>Course Schedular GUI</h1>
            <p>In computer science 221 we were responsible for creating a GUI in java that would act as
              a course schedular. This GUI had different functions for different people. For example, if you were
              a student using the GUI you would be able to add classes, drop classes and see your schedule. If
              you were a staff member you could view students and see their courses and register more courses that
              could possibly be taken.
            </p>
            <button type="button" id="1" onClick={showJava}>Language</button>
            <img src={pic1} className="pictures" alt="img"></img>

          </section>
          <hr />
          <section id="Project 2">
            <h1>Library System</h1>
            <p>This was a final project in my first semester at Penn State. The task was to develop library
              management software that kept track of
              student’s names, their fines, their account balance, etc. For this project I used VS code to write
              in the python language.
              This project was difficult for many reasons, the most difficult
              being working with two students that I did not know. Although, that did not deter our group, we
              scheduled days to work on the code,
              established deadlines within the project, and all contributed to writing and testing the code. Since
              we did those tasks so well,
              we finished on time and our software worked flawlessly.</p>
            <button type="button" id="2" onClick={showPython1}>Language</button>
            <img src={pic2} className="pictures" alt="img"></img>
          </section>
          <hr />
          <section id="Project 3">
            <h1>Interactive Video Game</h1>
            <p> In my final year of high school, I was tasked with developing a program that made an interactive
              ‘video game’ with a partner. After discussion, we decided to develop a basic Mario level. To write
              this code we used CS Academy, basically a version of python that is built for beginners geared
              towards animations and pictures. This was not an easy task for us, it took much discussion,
              testing, and at certain points was frustrating. Although, in the end we were able to design the
              program that was fully functioning, and we received an A. It felt great to get an experience like
              this that exposed me to creative critical thinking and collaboration.</p>
          </section>
          <button type='button' onClick={showPython2}>Language</button>
          <img id="image3" src={pic3} className="pictures" alt="img"></img>
        </article>
        <hr />
        <a href="https://github.com/zakkoz">
          <h4> Here is a link to my Github!</h4>
        </a>
      </div>
    </body>
  );
}

export default App;
