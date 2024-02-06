import { Component } from 'react';

class LifeCycleClassComponent extends Component {
    constructor(props) {
        super(props);
        console.log('>>>>>>> constructor triggered');
        this.state = {
            fname: props.defaultName
        }
    }

    // whatever returned will update the state of fname
    static getDerivedStateFromProps(props, state) {
        console.log('>>>>>>> getDerivedStateFromProps')
        return {
            fname: state.fname
        }
    }

    componentDidMount() {
        console.log('>>>>>>> componentDidMount triggered');

        this.setState({
            fname: 'Sam Bahadur'
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('>>>>>>> shouldComponentUpdate triggered');
        if (this.props.fname !== nextProps.fname || this.state.fname !== nextState.fname) {
            console.log('re render triggered');
            return true;
        }
        console.log('re render prevented');
        return false;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('>>>>>>> getSnapshotBeforeUpdate triggered', prevState);
        return prevState
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('>>>>>>> componentDidUpdate triggered');
        console.log('snapshot: ', snapshot);
    }

    componentWillUnmount(){
        console.log('>>>>>>> componentWillUnmount triggered');
    }

    render() {
        console.log('>>>>>>> render triggered');
        return (
            <>
                Hi!! Welcome {this.state.fname}
            </>
        )
    }
}

export default LifeCycleClassComponent;