import React, { useState } from 'react';
import { Header } from './components/Header';
import { BookCard } from './components/BookCard';
import { SearchBar } from './components/SearchBar';
import { UserDashboard } from './components/UserDashboard';
import { BookRecommendations } from './components/BookRecommendations';
import { mockBooks, mockUsers, mockBorrowRecords } from './data/mockData';
import { Book, SearchFilters } from './types';
import { filterBooks, getRecommendations } from './utils/bookUtils';

function App() {
  const [books, setBooks] = useState<Book[]>(mockBooks);
  const [currentUser] = useState(mockUsers[1]); // Aditya's account
  const [borrowRecords] = useState(mockBorrowRecords);
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    availability: 'all'
  });

  const handleBorrow = (bookId: string) => {
    setBooks(books.map(book => 
      book.id === bookId ? { ...book, available: false } : book
    ));
  };

  const handleReturn = (bookId: string) => {
    setBooks(books.map(book => 
      book.id === bookId ? { ...book, available: true } : book
    ));
  };

  const genres = Array.from(new Set(books.map(book => book.genre)));
  const filteredBooks = filterBooks(
    books,
    filters.query,
    filters.genre,
    filters.availability
  );

  const recommendations = getRecommendations(books, currentUser, borrowRecords);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header user={currentUser} />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <UserDashboard 
          user={currentUser}
          borrowRecords={borrowRecords}
          books={books}
        />

        <BookRecommendations
          books={recommendations}
          onBorrow={handleBorrow}
        />

        <SearchBar
          filters={filters}
          onFilterChange={setFilters}
          genres={genres}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map(book => (
            <BookCard
              key={book.id}
              book={book}
              onBorrow={handleBorrow}
              onReturn={handleReturn}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;