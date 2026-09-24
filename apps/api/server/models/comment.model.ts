import { Article } from './article.model';

export interface Comment {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  body: string;
  article?: Article;

  // Optional metadata
  author?: string;
  authorId?: number;
  likesCount?: number;
  edited?: boolean;
}
