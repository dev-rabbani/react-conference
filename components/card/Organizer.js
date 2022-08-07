/* eslint-disable @next/next/no-img-element */

const Organizer = ({ organizer }) => {
    return (
        <div className='bg-white rounded-[8px] p-[12px] lg:p-[16px_30px_16px_16px] flex items-start  gap-[15px] lg:gap-[40px]'>
            {organizer?.image?.url && (
                <div className='flex-[0_0_88px] lg:flex-[0_0_140px] rounded-[8px] overflow-hidden'>
                    <img src={organizer?.image?.url} alt={`${organizer?.name} avatar`} />
                </div>
            )}
            <div className='flex-grow-[1]'>
                <div className=' grid gap-[6px] lg:flex lg:justify-between lg:items-center  lg:gap-[20px]'>
                    {organizer?.name && (
                        <h3>{organizer?.name}</h3>
                    )}
                    {organizer?.company && (
                        <span className=' text-[#0045FF] text-[12px] leading-[1.25em] lg:text-[16px] lg:leading-[1.187em] lg:text-title lg:text-opacity-50'>
                            {organizer?.company}
                        </span>
                    )}
                </div>
                {organizer?.about && (
                    <p className='text-title text-opacity-80 text-[12px] leading-[1.25em] lg:text-[16px] lg:leading-[1.187em] lg:mt-[20px]  mt-[10px]'>
                        {organizer?.about}
                    </p>
                )}
            </div>
        </div>
    )
}

export default Organizer