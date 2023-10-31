import React from "react";
import "./style.scss"

export default function DashCard(props) {
    return <div className="dashcard hard__shadow">
		<div className="dashcard__title"><h2>{props.title}</h2></div>
		<div className="dashcard__info flex__row">
			<div className="dashcard__info--one flex__col flex__center">
				<div className="info__icon"><img src={props.icon1} alt="Icon" /></div>
				<div className="info__value"><h2>{props.value1}</h2></div>
				<div className="info__attribute"><h3>{props.attribute1}</h3></div>
			</div>
			<div className="v__line"></div>
			<div className="dashcard__info--two flex__col flex__center">
				<div className="info__icon"><img src={props.icon2} alt="Icon" /></div>
				<div className="info__value"><h2>{props.value2}</h2></div>
				<div className="info__attribute"><h3>{props.attribute2}</h3></div>
			</div>
		</div>
	</div>;
}
