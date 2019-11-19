import React, { useReducer, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Header from '../header'
import Footer from '../footer'
import { Grid } from 'semantic-ui-react'
import ProfileCard from './profile_card'
import ProfileMain from './profile_main'
import ReturnHome from '../return_home'
import { loadProfiles } from '../../services/profile_service';

export default function ProfileSelect() {
    let reducer = (state, action) => {
        switch(action.type){
          case 'LOAD_PROFILES':
            return {...state, profiles: action.profiles}
          default:
            return state;
        }
      }

      //TODO: return this from a fake stub service
    let tempServiceProfiles = [
        {
            id: 5,
            name: "Sample Profile 1",
            description: "Sample Profile 1",
            isDefault: true
        },
        {
            id: 77,
            name: "Sample Profile 2",
            description: "Sample Profile 2",
            isDefault: false
        }
    ]

    const [state, dispatch] = React.useReducer(reducer, {profiles: tempServiceProfiles});

    //TODO: add call to a service layer.
    /*
      loadProfiles().then((result) => {
        dispatch({type: 'LOAD_PROFILES', profiles: result});
      })
      */

     function handleClickEdit(event) {
        //const name = event.target.name
        ReactDOM.render(<ProfileMain name="SRI Grammars"/>, document.getElementById('root'))
    }

    function handleClickCreate(event) {
        ReactDOM.render(<ProfileMain name="SRI Grammars"/>, document.getElementById('root'))
    }

    return (
        <>
            <Header />
            <div className='container'>
                <ReturnHome />
                <Grid stackable columns={3} >
                    {state.profiles.map ((item) =>
                        <Grid.Column key={item.id}>
                            <ProfileCard {...item} onClick={handleClickEdit}/>
                        </Grid.Column>
                    )}
                    <Grid.Column>
                        <ProfileCard name="New Profile" description="Create a new profile for this Institution." newItem={true} onClick={handleClickCreate}/>
                    </Grid.Column>
                </Grid>
            </div>
            &nbsp;
            <Footer />
        </>
    )
}