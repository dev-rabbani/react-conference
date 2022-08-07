
// External Imports
import EventScheduleTable from '../table/EventScheduleTable';

// Internal Imports
import SectionHeading from "../utils/SectionHeading";
import { getDayName } from '../../lib/getDayName';

const EventSchedule = ({ conferences }) => {

    const eventData = [...conferences];
    const eventTableData = eventData.map(({ id, name, startDate }) => {
        return { id, name, startDate, dayName: getDayName(startDate) };

    });

    return (
        <>
            <div className="md:pt-[185px] md:pb-[70px] p-[80px_0_30px]">
                <div className="container">
                    <div className="relative -mx-4">
                        <div className="w-full px-4">
                            <SectionHeading
                                title="Event Schedule"
                                description="Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum."
                            />
                        </div>
                    </div>
                    <div className="relative -mx-4">
                        <div className="w-full px-4">
                            <EventScheduleTable eventTableData={eventTableData} />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default EventSchedule;
