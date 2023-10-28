import React from 'react'

export default function InfoCard(props) {
    let InfoElem = props.info.map((data, index) =>{
        return (
            <div className="infocard__data">
                <div className="infocard__data--info">
					<h2>{data.value}</h2>
					<h3>{data.attribute}</h3>
				</div>
            </div>
        );
    });
    return (
        <div className='infocard flex__row'>{InfoElem}</div>
    )
}
