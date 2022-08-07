/* eslint-disable @next/next/no-img-element */

const Location = ({ location }) => {
    return (
        <div className='bg-white rounded-[8px] p-[12px] lg:p-[16px_30px_16px_16px] flex  gap-[15px] lg:gap-[40px] lg:items-center'>
            {location?.image?.url && (
                <div className='flex-[0_0_88px] lg:flex-[0_0_140px] rounded-[8px] overflow-hidden align-baseline'>
                    <img src={location?.image?.url} alt={`${location?.name} avatar`} />
                </div>
            )}
            <div className='flex-grow-[1]'>
                <div className=' grid gap-[6px] lg:flex lg:justify-between lg:items-center  lg:gap-[20px]'>
                    {location?.name && (
                        <h3>{location?.name}</h3>
                    )}
                    {location?.company && (
                        <span className=' text-[#0045FF] text-[12px] leading-[1.25em] lg:text-[16px] lg:leading-[1.187em] lg:text-title lg:text-opacity-50'>
                            {location?.company}
                        </span>
                    )}
                </div>
                {location?.about && (
                    <p className='text-title text-opacity-80 text-[12px] leading-[1.25em] lg:text-[16px] lg:leading-[1.187em] lg:mt-[20px]  mt-[10px]'>
                        {location?.about}
                    </p>
                )}
            </div>
        </div>
    )
}

export default Location