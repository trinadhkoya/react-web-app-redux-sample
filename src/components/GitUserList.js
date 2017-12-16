import React, {Component} from 'react';
import '../res/styles/App.css';
import GitUser from "./GitUser";

class GitUserList extends Component {


    constructor(props) {
        super(props);
        this.props = props;
    }


    componentWillMount() {
        console.log(this.props);
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

        const {data} = this.props;

        return (
            <div className="App">

                <ul>{data.map(item => <GitUser data={item}/>)}</ul>


            </div>
        );
    }
}


export default GitUserList;
