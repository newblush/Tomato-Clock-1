import React, { Component } from 'react'
import {
    StyleSheet,
    ListView,
    View,
    Image,
    ImageBackground,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    NativeModules,
    AppState
} from 'react-native'

import TextInput from '../components/_TextInput'

{
    //var time1=(new Date()).valueOf()+25*60*1000
    var display="开始"
    var pause=true
    var m=24
    var i=0
    var backIM=require('../resource/Back.png')
    var locked=false
    var s=25*60
    var Prevtime=0
    var se=0
} 

export default class NewHome extends Component {

   constructor(props) {
         super(props);
         var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
          this.state = {
                time:0,
                dataSource:ds,
                data:[],
                time1:(new Date()).valueOf()+25*60*1000,
                name:"请输入所完成的任务"
        };
    }

    testFun(){
        //Android.isLocked((Bk)=>{locked=Bk})
        //if (locked){
         this.timer = setTimeout(() => {
          this.setState({time:(new Date()).valueOf()});
         }, 10)
         s=(parseInt((this.state.time1-this.state.time)/10)/100).toFixed(2)
         m=Math.floor((s+1)/60)
         //console.log("off")
         if (!pause){
          se=(s-m*60)
          if((se).toFixed(0)==60) se=59//仅修正毫秒换算成秒后的显示问题，不造成时间记录上的误差
          return ((m)+":"+Math.floor(se))
         }
         else{
          if (display!="开始")
          return "点按以开始"
          else 
          return "开始"
         }
        /*}
        else{
          this.timer = setTimeout(() => {
          this.setState({time:(new Date()).valueOf()})
          }, 10)
          s=(parseInt((time1-this.state.time)/10)/100).toFixed(2)
          m=Math.floor(s/60)
          console.log("on")
          return ((m)+":"+(s-m*60-1).toFixed(0))
        }*/

         //this.timer = setTimeout(() => {
         //this.setState({time:(new Date()).valueOf()});
         //}, 10)
         //s=(parseInt((this.state.time-time1)/10)/100).toFixed(2)
        


    } 

    addPoint(){
      if(display=="开始"){
        this.setState({time1:(new Date()).valueOf()+25*60*1000})
      }
      if(!pause){
        this.editView.show()
        i=i+1
      }
      pause=!pause
    }



    _renderRow(rowData,rowId){
     return(
      <Text style={styles.recorder}>{rowData}</Text>
      )
     }



    render() {
           display=this.testFun() 
        return ( 
            <View style={styles.container}>  
            <ImageBackground
                style={styles.backgroundImage}
                source={backIM}
                resizeMode="cover">
            <Text style={styles.backspace}> 
             </Text>
            <ImageBackground
              style={{width:220, height:220,alignItems:'center',justifyContent:'center',}}
              source={require('../resource/Home_Circle.png')}
              resizeMode="cover">
          <TouchableOpacity style={styles.btn} onPress={this.addPoint.bind(this)}>
            <Text style={styles.counter}>
             {display}
             </Text>
          </TouchableOpacity>
          </ImageBackground>
            <Text style={styles.backspace}> 
             </Text>
           
            <ListView
              enableEmptySections = {true}
              style={{margin:20,}}
              dataSource={this.state.dataSource.cloneWithRows(this.state.data)}
              renderRow={(rowData,sectionId,rowId) => this._renderRow(rowData,rowId)} />
            </ImageBackground>

           <TextInput
             ref={editView => this.editView = editView}
             inputText={this.state.name}
             titleTxt={"刚完成了这些..."}
             ensureCallback={name=> (this.state.data[i]=((24-m).toFixed(0)+":"+(60-(s-m*60).toFixed(0)))+"  (M:S)"+"        :   "+name)}
            /> 
         </View>

        )
    }
}

const styles = StyleSheet.create({
  counter: {
    fontSize: 50,
    textAlign: 'center',
    margin: 20,
    color:'rgb(222,148,151)',
  },
  backspace: {
    fontSize: 0,
    textAlign: 'center',
    margin: 15,
  },
    recorder: {
    fontSize: 20,
    textAlign: 'left',
    margin: 0,
    color:'rgb(222,148,151)',
  },
   container: {
    flex: 1,
    backgroundColor: 'rgb(255,255,255)',
  },
    btn: {
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 100,
        opacity:1,
  },
 backgroundImage:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        //width:gScreen.width,
        //height:gScreen.height
        //backgroundColor:'rgba(0,0,0,0)',
  },

});