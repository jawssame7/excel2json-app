import { createContext, useState, MouseEvent, useEffect } from 'react';
import { AiOutlineFileExcel, AiFillFileExcel } from 'react-icons/ai';
import { TiArrowRightOutline } from 'react-icons/ti';
import { VscJson } from 'react-icons/vsc';
import FileDropZone from '../excel2json/FileDropZone';
import JsonDisplay from '../excel2json/JsonDisplay';
import { sendFile } from '../../api/Excel2JsonApi';
import { Excel2JsonContextType } from '../../types/Excel2JsonContextType';

export const Excel2jsonContext = createContext<Excel2JsonContextType>({} as Excel2JsonContextType);

const Excel2json = () => {
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
    <Excel2jsonContext.Provider value={{ setFile, json, setJson, minifyJson, setMinifyJson }}>
      <div className={'container mx-auto px-4'}>
        <div
          className={'flex flex-row mt-4 rounded-box file-input-primary'}
          style={{ borderWidth: '1px' }}
        >
          <FileDropZone />
        </div>
        <JsonDisplay isMinified={false} />
        <JsonDisplay isMinified={true} />
      </div>
    </Excel2jsonContext.Provider>
  );
};

export default Excel2json;
