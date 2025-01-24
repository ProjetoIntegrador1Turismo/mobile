import { Comment } from 'src/common/models/comment.model';

export interface FullCommentsListProps {
  comments: Comment[];
  onClose: () => void;
}

export interface FullCommentsListViewModelProps {
  onClose: () => void;
}

export interface FullCommentsListViewModel {
  handleClose: () => void;
}
