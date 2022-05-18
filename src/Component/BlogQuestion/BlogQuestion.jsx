import React from "react";
import { FcAbout } from "react-icons/fc";

const BlogQuestion = ({ questionData }) => {
  const { question, answer } = questionData;

  return (
    <article className="max-w-full text-[#0B1B2D] p-4 bg-gradient-to-t to-[#b1dffff9] from-[#d1ecfff9] rounded-xl basic-drop-shadow ease-in duration-300 hover:scale-105">
      <div className="text-9xl mb-5 flex justify-center items-center">
        <FcAbout />
      </div>

      <h1 className="text-[1.6rem] font-[600] font-mono mb-5">{question}</h1>
      <p className="text-xl text-justify leading-8">{answer}</p>
    </article>
  );
};

export default BlogQuestion;
