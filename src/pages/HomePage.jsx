import React, { useEffect, useState } from 'react'
import { DammamBranch, DomaBranch, HaqlBranch, SakakaBranch, TabukBranch } from './Data';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from 'react-icons/fa6';
import { FaTiktok } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";

const SocialLinks = [
    {
        Icon: FaFacebookF,
        link: 'https://www.facebook.com/share/1BWNTuoJbq/?mibextid=wwXIfr',
    },
    {
        Icon: FaInstagram,
        link: 'https://www.instagram.com/atyaabaltazaj_ksa?igsh=aWVwcG5uMWZzdnZx',
    },
    {
        Icon: FaTiktok,
        link: 'https://www.tiktok.com/@atyabtazaj?_t=ZS-8wcnqNh7aIC&_r=1',
    },
    {
        Icon: FaSnapchatGhost,
        link: 'https://www.snapchat.com/add/atyaabtazaj',
    },
]

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

                {/* Social Links  */}
                <div className='mt-8'>
                    <div className='flex gap-4 items-center justify-center flex-wrap'>
                        {
                            SocialLinks?.map((item, i) => (
                                <div className='' key={i}>
                                    <a href={item?.link} target='_blank'
                                        className='p-2 flex bg-green-700 text-white rounded-full w-[50px] h-[50px] items-center justify-center hover:opacity-[0.8]'
                                    >
                                        {
                                            item?.Icon && (<item.Icon className='flex text-[25px]' />)
                                        }
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
