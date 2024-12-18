import { InterestPoint } from 'src/common/models/interestpoint.model';
import { Guide } from 'src/common/models/guide.model';
import { Comment } from 'src/common/models/comment.model';

export interface TourPageData {
  interestPoint: InterestPoint;
  guidesWhoOfferThisTour: Guide[];
  comments: Comment[];
}
