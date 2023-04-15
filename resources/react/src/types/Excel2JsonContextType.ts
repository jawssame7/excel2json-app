import { Dispatch, SetStateAction } from 'react';

export type Excel2JsonContextType = {
  setFile: Dispatch<SetStateAction<File>>;
  json: string;
  setJson: Dispatch<SetStateAction<string>>;
  minifyJson: string;
  setMinifyJson: Dispatch<SetStateAction<string>>;
};
