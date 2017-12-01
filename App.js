/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React,{Component} from 'react';
import {
    View,Text,AppRegistry,
    AsyncStorage
} from 'react-native';
import MainPage from './app/pages/LoginScreen';
import SplashPage from './app/pages/SplashPage';
// import LoginScreen from './app/pages/Lo';

export default class StartPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            isShowSplash:true,
            isLogin:false
        }
    }
    componentDidMount () {
        let _this = this;
        AsyncStorage.getItem('loginUserID',function(errs,result){
            if(!errs){
                if(result !=null && result != ''){       
                    _this.setState({isLogin:true})
                }else{
                    _this.setState({isLogin:false})
                }
            }
        })
    }
    render(){
        if(this.state.isShowSplash){
            return <SplashPage onAnimEnd = {()=>this.setState({isShowSplash:false})} />
        }else{
            if(this.state.isLogin){
                return <MainPage onAniming = {this._removeStorage.bind(this)} />
            }else{
                return <MainPage onLoginEd = {()=>this.setState({isLogin:true})} />
            }       
        }
    }
    _removeStorage(){
        this.setState({isShowSplash:true,isLogin:false});
        AsyncStorage.removeItem('loginUserID')
    }
}

AppRegistry.registerComponent('TabFooterDemo', () => StartPage);