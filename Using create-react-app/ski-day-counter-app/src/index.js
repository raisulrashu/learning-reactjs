import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let skiData = {
    total: 50,          //total # of ski days
    powder: 20,         //total # of powder days
    backcountry: 10,    //total # of backcountry days
    goal: 100           //# of days would like to ski
}

class SkiDayCounter extends Component {
    
    getPercentage = decimal => decimal * 100 + '%';

    calcGoalProgress = (total, goal) => this.getPercentage(total/goal);

    render(){
        //destructuring props
        const { total, powder, backcountry, goal } = this.props;
        return (
            <section>
                <div>
                    <p>Total Days: {total} </p>
                </div>
                <div>
                    <p>Powder Days: {powder} </p>
                </div>
                <div>
                    <p>Backcountry Days: {backcountry} </p>
                </div>
                <div>
                    <p>Goal: {goal} </p>
                </div>
                <div>
                    <p>Goal Progress: {this.calcGoalProgress(total, goal)} </p>
                </div>
                
            </section>
        )
    }
}

ReactDOM.render(
    <SkiDayCounter 
        total={skiData.total}
        powder={skiData.powder}
        backcountry={skiData.backcountry}
        goal={skiData.goal}
    />,
    document.getElementById('root')
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
