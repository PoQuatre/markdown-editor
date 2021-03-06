import { useState } from 'react';

import { Editor, Preview } from 'components';
import { defaultNote } from 'utils';

import styles from './App.module.css';

export const App = () => {
  const [note, setNote] = useState(defaultNote);

  return (
    <div className={styles.container}>
      <Editor initialValue={note} onChange={(value) => setNote(value)} />
      <Preview markdown={note} />
    </div>
  );
};
