/* eslint-disable @next/next/no-img-element */

const Schedule = ({ schedule }) => {
    const { location, intervals } = schedule;
    return (
        <div className='bg-white rounded-[8px] p-[12px] lg:p-[16px_30px_16px_16px] flex  gap-[15px] lg:gap-[40px] lg:items-center'>
            {location?.image?.url && (
                <div className='flex-[0_0_88px] lg:flex-[0_0_140px] rounded-[8px] overflow-hidden align-baseline'>
                    <img src={location?.image?.url} alt={`${location?.name} image`} />
                </div>
            )}
            <div className='flex-grow-[1]'>
                <div className=' grid gap-[6px] lg:flex lg:justify-between lg:items-center  lg:gap-[20px]'>
                    {schedule?.day && (
                        <h3>{schedule?.day}</h3>
                    )}
                    {schedule?.description && (
                        <span className=' text-[#0045FF] text-[12px] leading-[1.25em] lg:text-[16px] lg:leading-[1.187em] lg:text-title lg:text-opacity-50'>
                            {schedule?.description}
                        </span>
                    )}
                </div>
                {intervals && intervals.map((interval, index) => (
                    <div key={index} className="mb-[25px]">
                        <p className='text-title font-medium  text-[16px] lg:leading-[1.187em] lg:mt-[20px]  m-[8px_0_10px]'>
                            Duration : <span>{interval?.begin}-{interval?.end}</span>
                        </p>
                        {interval?.sessions && (
                            <ul className='list-disc pl-[30px]'>
                                {interval?.sessions.map((session, ind) => (
                                    <li key={ind}>
                                        {session?.title}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Schedule