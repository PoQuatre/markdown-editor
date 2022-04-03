import { EditorState } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import type { RefObject } from 'react';
import { useEffect, useRef, useState } from 'react';

interface Props {
  initialValue?: string;
  onChange?: (state: EditorState) => void;
}

export const useCodeMirror = <T extends Element>({
  initialValue,
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
          extensions: [],
        }),
      });
    });
  }, [initialValue, view]);

  return [editorRef, view];
};
