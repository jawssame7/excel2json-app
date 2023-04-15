import { useContext, useRef } from 'react';
import { JsonMinifyContext } from '../content/JsonMinify';

const JsonDisplay = () => {
  const { json, setJson, minifyJson, setMinifyJson } = useContext(JsonMinifyContext);

  const minifyJsonTextAreaRef = useRef<HTMLTextAreaElement>(null);

  const onClickSmoothing = () => {
    let parseJson = '';
    debugger;
    try {
      parseJson = JSON.parse(json);
      setMinifyJson(JSON.stringify(parseJson));
    } catch (e: any) {
      setMinifyJson(e.message);
    }
  };

  const onClickCopyClipboard = () => {
    navigator.clipboard.writeText(minifyJson);
  };

  const onClickJsonClear = () => {
    setJson('');
    minifyJsonTextAreaRef.current.value = '';
  };

  const onClickAllClear = () => {
    setJson('');
    setMinifyJson('');
    minifyJsonTextAreaRef.current.value = '';
  };

  return (
    <>
      <div className={'flex flex-row mt-4'}>
        <textarea
          className={'textarea textarea-accent textarea-bordered textarea-lg w-full resize-y'}
          style={{ minHeight: '500px' }}
          ref={minifyJsonTextAreaRef}
          placeholder={''}
          readOnly={false}
          defaultValue={json}
          onChange={(e) => setJson(e.target.value)}
        ></textarea>
      </div>
      <div className={'flex flex-row mt-4'}>
        <button
          className={'btn btn-accent mr-2'}
          style={{ width: '150px' }}
          disabled={!json}
          onClick={onClickSmoothing}
        >
          圧縮
        </button>
        <button
          className={'btn btn-accent mr-2'}
          style={{ width: '200px' }}
          disabled={!json}
          onClick={onClickCopyClipboard}
        >
          クリップボードにコピー
        </button>
        <button
          className={'btn btn-secondary mr-2'}
          style={{ width: '200px' }}
          disabled={!minifyJson}
          onClick={onClickJsonClear}
        >
          入力したJsonをクリア
        </button>
        <button
          className={'btn btn-secondary mr-2'}
          style={{ width: '150px' }}
          onClick={onClickAllClear}
        >
          すべてクリア
        </button>
      </div>
      <div className={'flex flex-row mt-4'}>
        <textarea
          className={'textarea textarea-accent textarea-bordered textarea-lg w-full resize-y'}
          style={{ minHeight: '150px' }}
          placeholder={''}
          readOnly={false}
          value={minifyJson}
          onChange={(e) => setMinifyJson(e.target.value)}
        ></textarea>
      </div>
    </>
  );
};

export default JsonDisplay;
