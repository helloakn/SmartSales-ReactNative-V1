import React,{ Component } from 'react';
//import ImagePicker from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import RNFetchBlob from 'rn-fetch-blob';

import { StackActions } from '@react-navigation/native';

export class ScreenController extends Component{
    constructor(props){
        super(props);
        const { navigation } = this.props;
        const {route} = this.props;
        
		this.state={
            FullName:'',
            UserName:'',
            Password:'',
            PhoneNo:'',
            Address:'',
            agentCode:'',
            File:'',
            status:400,
            bearerAuth: route.params?.token, //navigation.getParam('token','')
            Message:'',
            imageSource:require("../../../../assets/images/user.png"),
            isSelectedImage:false,
            fileData:null,
            agentImage:'',
            isLoading:false,
        };
    }
    
    onImageChoose=()=>{
      
        const options = {
            title: 'Choose Agent Image',
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };
          console.log('onclick');
          /*
          ImagePicker.launchImageLibrary(options, (response) => {
            this.setState({
                isLoading:true
              });
            if (response.error) {
              console.log('LaunchImageLibrary Error: ', response.error);
            }
            else {
              //setImageSource(response.uri);
              console.log('finished lunch');
              const source = { uri: response.uri };
              this.setState({
                imageSource: source,
                agentImage: response,
                isSelectedImage:true,
                fileData:response.data,
                isLoading:true
              });
            }
          });   
          */
         ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            includeBase64:true
          }).then(image => {
            this.setState({
                isLoading:true
              });
           // console.log(image);
            const source = { uri: image.path };
              this.setState({
                imageSource: source,
                agentImage: image,
                isSelectedImage:true,
               fileData:image.data,
                isLoading:true
              });
          });
    }
    onImageLoadStart=()=>{
        /*
        this.setState({
            isLoading:true
          });
          */
          console.log('image loadstart');
    }
    onImageLoadEnd=()=>{
        console.log('image loadend');
        this.setState({
            isLoading:false
          });
    }
    onFullNameChangeText=(txt)=>{
        this.setState({
            FullName:txt
        });
    }
    onUserNameChangeText=(txt)=>{
        this.setState({
            UserName:txt
        });
    }
    onPasswordChangeText=(txt)=>{
        this.setState({
            Password:txt
        });
    }
    onPhoneNoChangeText=(txt)=>{
        this.setState({
            PhoneNo:txt
        });
    }
    onAddressChangeText=(txt)=>{
        this.setState({
            Address:txt
        });
    }

    onCreatePress=()=>{
       // console.log(this.state.bearerAuth);
        this.setState({
            isLoading:true
          });
        bearerAuth = "Bearer " + this.state.bearerAuth;
        //   console.log(bearerAuth);
        /*
        "ContactName=ntcontentname" 
        -F "PhoneNo=12025550125" 
        -F "AgentName=ntagent" 
        -F "Address=4663 Agriculture Lane'" 
        -F "UserName=ko Nay ko Toe" 
        -F "ReferenceCode=apiuser" 
        -F "Password=api2020" 
        -F "File=@159630.jpg;type=image/jpeg" 
        -F "Email=naytoe@example.com"
        */
        var form = new FormData();
        form.append('UserName', this.state.UserName);
        form.append('Password', this.state.Password);
        form.append('AgentName', this.state.FullName);
        form.append('Email', '');
        form.append('ContactName', this.state.FullName);
        form.append('PhoneNo', this.state.PhoneNo);
        form.append('Address', this.state.Address);
        form.append('ReferenceCode', 'apiuser');
        var fileData ={};// { name : 'File', type:this.state.agentImage.mineTYpe,filename : this.state.agentImage.name, data: this.state.fileData};
        if(this.state.isSelectedImage){
            mineTYpe = this.state.agentImage.mime=="image/jpeg"?"data:image/jpeg;base64,":"data:image/png;base64,";
            form.append("File",{filetype:this.state.agentImage.mime,uri:mineTYpe+this.state.fileData,name:'test.jpg'});
            filenmae = Date.now()+ (this.state.agentImage.mime=="image/jpeg"?".jpg":'.png');
            fileData = { name : 'File', type:this.state.agentImage.mime,filename :filenmae, data: this.state.fileData};
        }
        console.log(fileData);
        console.log(this.state.agentImage);
        RNFetchBlob.fetch('POST', 'https://focusbeauty.zotefamily.com/v1/Agent/Create', {
            Authorization : bearerAuth,
            'Content-Type' : 'multipart/form-data',
          }, [
            { name : 'UserName', data : this.state.UserName},
            { name : 'Password', data : this.state.Password},
            { name : 'AgentName', data : this.state.FullName},
            { name : 'Email', data : ''},
            { name : 'ContactName', data : this.state.FullName},
            { name : 'PhoneNo', data : this.state.PhoneNo},
            { name : 'Address', data : this.state.Address},
            { name : 'ReferenceCode', data : 'ree'},
            fileData,
          ]).then((resp) => {
            // ...
            console.log(resp);
            var returnData = resp;
            var status = (returnData.code?returnData.code:returnData.status);
            var message = (returnData.message?returnData.message:returnData.title);
            if(status==200){
               // console.log('no error');
                this.setState({isLoading:false,status:status,Message:message,agentCode:returnData.data.agentCode});
            }
            else if(status==400){
                this.setState({isLoading:false,status:status,Message:message});
            }
            else{
                this.setState({isLoading:false,status:status,Message:message});
                console.log('start error');
                console.log(JSON.stringify(returnData));
                console.log('end error');
            }
            const popAction = StackActions.pop(1);
            this.props.navigation.dispatch(popAction);
          }).catch((err) => {
            // ...
          })
        /*
        fetch("https://focusbeauty.zotefamily.com/v1/Agent/Create",{
            method: 'POST',
            headers: {
                Accept: 'text/plain',
                Authorization: bearerAuth,
                'Content-Type': 'multipart/form-data',
            },
            body:form
        })
        .then(res => res.json())
        .then(
            (result) => {
                console.log('result log ');
                console.log(result);
                var returnData = result;
                //var status = (returnData.code?returnData.code:returnData.status);
                //var message = (returnData.message?returnData.message:returnData.title);
                var status = (returnData.code?returnData.code:returnData.status);
                var message = (returnData.message?returnData.message:returnData.title);
                //console.log(returnData.status);
                //console.log(status);
                if(status==200){
                    console.log('no error');
                    this.setState({isLoading:false,status:status,Message:message,agentCode:returnData.data.agentCode});
                }
                else if(status==400){
                    this.setState({isLoading:false,status:status,Message:message});
                }
                else{
                    this.setState({isLoading:false,status:status,Message:message});
                    console.log('start error');
                    console.log(JSON.stringify(returnData));
                    console.log('end error');
                }
                
                
                console.log('end result log ');
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.log('--- error log ');
                //console.log(error);
                console.log(JSON.stringify(error));
                console.log(error);
                this.setState({isLoading:false,Message:'Something went wrong, Please check your internet connection.'});
                console.log('--- end error log ');
            }
        )*/
        
    }
    
}