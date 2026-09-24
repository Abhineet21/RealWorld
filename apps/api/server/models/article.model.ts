import { Comment } from './comment.model';

export interface Article {
  id: number;
  title: string;
  slug: string;
  description: string;
  comments: Comment[];
  favorited: boolean;
  
  author?: string;
  tags?: string[];
  createdAt?: string;
  updatedAt?: string;
  favoritesCount?: number;
}
