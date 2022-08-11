

// External Imports
import Link from 'next/link'
import React from 'react'


const InfoCard = ({ data, time }) => {
    if (!data && !data.length) {
        return null
    }

    // conditional card bg color
    const color = time?.id >= 16 ? "color2" : "color1"

    return (

        <>
            {data.map((eventInfo, index) => (
                <div className={`single-info ${color}`} key={index}>
                    <p className="date h4 mb-[10px]">{eventInfo?.day}</p>
                    {eventInfo.matchedData.map((intervalInfo, ind) => (
                        <Link href={`conferences/${eventInfo?.id}`} key={ind}>
                            <a className={`info-card block text-left p-[16px_8px] bg-[#FFFCF6] rounded-[8px] border-[1px] border-solid border-[#FCB12A] transition-all duration-500 translate-y-[0] hover:translate-y-[-3px]`}>
                                <p className='info-card-title h4 text-[#725114] leading-[1.1875em]'>{intervalInfo?.title}</p>
                                <p className='info-card-interval text-[12px] leading-[1.25em] text-[#8B6F3B] mt-[8px]'>{intervalInfo?.begin} -{intervalInfo?.end}</p>
                            </a>
                        </Link>
                    ))}
                </div>
            ))}
        </>
    )
}

export default InfoCard