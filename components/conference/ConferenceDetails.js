/* eslint-disable @next/next/no-img-element */

// Internal Imports
import useMediaQuery from '../../hooks/useMediaQuery';
import SectionHeading from "../utils/SectionHeading";
import InfoTab from './InfoTab';
import InfoTabSm from './InfoTabSm';

const ConferenceDetails = ({ conference }) => {
    const isBreakpoint = useMediaQuery(992);
    const { name, slogan, organizers, speakers, locations, schedules, sponsors } = conference;

    return (
        <div className="md:pt-[125px] md:pb-[100px] p-[60px_0_40px]">
            <div className="container">
                <div className="relative -mx-4">
                    <div className="w-full px-4">
                        <SectionHeading
                            title={name}
                            description={slogan}
                        />
                    </div>
                </div>
                <div className="relative -mx-4">
                    <div className="w-full px-4">
                        {isBreakpoint ? (
                            <>
                                <InfoTab
                                    organizers={organizers}
                                    speakers={speakers}
                                    locations={locations}
                                    schedules={schedules}
                                    sponsors={sponsors}
                                />

                            </>
                        ) : (
                            <>
                                <InfoTabSm
                                    organizers={organizers}
                                    speakers={speakers}
                                    locations={locations}
                                    schedules={schedules}
                                    sponsors={sponsors}
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConferenceDetails