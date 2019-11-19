import React, { useReducer, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Header from '../header'
import Footer from '../footer'
import { Grid } from 'semantic-ui-react'
import ProfileCard from './profile_card'
import ReturnHome from '../return_home'
import { loadProfile } from '../../services/profile_service';

export default function ProfileMain() {
    let reducer = (state, action) => {
        switch(action.type){
          case 'LOAD_PROFILE':
            return {...state, profiles: action.profiles}
          default:
            return state;
        }
      }

      //TODO: return this from a fake stub service
    let tempServiceProfile = {
        id: 5,
        name: "Sample Profile 1",
        description: "Sample Profile 1",
        isDefault: true,
        outcomes: [
        ],
        outcomeActivities: [
        ]
    };


    const [state, dispatch] = React.useReducer(reducer, {profile: tempServiceProfile});

    //TODO: add call to a service layer.
    /*
      loadProfile().then((result) => {
        dispatch({type: 'LOAD_PROFILE', profile: result});
      })
      */

     function handleClickOutcomes(event) {
        //const name = event.target.name
        alert('edit outcomes');
        //ReactDOM.render(<ProfileSelect name="SRI Grammars"/>, document.getElementById('root'))
    }

    function handleClickActivities(event) {
        alert('edit activities');
        //ReactDOM.render(<ProfileSelect name="SRI Grammars"/>, document.getElementById('root'))
    }

    return (
        <>
            <Header />
            <div className='container'>
                <ReturnHome />
                <Grid stackable columns={2} >
                    <Grid.Column>
                        <ProfileCard name="Outcomes" description="Define Outcomes for this Profile." newItem={false} onClick={handleClickOutcomes}/>
                    </Grid.Column>
                    <Grid.Column>
                        <ProfileCard name="Activities" description="Link Outcomes to Activites." newItem={false} disabled={(state.profile.outcomes.length < 1)} onClick={handleClickActivities}/>
                    </Grid.Column>
                </Grid>
            </div>
            &nbsp;
            <Footer />
        </>
    )
}