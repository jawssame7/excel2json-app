import { createContext, useState, ChangeEvent, MouseEvent, useEffect } from 'react';
import Icon from '@mdi/react';
import FileDropZone from './components/FileDropZone';
import { mdiFileExcelBox, mdiFileExcelBoxOutline, mdiCodeJson, mdiArrowRightThin } from '@mdi/js';
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

  const onChangeFile = (e: ChangeEvent) => {
    const files = e.target.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const onClickSendFile = () => {
    if (!file) {
      return;
    }
    sendFile(file).then((res) => {
      if (!(200 !== res.status)) {
        setJson(JSON.stringify(res.data, null, 4));
        setMinifyJson(JSON.stringify(res.data));
      }
    });
  };

  const onClickClipBoardCopy = (e: MouseEvent) => {
    debugger;
    if (e.target.name === 'targetJson') {
      navigator.clipboard.writeText(json);
    } else {
      navigator.clipboard.writeText(minifyJson);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <Context.Provider value={{ setFile, setJson, setMinifyJson }}>
        <div className="grid grid-flow-row auto-rows-max mt-4">
          <div className="navbar bg-primary text-primary-content rounded-box">
            <h1>
              EXCELからJSONへ
              <Icon path={mdiFileExcelBoxOutline} size={1} style={{ display: 'inline' }}></Icon>
              <Icon path={mdiArrowRightThin} size={1} style={{ display: 'inline' }}></Icon>
              <Icon path={mdiCodeJson} size={1} style={{ display: 'inline' }}></Icon>
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
          <div className={'mt-4 mx-auto'}>
            <div className={'flex flex-row mt-4'}>
              <button
                className={'btn btn-accent'}
                style={{ width: '300px' }}
                disabled={!json}
                name={'targetJson'}
                onClick={onClickClipBoardCopy}
              >
                整形した結果をクリップボードにコピー
              </button>
            </div>
            <div className={'flex flex-row mt-4'}>
              <textarea
                className={'textarea textarea-accent textarea-bordered textarea-lg w-full resize-y'}
                style={{ minHeight: '500px' }}
                placeholder={'Json'}
                readOnly={true}
                value={json}
              ></textarea>
            </div>
          </div>
          <div className={'mt-4 mx-auto'}>
            <div className={'flex flex-row mt-4'}>
              <button
                className={'btn btn-accent'}
                name={'targetMinifyJson'}
                style={{ width: '300px' }}
                disabled={!minifyJson}
                onClick={onClickClipBoardCopy}
              >
                圧縮した結果をクリップボードにコピー
              </button>
            </div>
            <div className={'flex flex-row mt-4'}>
              <textarea
                className={'textarea textarea-accent textarea-bordered textarea-lg w-full resize-y'}
                style={{ minHeight: '200px' }}
                placeholder={'minify Json'}
                readOnly={true}
                value={minifyJson}
              ></textarea>
            </div>
          </div>
        </div>
        <footer className="footer items-center p-4 mt-4 bg-neutral text-neutral-content rounded-box ">
          <div className="items-center grid-flow-col">
            <Icon path={mdiFileExcelBox} size={1}></Icon>
            <p>Excel To Json</p>
          </div>
        </footer>
      </Context.Provider>
    </div>
  );
}

export default App;
