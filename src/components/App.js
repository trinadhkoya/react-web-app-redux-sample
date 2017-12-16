import React, {Component} from 'react';
import logo from '../res/img/logo.svg';
import '../res/styles/App.css';
import {connect} from "react-redux";
import {getGitHubUsers} from "../actions/AppActions";
import GitUserList from "./GitUserList";
import ActivityIndicator from 'react-activity-indicator'


class App extends Component {


    constructor(props) {
        super(props);
        this.state = ({value: 0})
    }


    componentWillMount() {
        console.log('1')
    }

    componentDidMount() {
        this.props.getGitHubUsers();

    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props !== nextProps || this.state !== nextState;
    }

    componentWillUpdate(nextProps, nextState) {

    }


    componentDidUpdate(prevProps, prevState) {
        //
    }

    componentWillUnmount() {
    }

    componentWillReceiveProps(nextProps) {

    }


    render() {

        return (
            <div className="App">

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">
                        Displaying Top Github Users
                    </h1>

                </header>

                {this.props.loading ? <ActivityIndicator

                    number={3}
                    diameter={20}
                    duration={300}
                    activeColor="#fbbd05"
                    borderColor="#fbbd05"
                    borderWidth={1}
                    borderRadius="10%"
                /> : <GitUserList data={this.props.gitUsers}/>}

            </div>
        );
    }
}


const mapStateToProps = (state) => {

    const {gitUsers, loading} = state.appReducer;
    return {gitUsers, loading}

};


export default connect(mapStateToProps, {getGitHubUsers})(App)
