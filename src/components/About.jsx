import React from 'react'

const About = () => {
  return (
    <div
      name="about"
      className="w-full  bg-gradient-to-b from-sky-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
        Hello World! I'm Mr. G. Venkata Sai Krishna, a dynamic individual deeply passionate about technology. Armed with a Bachelor's degree in Computer Science and Engineering from Annamacharya Institute of Technology and Sciences, Rajampet, I've honed my technical skills, achieving an impressive 8.15 CGPA.
<br/><br/>
Proficient in Java, Python, HTML, CSS, JavaScript, React, Spring Boot, and MySQL, I specialize in crafting robust solutions for diverse challenges. With a relentless pursuit of excellence, both academically and professionally, I am driven by a thirst for knowledge and a passion for innovation.
<br/><br/>
I am eager to leverage my skills and expertise as a full-stack developer to contribute meaningfully to cutting-edge projects and drive impactful solutions.
        </p>
      </div>
    </div>
  )
}

export default About