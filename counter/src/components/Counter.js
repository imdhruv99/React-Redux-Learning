import classes from './Counter.module.css'
import {  useDispatch, useSelector } from 'react-redux';

const Counter = () => {

    const dispatch = useDispatch();

    const counter = useSelector(state => state.counter);

    const show = useSelector(state => state.showCounter);

    const incrementHandler = () => {
        dispatch({
            type: 'increment'
        });
    };

    const increaseHandler = () => {
        dispatch({
            type: 'increase',
            amount: 5
        });
    };

    const decrementHandler = () => {
        dispatch({
            type: 'decrement'
        });
    };

    const toggleCounterHandler = () => {
        dispatch({
            type: 'toggle'
        });
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increase By 5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;

// class Counter extends Component {

//     incrementHandler() {
//         this.props.increment();
//     }

//     decrementHandler () {
//         this.props.decrement();
//     }

//     toggleCounterHandler() {

//     }

//     render() {
//         return (
//             <main className={classes.counter}>
//                 <h1>Redux Counter</h1>
//                 <div className={classes.value}>{this.props.counter}</div>
//                 <div>
//                     <button onClick={this.incrementHandler.bind(th)}>Increment</button>
//                     <button onClick={this.decrementHandler.bind()}>Decrement</button>
//                 </div>
//                 <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//             </main>
//         );
//     }
// }

// // mapping state to props
// const mapStateToProps = state => {
//     return {
//         counter: state.counter
//     };
// }

// // mapping dispatch to props
// const mapDispatchToProps = dispatch => {
//     return {
//         increment: () => dispatch({type: 'increment'}),
//         decrement: () => dispatch({type: 'decrement'}),
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);