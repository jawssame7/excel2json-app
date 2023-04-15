import { createContext, useState } from 'react';
import { JsonMinifyContextType } from '../../types/JsonMinifyContextType';
import JsonDisplay from '../jsonminify/JsonDisplay';
import { JsonSmoothingContext } from './JsonSmoothing';

export const JsonMinifyContext = createContext<JsonMinifyContextType>({} as JsonMinifyContextType);

const JsonMinify = () => {
  const [json, setJson] = useState<string>('');
  const [minifyJson, setMinifyJson] = useState<string>('');
  return (
    <JsonMinifyContext.Provider value={{ json, setJson, minifyJson, setMinifyJson }}>
      <div className={'container mx-auto px-4'}>
        <JsonDisplay />
      </div>
    </JsonMinifyContext.Provider>
  );
};

export default JsonMinify;
