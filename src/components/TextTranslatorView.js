import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { translate } from '@vitalets/google-translate-api';

const Container = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

const TranslationContainer = styled.div`
  margin-top: 20px;
`;

const TextTranslatorView = () => {
  const [text, setText] = useState('');
  const [translation, setTranslation] = useState('');
  let URL_ENDP = 'http://localhost:8081/api/v1';
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleTranslateText = async () => {
    try {
      // const response = await axios.post('https://libretranslate.com/translate',
      // { text:text , sourceLanguage:'en',targetLanguage:'de'});
      const { response } = await translate(text, { to: 'de' });
      console.log(text);
      console.log(response);
      setTranslation(response);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  return (
    <Container>
      <h1>Text Translator View</h1>
      <TextArea value={text} onChange={handleTextChange} />
      <Button onClick={handleTranslateText}>Translate Text</Button>
      <TranslationContainer>
        <h2>Translation:</h2>
        <p>{translation}</p>
      </TranslationContainer>
    </Container>
  );
};

export default TextTranslatorView;
