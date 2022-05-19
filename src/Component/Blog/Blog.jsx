import React, { useState } from "react";
import BlogQuestion from "../BlogQuestion/BlogQuestion";
import Loading from "../Loading/Loading";

const Blog = () => {
  //loading tiger
  const [loading, setLoading] = useState(true);

  const [allQuestionData, setAllQuestionData] = useState([]);

  fetch(
    "https://raw.githubusercontent.com/tanvirgithub21/assainment-11-data/main/questionData.json"
  )
    .then((res) => res.json())
    .then((data) => {
      setAllQuestionData(data);
      setLoading(false);
    });

  return (
    <div className="relative">
      {loading && <Loading />}
      <div className="sectionContainer">
        <h2 className="text-4xl text-center mt-10">Question Answers</h2>
        <div className=" my-14 sm:my-28 grid sm:grid-cols-2 md:grid-cols-3 gap-20 mx-8 ">
          {allQuestionData.map((questionData) => (
            <BlogQuestion key={questionData?._id} questionData={questionData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
