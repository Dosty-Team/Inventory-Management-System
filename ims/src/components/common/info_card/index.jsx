import React from 'react'
import "./style.scss"

export default function InfoCard(props) {
    let InfoElem = props.info.map((data, index, array) =>{
        return (
            <div className="infocard__data">
                <div className="infocard__data--info">
					<h2>{data.value}</h2>
					<h3>{data.attribute}</h3>
                    {(index !=1 && index != array.length - 1) && <div className='v__line'></div>}
				</div>
            </div>
        );
    });
    return (
        <div className='infocard flex__row'>{InfoElem}</div>
    )
}
