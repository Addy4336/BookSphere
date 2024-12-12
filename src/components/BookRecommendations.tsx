import React from 'react';
import { Book } from '../types';
import { Sparkles } from 'lucide-react';

interface BookRecommendationsProps {
  books: Book[];
  onBorrow: (bookId: string) => void;
}

export const BookRecommendations: React.FC<BookRecommendationsProps> = ({
  books,
  onBorrow,
}) => {
  if (books.length === 0) return null;

  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="text-yellow-500" size={24} />
        <h2 className="text-xl font-semibold">Recommended for You</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {books.map((book) => (
          <div key={book.id} className="bg-white p-4 rounded-lg shadow-sm">
            <img
              src={book.coverUrl}
              alt={book.title}
              className="w-full h-32 object-cover rounded mb-3"
            />
            <h3 className="font-medium">{book.title}</h3>
            <p className="text-sm text-gray-600">{book.author}</p>
            <button
              onClick={() => onBorrow(book.id)}
              className="mt-3 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Borrow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};