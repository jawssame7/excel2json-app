import { CSSProperties } from 'react';

const Toast = ({ showToast = false, msg = 'コピーしました！！' }) => {
  let cls: string = 'toast toast-top toast-start ';

  if (showToast) {
    cls = cls + ' fade-in';
  }

  return (
    <div className={cls} style={{ left: '14px' }}>
      <div className={'alert alert-success'}>
        <div>
          <span>{msg} </span>
        </div>
      </div>
    </div>
  );
};

export default Toast;
