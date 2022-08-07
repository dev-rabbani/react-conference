// External Imports
import Link from 'next/link';

const EventInfo = ({ eventInfo }) => {
    return (
        <div className="conference-info text-center">
            {eventInfo?.startDate && (
                <p className="date h4 mb-[10px]">{eventInfo?.startDate}</p>
            )}
            {eventInfo?.name && (
                <Link href={`conferences/${eventInfo?.id}`}>
                    <a className="info-card block text-left p-[24px_20px] bg-[#FFFCF6] rounded-[8px] border-[1px] border-solid border-[#FCB12A] transition-all duration-500 translate-y-[0] hover:translate-y-[-3px]" title={eventInfo?.name}>
                        <p className="info-card-title h4 text-[#725114] leading-[1.1875em]">{eventInfo?.name}</p>
                    </a>
                </Link>
            )}
        </div>
    )
}

export default EventInfo