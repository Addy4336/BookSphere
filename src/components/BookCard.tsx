import React from 'react';
import { Book } from '../types';
import { BookOpen } from 'lucide-react';

interface BookCardProps {
  book: Book;
  onBorrow?: (bookId: string) => void;
  onReturn?: (bookId: string) => void;
}

export const BookCard: React.FC<BookCardProps> = ({ book, onBorrow, onReturn }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={book.coverUrl} 
        alt={book.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{book.title}</h3>
        <p className="text-gray-600">{book.author}</p>
        <p className="text-sm text-gray-500 mt-1">{book.genre}</p>
        <p className="text-sm mt-2 line-clamp-2">{book.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className={`px-2 py-1 rounded text-sm ${
            book.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {book.available ? 'Available' : 'Borrowed'}
          </span>
          {book.available ? (
            <button
              onClick={() => onBorrow?.(book.id)}
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              <BookOpen size={16} />
              Borrow
            </button>
          ) : (
            <button
              onClick={() => onReturn?.(book.id)}
              className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Return
            </button>
          )}
        </div>
      </div>
    </div>
  );
};