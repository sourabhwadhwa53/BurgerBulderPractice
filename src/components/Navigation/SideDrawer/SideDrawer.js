import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/BackDrop/BackDrop';
import Auxiliary from '../../../hoc/Auxiliary';

import classes from './SideDrawer.css'

const sideDrawer = props => {
	let attachedClasses = [classes.SideDrawer, classes.Close];
	if(props.open)
		attachedClasses = [classes.SideDrawer, classes.Open]
	return(
		<Auxiliary>
			<BackDrop show ={props.open} clicked = {props.closed}/>
			<div className = {attachedClasses.join(' ')}>
				<div className = {classes.Logo}>
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Auxiliary>
		);
};

export default sideDrawer;