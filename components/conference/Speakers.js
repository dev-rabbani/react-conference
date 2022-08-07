// External Imports
import React from 'react';

// Internal Imports
import Speaker from '../card/Speaker'

const Speakers = ({ speakers }) => {
    return (
        <>
            {speakers && (
                <div className='grid grid-cols-1 gap-[24px]'>
                    {speakers.map((speaker) => (
                        <div key={speaker?.name}>
                            <Speaker speaker={speaker} />
                        </div>
                    ))}
                </div>
            )}

        </>

    )
}

export default Speakers