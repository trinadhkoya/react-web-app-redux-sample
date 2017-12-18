import React, {Component} from 'react';
import '../res/styles/App.css';
import gitUserStyles from '../res/styles/GitUser.css'

class GitUser extends Component {


    constructor(props) {
        super(props);
    }


    componentWillMount() {
    }

    componentDidMount() {


    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
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


        console.log(this.props);


        return (

            <div style={{flex: 1, backgroundColor: '#F5F5F5'}}>

                <div style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                    <img src={this.props.data.owner.avatar_url} className='imgStyle'/>
                    <p className='gitUserStyle'>{this.props.data.name}</p>
                    <a href={this.props.data.html_url}><p style={{fontFamily: 'AppleGothic,sans-serif'}}/>Github</a>
                    <p style={{fontFamily:'AppleGothic,sans-serif'}}>Language:<b>{this.props.data.language}</b></p>
                </div>


            </div>
        );
    }
}


export default GitUser;
