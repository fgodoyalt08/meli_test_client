import { IItem } from './IItem';
import { IAuthor } from './IAuthor';
import { ICategory } from './ICategory';

export class IRequestItems {

  author: IAuthor;

  categories: ICategory[];

  items: IItem[];
};
