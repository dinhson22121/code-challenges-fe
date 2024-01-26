import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const ResultContainer = styled.div`
  margin-top: 10px;
`;

const ContextSubmissionAndExecution = () => {

  const [equivalent, setEquivalent] = useState('');
  const [execution, setExecution] = useState('');
  const [resultEquivalent, setResultEquivalent] = useState('');
  const [resultExecution, setResultExecution] = useState('');
  const URL_ENDP = 'http://localhost:8081/api/v1';
  const handleEquivalentChange = (e) => {
    setEquivalent(e.target.value);
  };

  const handleExecutionChange = (e) => {
    setExecution(e.target.value);
  };

  const handleEquivalentSubmit = async () => {
    try {
      const response = await axios.post(URL_ENDP.concat('/context-submission'), { method:equivalent },{
       
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      setResultEquivalent(response.data.body);
      
    } catch (error) {
      console.error('Error submitting Input Equivalent:', error);
    }
  };

  const handleExecutionSubmit = async () => {
    try {
      const response = await axios.post(URL_ENDP.concat('/context-execution'), { body:execution },{
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setResultExecution(response.data.result);
    } catch (error) {
      console.error('Error submitting Input Execution:', error);
    }
  };

  return (
    <Container>
      <h1>Context Submission and Execution</h1>
      <InputContainer>
        <Input placeholder="Input Equivalent" value={equivalent} onChange={handleEquivalentChange} />
        <Button onClick={handleEquivalentSubmit}>Submit Equivalent</Button>
      </InputContainer>
      <ResultContainer>
        <h2>Status : {resultEquivalent}</h2>
        
      </ResultContainer>
      <InputContainer>
        <Input placeholder="Input Execution" value={execution} onChange={handleExecutionChange} />
        <Button onClick={handleExecutionSubmit}>Submit Execution</Button>
      </InputContainer>
      <ResultContainer>
        <h2>Result : {resultExecution}</h2>
      </ResultContainer>
    </Container>
  );
};

export default ContextSubmissionAndExecution;
