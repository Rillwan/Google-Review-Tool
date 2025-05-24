import React, { useEffect, useState } from 'react'
import { DammamBranch, DomaBranch, HaqlBranch, SakakaBranch, TabukBranch } from './Data';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [Texts, setTexts] = useState({
        Tabuk: [],
        Doma: [],
        Damam: [],
        Haql: [],
        Sakaka: [],
    });

    const RandomCommentsGenerate = (Data) => {
        const shuffled = Data?.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 14);
    };


    // Select Random comments (length:14)
    useEffect(() => {
        setTexts({
            Tabuk: RandomCommentsGenerate(TabukBranch?.comments),
            Damam: RandomCommentsGenerate(DammamBranch?.comments),
            Sakaka: RandomCommentsGenerate(SakakaBranch?.comments),
            Haql: RandomCommentsGenerate(HaqlBranch?.comments),
            Doma: RandomCommentsGenerate(DomaBranch?.comments),
        });
    }, [])
    
    // Handle Copy Text
    const HandleCopyText = (text) => {
        navigator.clipboard.writeText(text);
    }

    // Handle Go Review and Copy Text
    const HandleReview = async ({ url, text }) => {
        await navigator.clipboard.writeText(text);
        window.open(`${url}`, '_blank');
    }


    return (
        <div className='HomePage text-black mb-20 p-4'>
            <div className='container max-w-[500px] mx-auto text-center'>
                <h1 className='text-2xl font-bold mt-6 uppercase text-green-600'>Google Reviews</h1>

                {/* Tabuk  */}
                <h2 className='text-lg mt-6 font-bold underline'>Tabuk</h2>
                <div className='mt-5 grid gap-6 '>
                    {
                        TabukBranch?.branches?.map((item, i) => (
                            <div className="card bg-slate-200 rounded-xl p-4" key={i}>
                                <h3 className='text-lg font-bold'>{item?.name}</h3>
                                <textarea className='w-full mt-4 border border-solid rounded-md p-3' name="" rows={8} defaultValue={Texts?.Tabuk[i]?.text} id=""></textarea>
                                <div className='mt-4'>
                                    <button onClick={() => HandleReview({ url: item?.url, text: Texts?.Tabuk[i]?.text })}
                                        className='block w-full px-4 py-2 bg-green-700 text-white rounded-md transition-all hover:opacity-[0.8]' >Go to Review</button>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* DAMMAM  */}
                <h2 className='text-lg mt-6 font-bold underline'>DAMMAM</h2>
                <div className='mt-5 grid gap-6 '>
                    {
                        DammamBranch?.branches?.map((item, i) => (
                            <div className="card bg-slate-200 rounded-xl p-4" key={i}>
                                <h3 className='text-lg font-bold'>{item?.name}</h3>
                                <textarea className='w-full mt-4 border border-solid rounded-md p-3' name="" rows={8} defaultValue={Texts?.Damam[i]?.text} id=""></textarea>
                                <div className='mt-4'>
                                    <button onClick={() => HandleReview({ url: item?.url, text: Texts?.Damam[i]?.text })}
                                        className='block w-full px-4 py-2 bg-green-700 text-white rounded-md transition-all hover:opacity-[0.8]' >Go to Review</button>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* SAKAKAH  */}
                <h2 className='text-lg mt-6 font-bold underline'>SAKAKAH</h2>
                <div className='mt-5 grid gap-6 '>
                    {
                        SakakaBranch?.branches?.map((item, i) => (
                            <div className="card bg-slate-200 rounded-xl p-4" key={i}>
                                <h3 className='text-lg font-bold'>{item?.name}</h3>
                                <textarea className='w-full mt-4 border border-solid rounded-md p-3' name="" rows={8} defaultValue={Texts?.Sakaka[i]?.text} id=""></textarea>
                                <div className='mt-4'>
                                    <button onClick={() => HandleReview({ url: item?.url, text: Texts?.Sakaka[i]?.text })}
                                        className='block w-full px-4 py-2 bg-green-700 text-white rounded-md transition-all hover:opacity-[0.8]' >Go to Review</button>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* HAQL  */}
                <h2 className='text-lg mt-6 font-bold underline'>HAQL</h2>
                <div className='mt-5 grid gap-6 '>
                    {
                        HaqlBranch?.branches?.map((item, i) => (
                            <div className="card bg-slate-200 rounded-xl p-4" key={i}>
                                <h3 className='text-lg font-bold'>{item?.name}</h3>
                                <textarea className='w-full mt-4 border border-solid rounded-md p-3' name="" rows={8} defaultValue={Texts?.Haql[i]?.text} id=""></textarea>
                                <div className='mt-4'>
                                    <button onClick={() => HandleReview({ url: item?.url, text: Texts?.Haql[i]?.text })}
                                        className='block w-full px-4 py-2 bg-green-700 text-white rounded-md transition-all hover:opacity-[0.8]' >Go to Review</button>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* DOMA  */}
                <h2 className='text-lg mt-6 font-bold underline'>DOMA</h2>
                <div className='mt-5 grid gap-6 '>
                    {
                        DomaBranch?.branches?.map((item, i) => (
                            <div className="card bg-slate-200 rounded-xl p-4" key={i}>
                                <h3 className='text-lg font-bold'>{item?.name}</h3>
                                <textarea className='w-full mt-4 border border-solid rounded-md p-3' name="" rows={8} defaultValue={Texts?.Doma[i]?.text} id=""></textarea>
                                <div className='mt-4'>
                                    <button onClick={() => HandleReview({ url: item?.url, text: Texts?.Doma[i]?.text })}
                                        className='block w-full px-4 py-2 bg-green-700 text-white rounded-md transition-all hover:opacity-[0.8]' >Go to Review</button>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <Link to={'/locations'} className='mt-8 px-4 py-2 block bg-slate-500 text-white rounded-lg transition-all hover:opacity-[0.8]'>
                    View All Branches Location
                </Link>
            </div>
        </div>
    )
}

export default HomePage
