import type { FC } from 'react';

import { useCodeMirror } from 'hooks';

import styles from './Editor.module.css';

interface Props {
  initialValue?: string;
  onChange?: (value: string) => void;
}

export const Editor: FC<Props> = ({ initialValue, onChange }) => {
  const [ref] = useCodeMirror<HTMLDivElement>({
    initialValue,
    onChange: (state) => onChange && onChange(state.doc.toString()),
  });

  return <div className={styles.container} ref={ref}></div>;
};
