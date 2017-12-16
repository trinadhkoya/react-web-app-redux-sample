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

            <div style={{flex: 1}}>
                <div style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                    <img src={this.props.data.avatar_url} className='imgStyle'/>
                    <p className='gitUserStyle'>{this.props.data.login}</p>

                </div>


            </div>
        );
    }
}


export default GitUser;
