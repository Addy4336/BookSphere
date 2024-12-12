import React from 'react';
import { User, BorrowRecord, Book } from '../types';
import { calculateFine } from '../utils/bookUtils';
import { Clock, AlertCircle } from 'lucide-react';

interface UserDashboardProps {
  user: User;
  borrowRecords: BorrowRecord[];
  books: Book[];
}

export const UserDashboard: React.FC<UserDashboardProps> = ({
  user,
  borrowRecords,
  books,
}) => {
  const activeLoans = borrowRecords.filter(
    record => !record.returnDate && record.userId === user.id
  );

  const getBookById = (id: string) => books.find(book => book.id === id);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Your Active Loans</h2>
      {activeLoans.length === 0 ? (
        <p className="text-gray-500">No active loans</p>
      ) : (
        <div className="space-y-4">
          {activeLoans.map(loan => {
            const book = getBookById(loan.bookId);
            const fine = calculateFine(loan);
            if (!book) return null;

            return (
              <div key={loan.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-4">
                  <img
                    src={book.coverUrl}
                    alt={book.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-medium">{book.title}</h3>
                    <p className="text-sm text-gray-600">{book.author}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock size={14} className="text-gray-400" />
                      <span className="text-sm text-gray-600">
                        Due: {loan.dueDate.toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                {fine > 0 && (
                  <div className="flex items-center gap-2 text-red-500">
                    <AlertCircle size={16} />
                    <span>₹{fine} fine</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};