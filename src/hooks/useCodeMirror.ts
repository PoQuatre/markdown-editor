import { defaultKeymap } from '@codemirror/commands';
import { highlightActiveLineGutter, lineNumbers } from '@codemirror/gutter';
import { defaultHighlightStyle } from '@codemirror/highlight';
import { history, historyKeymap } from '@codemirror/history';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { indentOnInput } from '@codemirror/language';
import { languages } from '@codemirror/language-data';
import { bracketMatching } from '@codemirror/matchbrackets';
import { EditorState } from '@codemirror/state';
import { oneDark } from '@codemirror/theme-one-dark';
import { EditorView, highlightActiveLine, keymap } from '@codemirror/view';
import type { RefObject } from 'react';
import { useEffect, useRef, useState } from 'react';

interface Props {
  initialValue?: string;
  onChange?: (state: EditorState) => void;
}

export const useCodeMirror = <T extends Element>({
  initialValue,
  onChange,
}: Props): [RefObject<T>, EditorView?] => {
  const editorRef = useRef<T>(null);
  const [view, setView] = useState<EditorView>();

  useEffect(() => {
    if (!editorRef.current || view) return;

    setView((view) => {
      if (view) return view;
      if (!editorRef.current) return undefined;

      return new EditorView({
        parent: editorRef.current,
        state: EditorState.create({
          doc: initialValue,
          extensions: [
            keymap.of([...defaultKeymap, ...historyKeymap]),
            lineNumbers(),
            highlightActiveLineGutter(),
            history(),
            indentOnInput(),
            bracketMatching(),
            defaultHighlightStyle.fallback,
            highlightActiveLine(),
            markdown({
              base: markdownLanguage,
              codeLanguages: languages,
              addKeymap: true,
            }),
            oneDark,
            EditorView.lineWrapping,
            EditorView.updateListener.of((update) => {
              if (update.docChanged) {
                onChange && onChange(update.state);
              }
            }),
          ],
        }),
      });
    });
  }, [initialValue, onChange, view]);

  return [editorRef, view];
};
