import { Book, User, BorrowRecord } from '../types';

// Calculate fine for overdue books (₹10 per day)
export const calculateFine = (borrowRecord: BorrowRecord): number => {
  if (!borrowRecord.returnDate && new Date() > borrowRecord.dueDate) {
    const daysOverdue = Math.floor(
      (new Date().getTime() - borrowRecord.dueDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    return Math.max(0, daysOverdue * 10);
  }
  return 0;
};

// Get book recommendations based on user history and preferences
export const getRecommendations = (
  books: Book[],
  user: User,
  borrowRecords: BorrowRecord[]
): Book[] => {
  const userGenres = new Set(user.preferredGenres);
  const borrowedBooks = new Set(user.borrowedBooks);

  return books
    .filter(book => !borrowedBooks.has(book.id) && book.available)
    .sort((a, b) => {
      const aScore = userGenres.has(a.genre) ? 1 : 0;
      const bScore = userGenres.has(b.genre) ? 1 : 0;
      return bScore - aScore;
    })
    .slice(0, 3);
};

// Filter and search books
export const filterBooks = (
  books: Book[],
  query: string,
  genre?: string,
  availability: 'all' | 'available' | 'borrowed' = 'all'
): Book[] => {
  return books.filter(book => {
    const matchesQuery = query
      ? book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
      : true;
    
    const matchesGenre = genre ? book.genre === genre : true;
    
    const matchesAvailability = availability === 'all' 
      ? true 
      : availability === 'available' 
        ? book.available 
        : !book.available;

    return matchesQuery && matchesGenre && matchesAvailability;
  });
};