import { Dispatch, SetStateAction } from 'react';

export type Excel2JsonContext = {
  setFile: Dispatch<SetStateAction<File>>;
  setJson: Dispatch<SetStateAction<string>>;
  setMinifyJson: Dispatch<SetStateAction<string>>;
};
