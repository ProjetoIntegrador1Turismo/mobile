import { CommentProps } from 'src/components/Comment/Comment.types';

export const useCommentViewModel = (props: CommentProps) => {
  return {
    ...props,
  };
};
