import { useState, useEffect } from 'react'
import './App.css'
import { FormBuilder } from '@formio/react';
import "./styles/Builder.css"


const options = {
  noDefaultSubmitButton: true,
  builder: {
    basic: {},
    resource: false,
    data: false,
  },
};

function App() {
  const [jsonSchema, setSchema] = useState({ components: [] });

  const onFormChange = (schema) => {
    setSchema({ ...schema, components: [...schema.components] });
  };

  useEffect(() => {
    setSchema({ components: [] });
  }, [])

  return (
    <>
      <FormBuilder options={options} form={jsonSchema} onChange={onFormChange}/>
    </>
    
  )
}

export default App
