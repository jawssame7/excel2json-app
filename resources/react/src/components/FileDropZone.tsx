import { useCallback, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import { Context } from '../App';

const accept = {
  'application/vnd.ms-excel': ['.xls'],
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
  // '.xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
  //   [],
};

const dropZoneStyle = {
  height: '300px',
  width: '100%',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
  fontSize: '1.125rem',
  lineHeight: '1.75rem',
};

const FileDropZone = () => {
  const { setFile } = useContext(Context);
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    if (acceptedFiles && acceptedFiles[0]) {
      setFile(acceptedFiles[0]);
    }
    console.log('acceptedFiles:', acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: accept,
    maxFiles: 1,
    onDrop,
  });

  //'.xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'

  return (
    <div {...getRootProps()} style={dropZoneStyle}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>ファイルをDrop ...</p>
      ) : (
        <p>ファイルをDropするかクリックしてファイルを選択</p>
      )}
    </div>
  );
};

export default FileDropZone;
