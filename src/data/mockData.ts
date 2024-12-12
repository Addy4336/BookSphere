import { Book, User, BorrowRecord } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@booksphere.com',
    role: 'admin',
    preferredGenres: ['Fiction', 'Science']
  },
  {
    id: '2',
    name: 'Aditya',
    email: 'aditya@example.com',
    role: 'user',
    preferredGenres: ['Fiction', 'Mystery', 'Science'],
    borrowedBooks: ['2']
  }
];

export const mockBooks: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    available: true,
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400',
    description: 'A story of decadence and excess.',
    addedDate: new Date('2024-01-01')
  },
  {
    id: '2',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    genre: 'Mystery',
    available: false,
    coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400',
    description: 'A psychological thriller that will keep you guessing.',
    addedDate: new Date('2024-01-15')
  },
  {
    id: '3',
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    genre: 'Science',
    available: true,
    coverUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400',
    description: 'An exploration of the universe and its mysteries.',
    addedDate: new Date('2024-01-20')
  }
];

export const mockBorrowRecords: BorrowRecord[] = [
  {
    id: '1',
    userId: '2',
    bookId: '2',
    borrowDate: new Date('2024-01-15'),
    dueDate: new Date('2024-01-29')
  }
];