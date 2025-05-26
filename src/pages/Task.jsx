import React, { useEffect, useState } from 'react'
import { TabukBranch } from './Data';

// ULAYYA
const RLink = 'https://g.page/r/CbksOKQn0vozEBM/review'

const Task = () => {
    const [text, setText] = useState([])

    const RandomCommentGenerate = (Data) => {
        const shuffled = Data?.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 1); // Single
    };

    // Select Random comments (length:14)
    useEffect(() => {
        setText(RandomCommentGenerate(TabukBranch?.comments));
    }, [])

    // Handle Go Review and Copy Text
    const HandleReview = async ({ text }) => {
        await navigator.clipboard.writeText(text);
        window.open(`${RLink}`, '_blank');
    }

    useEffect(() => {
        console.log("1");
        if (text[0]?.text) {
            HandleReview({ text: text[0]?.text });
        }
    })
    
    return (
        <div className='Task-page'>
            <div className=' text-black'>
                <div className='container max-w-[500px] h-screen mx-auto text-center'>
                    <div className='relative p-4 h-full'>
                        <div className='absolute top-1/2 left-1/2 -translate-1/2'>
                            <button onClick={() => HandleReview({ text: text[0]?.text })}
                                className='px-6 py-2 bg-green-700 text-white rounded-lg font-medium hover:opacity-[0.8]'>Go to Review - Ulayya Branch</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Task
