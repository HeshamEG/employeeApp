import React,{Component} from 'react';
import {View}from 'react-native';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import {AlbumDetail,CardButton,Card,Header} from 'heshamtest'
import reducers from './reducers'
import LoginForm from './components/LoginForm'
const store=createStore(
    reducers
    ,{}
,applyMiddleware(ReduxThunk)
)
class MyApp extends Component{

    render(){
        return(
            <View>
                <Header/>
            <Provider store={store}>
             <LoginForm/>
            </Provider></View>
        )
    }
}
export default MyApp;