import React, { useState } from 'react';
import { ClimbingBoxLoader } from 'react-spinners';
import BlogQuestion from '../BlogQuestion/BlogQuestion';

const Blog = () => {

    const [allQuestionData, setAllQuestionData] = useState([])

    fetch("https://raw.githubusercontent.com/tanvirgithub21/assainment-11-data/main/questionData.json")
    .then(res => res.json())
    .then(data => setAllQuestionData(data))

    return (
        <div className='sectionContainer'>
            <div>
                <h2 className='text-4xl text-center mt-10'>Question Answers</h2>
                <div className=' my-14 sm:my-28 grid sm:grid-cols-2 md:grid-cols-3 gap-20 mx-8 '>
                    {
                        allQuestionData.map(questionData => (
                            <BlogQuestion key={questionData?._id} questionData={questionData} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;