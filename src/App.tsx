import { Editor } from 'components';

import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.container}>
      <Editor initialValue={'# Hello World!\n'} />
    </div>
  );
};
