import { createContext, useState, MouseEvent, useEffect } from 'react';
import { AiOutlineFileExcel, AiFillFileExcel } from 'react-icons/ai';
import { TiArrowRightOutline } from 'react-icons/ti';
import { VscJson } from 'react-icons/vsc';
import FileDropZone from './components/FileDropZone';
import JsonDisplay from './components/JsonDisplay';
import { sendFile } from './api/Excel2JsonApi';
import { Excel2JsonContext } from './types/Excel2JsonContext';

export const Context = createContext<Excel2JsonContext>({} as Excel2JsonContext);

function App() {
  const [file, setFile] = useState<File | null>(null);
  const [json, setJson] = useState<string>('');
  const [minifyJson, setMinifyJson] = useState<string>('');

  useEffect(() => {
    console.log('use effect');
    if (file) {
      sendFile(file).then((res) => {
        if (!(200 !== res.status)) {
          setJson(JSON.stringify(res.data, null, 4));
          setMinifyJson(JSON.stringify(res.data));
        }
      });
    }
  }, [file]);

  return (
    <div className="container mx-auto px-4">
      <Context.Provider value={{ setFile, json, setJson, minifyJson, setMinifyJson }}>
        <div className="grid grid-flow-row auto-rows-max mt-4">
          <div className="navbar bg-primary text-primary-content rounded-box">
            <h1>
              EXCELからJSONへ
              <AiOutlineFileExcel />
              <TiArrowRightOutline />
              <VscJson />
            </h1>
          </div>
        </div>
        <div className="container mx-auto mt-4">
          <div
            className={'flex flex-row mt-4 rounded-box file-input-primary'}
            style={{ borderWidth: '1px' }}
          >
            <FileDropZone />
          </div>
          <JsonDisplay isMinified={false} />
          <JsonDisplay isMinified={true} />
        </div>
        <footer className="footer items-center p-4 mt-4 bg-neutral text-neutral-content rounded-box ">
          <div className="items-center grid-flow-col">
            <AiFillFileExcel />
            <p>Excel To Json</p>
          </div>
        </footer>
      </Context.Provider>
    </div>
  );
}

export default App;
