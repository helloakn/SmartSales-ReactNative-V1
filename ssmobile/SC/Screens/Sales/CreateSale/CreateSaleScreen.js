import React from 'react';
import {Animated, View,StyleSheet, Text,TextInput, TouchableOpacity } from 'react-native';

import DefautLayout from '../../../Layout/Default/DefautLayout';
import {ScreenController} from './ScreenController';
import {Body,Footer,Header,HeaderColumn,AgentNo,AgentNoText,AgentNoTextBold,AgentNoImage,
    Row,RowColumn,RowCustom,Label,LabelNormal,
    Table,TableScroll,
    TableRowHeader,
    TableRow,TableColumn,
    PromotionTable,PromotionTableRow,PromotionTableColumn,
    Title,
    AmountLeft,AmountRight} from './Css';



import Button from '../../../Components/Button';

import ButtonRectangle from '../../../Components/ButtonRectangle';
import ChooseProduct from '../../../Components/ChooseProduct';
import MonthYearPicker from '../../../Components/MonthYearPicker';
import BackButton from '../../../Components/BackButton';

import Icon from 'react-native-vector-icons/Ionicons';

function ShowPopup(props){
    const isShow = props.isShow;
    const ProductList = props.ProductList;
    if(isShow){
        return <ChooseProduct ProductQty={props.ProductQty} onProductQtyChangeText={props.onProductQtyChangeText} ProductList={ProductList} onClosePress={props.onClosePress} onOKPress={props.onOKPress}/>
    }
    else{
        return <></>
    }
}
export default class CreateSaleScreen extends ScreenController {
   
    constructor(props) {
        
        super(props);
        navigation = this.props.navigation;
        navigation.setOptions({
            headerTitleStyle:{
                alignSelf:'center',
                fontSize:14
            },
            headerLeft: () => (
                <BackButton iconName="arrow-back" onPress={()=>{
                    navigation.goBack();
                    }}/>
                )
        }); 
    }
     
    
	render() {
        const {getData} = this.state;
        saleData = [];
        const {saleProductList} = this.state; 
        for(let index=0;index<saleProductList.length;index++){
            saleData.push(
                <TableRow key={saleProductList[index].productId}>
                    <TableColumn style={styles.product}><Text style={styles.text}>{saleProductList[index].productName}</Text></TableColumn>
                    <TableColumn style={styles.qty}><Text style={styles.text}>{saleProductList[index].quantity}</Text></TableColumn>
                    <TableColumn style={styles.amount}>
                        <AmountLeft><Text style={styles.text}>{saleProductList[index].productPrice}</Text></AmountLeft>
                        <AmountRight><TouchableOpacity onPress={()=>this.itemRemove(index)}><Text style={styles.actionText}>-</Text></TouchableOpacity></AmountRight>
                    </TableColumn>
                </TableRow>
            );
            //  console.log(data);
        }
        //const animatedStyle = { width: this.props.animatedWidth, height: this.props.animatedHeight}
        const animatedStyle = { width: this.animatedWidth, height: this.animatedHeight};
        const animatedStyleProduct = { width: this.animatedWidthProduct, height: this.animatedHeightProduct};
		return (
            <DefautLayout>
            <Animated.View style = {[styles.box, animatedStyleProduct]}>
                <ShowPopup ProductQty={this.state.ProductQty} onProductQtyChangeText={this.onProductQtyChangeText} ProductList={this.state.ProductList} isShow={this.state.showProduct} onClosePress={this.onClosePress} onOKPress={this.onOKPress} /> 
            </Animated.View>
            <Animated.View style = {[styles.box, animatedStyle]}>
                <MonthYearPicker 
                    value={this.state.yearMonth}
                    fromYear="2010" toYear="2040" 
                    title="Choose Month - Year" 
                    isShowMonthYearPicker={this.state.isShowYearMonth} 
                    onYearMonthClose={this.onYearMonthClose} 
                    onOKYearMonthPress={this.onOKYearMonthPress} 
                />
            </Animated.View>
                <Body>
                    
                    <Header>
                        <HeaderColumn>
                            <AgentNoImage
                                source={{uri:getData.image}}
                                    resizeMode="stretch"
                                    style={{borderRadius: 20 }}
                             />
                             
                        </HeaderColumn>
                        <HeaderColumn>
                            <AgentNo>
                                <AgentNoText style={styles.textTile}>{getData.userName}</AgentNoText>
                                <AgentNoTextBold>{getData.agentCode}</AgentNoTextBold>
                            </AgentNo>
                        </HeaderColumn>
                    </Header>
                    
                    
                    <RowCustom style={{alignItems:'center',justifyContent:'space-between'}}>
                        <TouchableOpacity onPress={this.onShowYearMonthPicker}>
                            <Label>Month : {this.state.yearMonth} <Icon style={{marginLeft:2,textAlign:'center'}} name="calendar" size={20} color="#767D87" /></Label>
                        </TouchableOpacity>
                        <ButtonRectangle Caption="+" onPress={this.onChooseProductPress}/>
                    </RowCustom>
                    <Row>
                    <Table>
                        <TableRowHeader>
                            <TableColumn style={styles.product}><Label style={styles.headerTextTile}>Product</Label></TableColumn>
                            <TableColumn style={styles.qty}><Label style={styles.headerTextTile}>Qty</Label></TableColumn>
                            <TableColumn style={styles.amount}><Label style={styles.headerTextTile}>Amount</Label></TableColumn>
                        </TableRowHeader>
                    </Table>
                    <TableScroll style={{height:'20%'}}>
                        {saleData}
                       
                    </TableScroll>
                    </Row>
                    <Row>
                        <Text style={styles.textTileTotal}>Total Amount: {this.numberFormat("125000")}</Text>
                    </Row>
                    <PromotionTable>
                        <TableColumn>
                            <Title>Promotion Items</Title>
                        </TableColumn>
                        <TableScroll style={{height:'15%'}}>
                            <PromotionTableRow>
                                <PromotionTableColumn style={styles.promotionItem} ><Label>Face Mask</Label></PromotionTableColumn>
                                <PromotionTableColumn style={styles.promotionQty}><Label>100</Label></PromotionTableColumn>
                            </PromotionTableRow>
                            <PromotionTableRow>
                                <PromotionTableColumn  style={styles.promotionItem} ><Label>Pamphlet</Label></PromotionTableColumn>
                                <PromotionTableColumn style={styles.promotionQty}><Label>50</Label></PromotionTableColumn>
                            </PromotionTableRow>
                            <PromotionTableRow>
                                <PromotionTableColumn style={styles.promotionItem} ><Label>Voucher</Label></PromotionTableColumn>
                                <PromotionTableColumn style={styles.promotionQty}><Label>200</Label></PromotionTableColumn>
                            </PromotionTableRow>
                            <PromotionTableRow>
                                <PromotionTableColumn style={styles.promotionItem} ><Label>Voucher</Label></PromotionTableColumn>
                                <PromotionTableColumn style={styles.promotionQty}><Label>200</Label></PromotionTableColumn>
                            </PromotionTableRow>
                            <PromotionTableRow>
                                <PromotionTableColumn style={styles.promotionItem} ><Label>Voucher</Label></PromotionTableColumn>
                                <PromotionTableColumn style={styles.promotionQty}><Label>200</Label></PromotionTableColumn>
                            </PromotionTableRow>
                            <PromotionTableRow>
                                <PromotionTableColumn style={styles.promotionItem} ><Label>Voucher</Label></PromotionTableColumn>
                                <PromotionTableColumn style={styles.promotionQty}><Label>200</Label></PromotionTableColumn>
                            </PromotionTableRow>
                            <PromotionTableRow>
                                <PromotionTableColumn style={styles.promotionItem} ><Label>Voucher</Label></PromotionTableColumn>
                                <PromotionTableColumn style={styles.promotionQty}><Label>200</Label></PromotionTableColumn>
                            </PromotionTableRow>
                        </TableScroll>
                       
                    </PromotionTable>
                    
                    
                    <Row style={{padding:10}}>
                        <Text style={{width:'100%',textAlign:'center'}}>{this.state.Message}</Text>
                    </Row>
                    
                </Body>
                    <Footer>
                    
                        <Button      Caption="Create" onPress={this.onCreatePress}/>
                    </Footer>
                           
            </DefautLayout>
         
		);
	}
}

const styles = StyleSheet.create({
    box:{
        position:'absolute',
        zIndex:20000
    },
    promotionItem:{
        width:'40%'
    },
    promotionQty:{
        width:'20%'
    },
    actionText:{
        color:'red',
        fontSize:20
    },
    text:{
        color:"#979FAB"
    },
    textTile:{
        color:"#767D83",
        fontWeight:'bold',
        paddingBottom:5
    },
    headerTextTile:{
        color:"#767D83",
        fontWeight:'bold',
    },
    textTileTotal:{
        color:"#767D83",
        fontWeight:'bold',
        paddingBottom:5,
        textAlign:'right',
        paddingTop:10,
        paddingBottom:20,
        paddingRight:50

    },
    product:{
        width:'40%'
    },
    qty:{
        width:'20%'
    },
    amount:{
        width:'40%'
    },
    button: {
     
      
      justifyContent:'center',
    },
    boxShadowUp:{
        shadowColor: '#fff',
        shadowOffset: {width: -5, height: -5},
        shadowOpacity: 1,
        shadowRadius: 10
    },
    boxShadowDown:{
        shadowColor: '#000',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 0.45,
        shadowRadius: 10
    },
    textinput: {
        fontSize: 18,
        color: '#777E87',
        marginBottom: 30,
        borderBottomColor: 'silver',
        borderBottomWidth: 1,
        paddingTop:10
      },
      checkbox: {
        alignSelf: "center",
      }
  });