import React from 'react';
import Grammar from '../components/grammar/grammar'
import GrammarForm from '../components/grammar/grammar_form'
import GrammarCreate from '../components/grammar/grammar_create'

const data = [[],['WE_33_44_34.xml','0','']]

export default {
    title: 'Grammars',
};
  
export const Form = () => <GrammarForm />;

export const Page = () => <Grammar name="Grammars" />

export const CreateGrammar = () => <GrammarCreate data={data} engine='Multiple Choice' productName='World English' productId='WE3E' start={1}/>
  