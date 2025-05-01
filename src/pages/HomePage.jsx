import React, { useEffect, useState } from 'react'
import { Branches, CommentsData } from './Data';

const HomePage = () => {
    const [Text, setText] = useState([])
    // Select Random comments (length:14)


    useEffect(() => {
        const getRandomComments = () => {
            const shuffled = CommentsData?.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, 14);
        };

        const randomFive = getRandomComments();
        setText(randomFive);
    }, [])

    // Handle Copy Text
    const HandleCopyText = (text) => {
        navigator.clipboard.writeText(text);
    }

    return (
        <div className='HomePage text-black mb-20 p-4'>
            <div className='container max-w-[500px] mx-auto text-center'>
                <h1 className='text-2xl font-bold mt-6 uppercase text-green-600'>Google Reviews</h1>
                <div className='mt-4 grid gap-6 '>
                    {
                        Branches?.map((item, i) => (
                            <div className="card bg-slate-200 rounded-xl p-4" key={i}>
                                <h3 className='text-lg font-bold'>{item?.name}</h3>
                                <textarea className='w-full mt-4 border border-solid rounded-md p-3' name="" rows={8} defaultValue={Text[i]?.text} id=""></textarea>
                                <div className='mt-3'>
                                    <button onClick={() => HandleCopyText(Text[i]?.text)} className='block mx-auto px-8 py-2 bg-green-700 transition-all hover:opacity-[0.8] text-white rounded-md'>Copy </button>
                                </div>
                                <div className='mt-4'>
                                    <a href={item?.url} target='_blank' className='block px-4 py-2 bg-green-700 text-white rounded-md transition-all hover:opacity-[0.8]'>Go to Review</a>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default HomePage
