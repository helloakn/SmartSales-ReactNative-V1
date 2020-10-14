import React from 'react';

import {Container} from './Css'


export default class DefautLayout extends React.Component {

	constructor(props){
        super(props);
       
          
    }//end constructor
    
    

	render() {
       
		return (
            <Container>
				{this.props.children}
            </Container>
         
		);
	}
}