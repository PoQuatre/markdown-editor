import { useState } from 'react';

import { Editor, Preview } from 'components';

import styles from './App.module.css';

export const App = () => {
  const [note, setNote] = useState('');

  return (
    <div className={styles.container}>
      <Editor
        initialValue={'# Hello World!\n'}
        onChange={(value) => setNote(value)}
      />
      <Preview markdown={note} />
    </div>
  );
};
