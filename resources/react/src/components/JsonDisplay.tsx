import { MouseEvent, useContext, useState } from 'react';
import { Context } from '../App';
import Toast from './Toast';

const JsonDisplay = ({ isMinified = false }) => {
  const { json, setJson, minifyJson, setMinifyJson } = useContext(Context);

  const btnText: string = isMinified
    ? '圧縮した結果をクリップボードにコピー'
    : '整形した結果をクリップボードにコピー';
  const copyBtnName: string = isMinified ? 'targetMinifiedJson' : 'targetJson';
  const clearBtnName: string = isMinified ? 'clearTargetMinifiedJson' : 'clearTargetJson';

  const [showToast, isShowToast] = useState(false);

  const onClickClipBoardCopy = (e: MouseEvent) => {
    if (e.target.name === 'targetJson') {
      navigator.clipboard.writeText(json);
    } else {
      navigator.clipboard.writeText(minifyJson);
    }
    isShowToast(true);
  };

  const onClickClear = (e: MouseEvent) => {
    if (e.target.name === 'clearTargetJson') {
      setJson('');
    } else {
      setMinifyJson('');
    }
  };

  return (
    <>
      <Toast showToast={showToast} />
      <div className={'mt-4 mx-auto'}>
        <div className={'flex flex-row mt-4'}>
          <button
            className={'btn btn-accent mr-2'}
            style={{ width: '300px' }}
            disabled={isMinified ? !minifyJson : !json}
            name={copyBtnName}
            onClick={onClickClipBoardCopy}
          >
            {btnText}
          </button>
          <button
            className={'btn btn-secondary'}
            style={{ width: '300px' }}
            disabled={isMinified ? !minifyJson : !json}
            name={clearBtnName}
            onClick={onClickClear}
          >
            クリア
          </button>
        </div>
        <div className={'flex flex-row mt-4'}>
          <textarea
            className={'textarea textarea-accent textarea-bordered textarea-lg w-full resize-y'}
            style={{ minHeight: isMinified ? '150px' : '500px' }}
            placeholder={'Json'}
            readOnly={true}
            value={isMinified ? minifyJson : json}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default JsonDisplay;
