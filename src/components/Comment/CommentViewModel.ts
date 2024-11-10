import { CommentProps } from './Comment.types';

export const useCommentViewModel = (props: CommentProps) => {
  return {
    ...props,
  };
};
