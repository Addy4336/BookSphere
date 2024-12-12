export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  borrowedBooks?: string[];
  preferredGenres?: string[];
}

export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  available: boolean;
  coverUrl: string;
  description: string;
  addedDate: Date;
}

export interface BorrowRecord {
  id: string;
  userId: string;
  bookId: string;
  borrowDate: Date;
  dueDate: Date;
  returnDate?: Date;
  fine?: number;
}

export interface SearchFilters {
  query: string;
  genre?: string;
  availability?: 'all' | 'available' | 'borrowed';
  sortBy?: 'title' | 'author' | 'date';
}