import type { FC } from 'react';

import { useRemark } from 'hooks';

import styles from './Preview.module.css';

interface Props {
  markdown: string;
}

export const Preview: FC<Props> = ({ markdown }) => {
  const html = useRemark(markdown);

  return <div className={styles.container}>{html}</div>;
};
