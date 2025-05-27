import { Link } from 'react-router-dom'
import { TabukArea } from '../Data'

const BranchesList = () => {
    return (
        <div className='HomePage text-black mb-20 p-4'>
            <div className='container max-w-[500px] mx-auto text-center'>
                <h1 className='text-2xl font-bold mt-6 uppercase text-green-600'>All Branches Each Review</h1>
                <div className='mt-4 grid gap-6 '>
                    {
                        TabukArea?.map((item, i) => (
                            <div className="card bg-slate-200 rounded-xl p-4" key={i}>
                                <h3 className='text-lg font-bold'>{item?.name}</h3>
                                <div className='mt-4'>
                                    <Link to={`/branches/each-review/${item?.route}`}
                                        className='block px-4 py-2 bg-green-700 text-white rounded-md transition-all hover:opacity-[0.8]'
                                    >GO - {item?.name}</Link>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <Link to={'/'} className='mt-8 px-4 py-2 block bg-slate-500 text-white rounded-lg transition-all hover:opacity-[0.8]'>
                    Home
                </Link>
            </div>
        </div>
    )
}

export default BranchesList
