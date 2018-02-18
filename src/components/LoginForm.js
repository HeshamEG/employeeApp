import React,{Component} from 'react';
import{View,Text}from 'react-native';
import {Card,CardSection,Input,CardButton,Spinner} from 'heshamtest'
import {connect} from 'react-redux'
import   {emailChanged} from '../actions'
import   {passwordChanged,loginUser} from '../actions'
class LoginForm extends Component{
    onEmailChange(text){
this.props.emailChanged(text)
    }
    onPasswordChange(text){
        this.props.passwordChanged(text)

    }

    onPress(){
        const {email,password}=this.props;
        this.props.loginUser({email,password})
    }
    renderError(){
if(this.props.error){
 return(
     <View style={{backgroundColor:'white'}}>
         <Text style={styles.errorTextStyle}>{this.props.error}</Text>
     </View>
 )
}
    }
    renderButton(){
        if(this.props.loading){
            return <Spinner size="large"/>
        }else {
    return    <CardButton
            onPress={this.onPress.bind(this)}
            Children="Login !"/>}
    }
    render(){
        return(
        <Card>
            <CardSection>
                <Input
                    onChangeText={this.onEmailChange.bind(this)}
                    label="Email"
                value={this.props.email}
                />
            </CardSection>
            <CardSection>
                <Input
                    onChangeText={this.onPasswordChange.bind(this)}

                    label="Password"
                    secureTextEntry
                    value={this.props.password}

               />
            </CardSection>
    {this.renderError()}
            <CardSection>

                {this.renderButton()}
            </CardSection>
        </Card>
    )
}
}
const mapStateToProps=state=>{
    return{
        email:state.auth.email,
        password:state.auth.password,
        error:state.auth.error,
        loading:state.auth.loading
    }
}
const styles={
    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
}
export default connect(mapStateToProps,{emailChanged,loginUser,passwordChanged}) (LoginForm);