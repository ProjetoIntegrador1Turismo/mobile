import { FullCommentsListViewModelProps, FullCommentsListViewModel } from './FullCommentsList.types';

export function useFullCommentsListViewModel({ onClose }: FullCommentsListViewModelProps): FullCommentsListViewModel {
  const handleClose = () => {
    onClose();
  };

  return {
    handleClose,
  };
}
