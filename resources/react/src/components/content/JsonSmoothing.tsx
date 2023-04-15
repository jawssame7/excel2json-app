import JsonDisplay from '../jsonsmoothing/JsonDisplay';
import { JsonSmoothingContextType } from '../../types/JsonSmoothingContextType';
import { createContext, useState } from 'react';

export const JsonSmoothingContext = createContext<JsonSmoothingContextType>(
  {} as JsonSmoothingContextType
);

const JsonSmoothing = () => {
  const [json, setJson] = useState<string>('');
  const [minifyJson, setMinifyJson] = useState<string>('');
  return (
    <JsonSmoothingContext.Provider value={{ json, setJson, minifyJson, setMinifyJson }}>
      <div className={'container mx-auto px-4'}>
        <JsonDisplay />
      </div>
    </JsonSmoothingContext.Provider>
  );
};

export default JsonSmoothing;
