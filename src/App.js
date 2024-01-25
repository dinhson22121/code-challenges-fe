import React from 'react';
import CodeInterpreterView from './components/CodeInterpreterView';
import TextTranslatorView from './components/TextTranslatorView';
import ContextSubmissionAndExecution from './components/ContextSubmissionAndExecution';
import ComplexOperationView from './components/ComplexOperationView';

const App = () => {
  return (
    <div>
      <CodeInterpreterView />
      <ContextSubmissionAndExecution />
      <ComplexOperationView/>
      <TextTranslatorView />
    </div>
  );
};

export default App;
