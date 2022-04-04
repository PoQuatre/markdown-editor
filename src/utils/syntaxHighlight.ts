import { highlightTree } from '@codemirror/highlight';
import type { Language } from '@codemirror/language';
import { languages } from '@codemirror/language-data';
import { oneDarkHighlightStyle } from '@codemirror/theme-one-dark';

interface Token {
  text: string;
  style: string | null;
}

export const extractTokens = (text: string, language: Language) => {
  const tree = language.parser.parse(text);
  const tokens: Token[] = [];

  let pos = 0;
  highlightTree(
    tree,
    (tag, scope) => oneDarkHighlightStyle.match(tag, scope),
    (from, to, classes) => {
      if (from > pos) tokens.push({ text: text.slice(pos, from), style: null });
      tokens.push({ text: text.slice(from, to), style: classes });
      pos = to;
    },
  );

  if (tree.length > pos) {
    tokens.push({ text: text.slice(pos, tree.length), style: null });
  }

  return tokens;
};

export const getLanguage = async (
  language: string,
): Promise<Language | null> => {
  const i = languages.findIndex((desciption) => {
    return desciption.alias.indexOf(language) >= 0;
  });
  return languages[i] ? (await languages[i].load()).language : null;
};
