import React from 'react'
import ObjectiveMap from '../components/objectives/objective_map'
import Objective from '../components/objectives/objective'
import Objectives from '../pages/objectives'
import ObjectiveForm from '../components/objectives/objective_form';

export default {
    title: 'Objectives',
}

const objectiveData = [['id', 'name'], ['OBJ1', 'Objective Test 1'],['OBJTest', 'Objective Test']]
const objective = objectiveData[1]

export const ObjPage = () => <Objectives />

export const ObjMap = () => <ObjectiveMap data={objectiveData} />

export const Obj = () => <Objective row={objective} />

export const ObjForm = () => <ObjectiveForm />;