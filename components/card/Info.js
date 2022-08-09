import React from 'react'

const Info = ({ data }) => {
    console.log(data);
    return (
        <div>
            <div>{data.map((item, index) => (
                <div key={index}>
                    <p>{item.dayName}</p>
                    <p>{item.day}</p>
                    {item.matchedData.map((v, i) => (
                        <div key={i}>
                            <p>{v.title}</p>
                            <p >{v.begin} - {v.end}</p>
                        </div>
                    ))}
                </div>
            ))}</div>
        </div>
    )
}

export default Info