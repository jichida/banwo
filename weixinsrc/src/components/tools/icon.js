/*
	小图标
*/
import React from 'react';
import Iconpng from "../../img/1000.png";
import PropTypes from 'prop-types';

let Icontools = (props) => {
	const { width, height, number } = props;
	const basizewidth = width*.01*1000;
	const basizeheight = height*.01*300;
	const positionleft = (number%10-1)*basizewidth*.1;
	const positiontop = (Math.floor(number/10))*(basizeheight/3);
	return (
	  	<i 
	  		className="icontools"
	  		style={{
	  			display: "block",
	  			width: width,
	  			height: height,
	  			background : `url(${Iconpng})`,
	  			backgroundSize : `${basizewidth}px ${basizeheight}px`,
	  			backgroundPosition : `-${positionleft}px -${positiontop}px`
	  		}}
	  		/>
	);
}

Icontools.propTypes = {
	width : PropTypes.number.isRequired,
	height : PropTypes.number.isRequired,
	number : PropTypes.number.isRequired
};

export default Icontools;