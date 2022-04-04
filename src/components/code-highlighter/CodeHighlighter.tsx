import type { FC } from 'react';
import { useEffect, useState } from 'react';

import { extractTokens, getLanguage } from 'utils';

interface Token {
  text: string;
  style: string | null;
}

interface Props {
  className?: string;
}

export const CodeHighlighter: FC<Props> = ({ className, children }) => {
  const [tokens, setTokens] = useState<Token[]>([]);
  const lang = (className || '').substring(9);

  useEffect(() => {
    getLanguage(lang)
      .then((language) => {
        if (language) {
          const body = Array.isArray(children) ? (children[0] as string) : null;
          setTokens(extractTokens(body as string, language));
        }
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  }, [children, lang]);

  if (tokens.length > 0) {
    return (
      <code>
        {tokens.map(({ text, style }, i) => (
          <span key={i} className={style || ''}>
            {text}
          </span>
        ))}
      </code>
    );
  } else {
    return <code>{children}</code>;
  }
};
