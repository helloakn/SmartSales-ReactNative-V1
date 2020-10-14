import React,{ Component } from 'react';

export class ScreenController extends Component{
    constructor(props){
        super(props);
        //const { navigation } = this.props;
        
		this.state={
        };
    }
    onGettingStartedPress=()=>{
        this.props.navigation.navigate('LogInScreen',{
            Title:"LogInScreen"});
    }
    setStateFunction=(data)=>{ 
        this.setState(data);
    }
    
    
    
}