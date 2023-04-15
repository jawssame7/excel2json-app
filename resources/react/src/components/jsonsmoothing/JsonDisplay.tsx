import { useContext, useRef } from 'react';
import { JsonSmoothingContext } from '../content/JsonSmoothing';

const JsonDisplay = () => {
  const { json, setJson, minifyJson, setMinifyJson } = useContext(JsonSmoothingContext);

  const jsonTextAreaRef = useRef<HTMLTextAreaElement>(null);

  const onClickSmoothing = () => {
    let parseJson = '';
    try {
      parseJson = JSON.parse(minifyJson);
      setJson(JSON.stringify(parseJson, null, 2));
    } catch (e: any) {
      setJson(e.message);
    }
  };

  const onClickCopyClipboard = () => {
    navigator.clipboard.writeText(json);
  };

  const onClickJsonClear = () => {
    setMinifyJson('');
    jsonTextAreaRef.current.value = '';
  };

  const onClickAllClear = () => {
    setJson('');
    setMinifyJson('');
    jsonTextAreaRef.current.value = '';
  };

  return (
    <>
      <div className={'flex flex-row mt-4'}>
        <textarea
          className={'textarea textarea-accent textarea-bordered textarea-lg w-full resize-y'}
          style={{ minHeight: '150px' }}
          placeholder={'Jsonを貼り付け'}
          readOnly={false}
          ref={jsonTextAreaRef}
          defaultValue={minifyJson}
          onChange={(e) => setMinifyJson(e.target.value)}
        ></textarea>
      </div>
      <div className={'flex flex-row mt-4'}>
        <button
          className={'btn btn-accent mr-2'}
          style={{ width: '150px' }}
          disabled={!minifyJson}
          onClick={onClickSmoothing}
        >
          整形
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
          style={{ minHeight: '500px' }}
          placeholder={'整形結果'}
          readOnly={false}
          value={json}
        ></textarea>
      </div>
    </>
  );
};

export default JsonDisplay;
