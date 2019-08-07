import React from 'react';
import IntegratedResources from '../integrated_resources/integrated_resources';
import ReactDOM from 'react-dom';
//import IntegratedResources from '../integrated_resources/integrated_resources';

const MenuWell = (props) => {
    let handleClick = () =>  {
        if(props.name === 'Integrated Resources') {
            
            ReactDOM.render(<IntegratedResources name="Integrated Resources"/>, document.getElementById('root'));
        } else {
            console.log(props.name);
        }
    }

    return (
        <div className="well"  onClick={handleClick}>
                <span>{props.name}</span>
            </div>
    );
}

export default MenuWell;