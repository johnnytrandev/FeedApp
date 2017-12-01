import React,{Component} from 'react';
import {
    Animated,View,Text,StyleSheet
    ,Image,TouchableOpacity
} from 'react-native';

var TimerMixin = require('react-timer-mixin');
var reactMixin = require('react-mixin');

import {APP_MAIN_COLOR} from '../utility/constants/constants';
export default class SplashPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            fadeCotainter:new Animated.Value(0),
            fadeText:new Animated.Value(0),
            fadeTextContent:new Animated.Value(0),
            fadeGoHome:new Animated.Value(0)
        }
    }
    componentDidMount () {
        Animated.sequence([
            Animated.timing(
                    this.state.fadeCotainter,
                        {
                            toValue:1,
                            duration:2000
                        }
                    ),
            Animated.timing(
                this.state.fadeText,
                    {
                        toValue:1,
                        duration:2000
                    }
            ),
            Animated.timing(
                this.state.fadeTextContent,
                    {
                        toValue:1
                    }
            ),
            Animated.timing(
                this.state.fadeGoHome,
                    {
                        toValue:1
                    }
            )
        ]).start()
        TimerMixin.setTimeout(
            () => { console.log('I do not leak!'); },
            5000
          );
    }
    render(){
        return(
            <Animated.View style={[styles.Container,this.props.style,{opacity:this.state.fadeCotainter}]}> 
                    <Animated.View style={[{opacity:this.state.fadeText,transform:[
                        {
                            translateX:this.state.fadeText.interpolate({
                            inputRange:[0,1],
                            outputRange:[-50,0]
                            })
                        }
                    ]}]}>
                    <Text style={styles.text}>One Feed</Text>
                    </Animated.View>
                    <Animated.View style={[{opacity:this.state.fadeText,marginTop:20,transform:[
                        {
                            translateY:this.state.fadeText.interpolate({
                            inputRange:[0,1],
                            outputRange:[100,0]
                            })
                        }
                    ]}]}>
                        <Text style={styles.content}>Join and enjoy!</Text>
                    </Animated.View>
                    <Animated.View style={[{opacity:this.state.fadeGoHome,marginTop:20,transform:[
                        {
                            translateX:this.state.fadeGoHome.interpolate({
                            inputRange:[0,1],
                            outputRange:[100,0]
                            })
                        }
                    ]}]}>
                      <TouchableOpacity style={styles.GohomeText} onPress={()=>this._goHome()}>
                            <Text style={styles.gohomeText}>Join</Text>
                        </TouchableOpacity>
                    </Animated.View>
            </Animated.View>
        );
    }
    
    _goHome(){
        Animated.sequence([
             Animated.timing(
                this.state.fadeGoHome,
                    {
                        toValue:0
                    }
            ),
            Animated.timing(
                this.state.fadeTextContent,
                    {
                        toValue:0
                        
                    }
            ),
            Animated.timing(
                this.state.fadeText,
                    {
                        toValue:0
                       
                    }
            ),
            Animated.timing(
                    this.state.fadeCotainter,
                        {
                            toValue:0
                        }
                    ),  
        ]).start(()=>this.props.onAnimEnd && this.props.onAnimEnd())
    }
}
const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:APP_MAIN_COLOR,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:45,
        color:'#fff',
        fontWeight:'bold'
    },
    content:{
        fontSize:18,
        color:'#fff',
        fontWeight:'bold'
    },
    GohomeText:{
        width:100,
        height:45,
        borderColor:'#fff',
        borderWidth:1,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff',
    },
    gohomeText:{
        color:APP_MAIN_COLOR
    }
});