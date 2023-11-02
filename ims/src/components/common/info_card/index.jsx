import React from 'react'
import "./style.scss"

export default function InfoCard(props) {
    if (!props.info || props.info.length === 0) {
        return null; // Or display a message or default content if there's no data
    }
    let InfoElem = props.info.map((data, index, array) =>{
        return (
            <div className="infocard__data flex__row">
                <div className="infocard__data--info">
					<h2>{data.value}</h2>
					<h3>{data.attribute}</h3>
				</div>
                {(index != array.length - 1) && <div className='v__line'></div>}
            </div>
        );
    });
    return (
        <div className='infocard flex__row'>{InfoElem}</div>
    )
}
