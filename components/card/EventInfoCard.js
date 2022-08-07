// External Imports
import Link from 'next/link';

const EventInfoCard = ({ eventInfo }) => {
    return (

        <Link href={`conferences/${eventInfo?.id}`}>
            <a className="info-card block  p-[30px_20px] bg-[#FFFCF6] shadow-[0_10px_20px_0px_rgba(162,162,162,0.25)] rounded-[8px] border-[1px] border-solid border-[#FCB12A] transition-all duration-500 translate-y-[0] hover:translate-y-[-3px] text-left" title={eventInfo?.name}>
                {eventInfo?.name && (
                    <p className="info-card-title h4 text-[#725114] leading-[1.1875em]">{eventInfo?.name}</p>
                )}
                {eventInfo?.startDate && (
                    <p className="date h4 mt-[10px]">{eventInfo?.startDate}</p>
                )}
            </a>
        </Link>

    )
}

export default EventInfoCard