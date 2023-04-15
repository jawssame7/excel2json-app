import { Dispatch, SetStateAction } from 'react';

export type JsonMinifyContextType = {
  json: string;
  setJson: Dispatch<SetStateAction<string>>;
  minifyJson: string;
  setMinifyJson: Dispatch<SetStateAction<string>>;
};
