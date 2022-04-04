import { defaultSchema } from 'hast-util-sanitize';
import { createElement } from 'react';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkReact from 'remark-react';
import { unified } from 'unified';

const sanitize = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    code: [...(defaultSchema.attributes?.code || []), 'className'],
  },
};

export const useRemark = (markdown: string) => {
  return unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkReact, {
      createElement,
      sanitize,
    })
    .processSync(markdown).result;
};
