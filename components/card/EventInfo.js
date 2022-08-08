// External Imports
import Link from 'next/link';

const EventInfo = ({ eventInfo }) => {

    const keys = Object.keys(eventInfo);

    if (keys.length) {

        return (

            <>
                {/* {filterInterValDataWithTitle && (
                    <>
                        {filterInterValDataWithTitle.map((intervalWithTitle, ind) => (
                            <div className='conference-info mb-[16px] text-center' key={ind}>
                                {intervalWithTitle?.filterIntervals.length && (
                                    <p className="date h4 mb-[10px]">{intervalWithTitle?.day}</p>
                                )}
                                {intervalWithTitle?.filterIntervals.length && (
                                    <div className='grid gap-2 grid-cols-1'>
                                        {intervalWithTitle?.filterIntervals.length && intervalWithTitle?.filterIntervals.map((intervalsData, index) => (
                                            <Link href={`conferences/${eventInfo?.id}`} key={index}>
                                                <a className="info-card text-left p-[24px_20px] bg-[#FFFCF6] rounded-[8px] border-[1px] border-solid border-[#FCB12A] transition-all duration-500 translate-y-[0] hover:translate-y-[-3px]">
                                                    <p className='info-card-title h4 text-[#725114] leading-[1.1875em]'>{intervalsData?.title}</p>
                                                    <p className='text-[12px] leading-[1.25em] text-[#8B6F3B] mt-[8px]'>{intervalsData?.begin} -{intervalsData?.end}</p>
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </>
                )} */}

                <div className='conference-info mb-[16px] text-center'>
                    <p className="date h4 mb-[10px]">{eventInfo?.day}</p>
                    <div className='grid gap-2 grid-cols-1'>
                        {eventInfo.filterIntervals.map((intervalsData, index) => (
                            <Link href={`conferences/${eventInfo?.id}`} key={index}>
                                <a className="info-card text-left p-[24px_20px] bg-[#FFFCF6] rounded-[8px] border-[1px] border-solid border-[#FCB12A] transition-all duration-500 translate-y-[0] hover:translate-y-[-3px]">
                                    <p className='info-card-title h4 text-[#725114] leading-[1.1875em]'>{intervalsData?.title}</p>
                                    <p className='text-[12px] leading-[1.25em] text-[#8B6F3B] mt-[8px]'>{intervalsData?.begin} -{intervalsData?.end}</p>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* {eventInfo.map((singleEve, ind) => (
                    <div className='conference-info mb-[16px] text-center' key={ind}>
                        <p className="date h4 mb-[10px]">{singleEve?.day}</p>

                        <div className='grid gap-2 grid-cols-1'>
                            {singleEve.filterIntervals.map((intervalsData, index) => (
                                <Link href={`conferences/${singleEve?.id}`} key={index}>
                                    <a className="info-card text-left p-[24px_20px] bg-[#FFFCF6] rounded-[8px] border-[1px] border-solid border-[#FCB12A] transition-all duration-500 translate-y-[0] hover:translate-y-[-3px]">
                                        <p className='info-card-title h4 text-[#725114] leading-[1.1875em]'>{intervalsData?.title}</p>
                                        <p className='text-[12px] leading-[1.25em] text-[#8B6F3B] mt-[8px]'>{intervalsData?.begin} -{intervalsData?.end}</p>
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))} */}

                {/* {filterInterValDataWithTitle && (
                    <>
                        {filterInterValDataWithTitle.map((intervalWithTitle, ind) => (
                            <div className='conference-info mb-[16px] text-center' key={ind}>
                                {intervalWithTitle?.filterIntervals.length && (
                                    <p className="date h4 mb-[10px]">{intervalWithTitle?.day}</p>
                                )}
                                {intervalWithTitle?.filterIntervals.length && (
                                    <div className='grid gap-2 grid-cols-1'>
                                        {intervalWithTitle?.filterIntervals.length && intervalWithTitle?.filterIntervals.map((intervalsData, index) => (
                                            <Link href={`conferences/${eventInfo?.id}`} key={index}>
                                                <a className="info-card text-left p-[24px_20px] bg-[#FFFCF6] rounded-[8px] border-[1px] border-solid border-[#FCB12A] transition-all duration-500 translate-y-[0] hover:translate-y-[-3px]">
                                                    <p className='info-card-title h4 text-[#725114] leading-[1.1875em]'>{intervalsData?.title}</p>
                                                    <p className='text-[12px] leading-[1.25em] text-[#8B6F3B] mt-[8px]'>{intervalsData?.begin} -{intervalsData?.end}</p>
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </>
                )} */}


            </>

        )
    }



}

export default EventInfo

// <div className="conference-info text-center">
//     {eventInfo?.startDate && (
//         <p className="date h4 mb-[10px]">{eventInfo?.startDate}</p>
//     )}
//     {eventInfo?.name && (
//         <Link href={`conferences/${eventInfo?.id}`}>
//             <a className="info-card block text-left p-[24px_20px] bg-[#FFFCF6] rounded-[8px] border-[1px] border-solid border-[#FCB12A] transition-all duration-500 translate-y-[0] hover:translate-y-[-3px]">
//                 <p className="info-card-title h4 text-[#725114] leading-[1.1875em]">{eventInfo?.name}</p>
//             </a>
//         </Link>
//     )}
// </div>