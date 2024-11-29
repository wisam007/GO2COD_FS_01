import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiAppwrite,
  SiGit,
  SiExpress,
} from "react-icons/si";
import Heading from "../components/Heading";

const AboutPage = () => {
  return (
    <>
      <Heading title={"About Me"} />
      <div className="flex flex-col md:flex-row bg-green-50 boarder-2 boarder-sm boarder-green-100 min-h-screen p-6">
        <aside className="md:w-1/3  top-16 self-start md:self-auto">
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
            {/* Profile Photo */}
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg">
              <img
                src="myPic.jpg"
                alt="Wissam Jemal"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Name and Title */}
            <h1 className="text-3xl font-bold mt-4 text-gray-800">
              Wissam Jemal
            </h1>
            <p className="text-lg text-gray-600 text-center">
              Full-Stack Developer
            </p>

            {/* Description */}
            <p className="text-gray-700 text-center mt-4 leading-relaxed">
              BSc. in Computer Science & Engineering
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-6 text-2xl text-gray-600 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com" // Replace with your GitHub
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://instagram.com" // Replace with your Instagram
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content with Skills */}
        <main className="md:w-2/3 mt-8 md:mt-0 md:ml-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              My Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { icon: <SiHtml5 className="text-orange-500" />, name: "HTML" },
                { icon: <SiCss3 className="text-blue-500" />, name: "CSS" },
                {
                  icon: <SiJavascript className="text-yellow-400" />,
                  name: "JavaScript",
                },
                {
                  icon: <SiReact className="text-blue-400" />,
                  name: "React.js",
                },
                {
                  icon: <SiNextdotjs className="text-black" />,
                  name: "Next.js",
                },
                {
                  icon: <SiExpress className="text-blue-600" />,
                  name: "Express.js",
                },
                {
                  icon: <SiNodedotjs className="text-green-600" />,
                  name: "Node.js",
                },
                {
                  icon: <SiMongodb className="text-green-500" />,
                  name: "MongoDB",
                },
                {
                  icon: <SiFirebase className="text-yellow-500" />,
                  name: "Firebase",
                },
                {
                  icon: <SiAppwrite className="text-red-600" />,
                  name: "Appwrite",
                },
                { icon: <SiGit className="text-red-500" />, name: "Git" },
                { icon: <FaGithub className="text-black" />, name: "GitHub" },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-white shadow-md rounded-lg p-4"
                >
                  {skill.icon}
                  <span className="text-sm text-gray-700 mt-2">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AboutPage;
