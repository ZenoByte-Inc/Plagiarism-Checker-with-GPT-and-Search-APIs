import React from 'react';
import { AlertCircle, X } from 'lucide-react';

export default function ErrorMessage({ message = 'Đã xảy ra lỗi. Vui lòng thử lại sau.', onClose }) {
  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded shadow-md mb-4">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <AlertCircle className="h-5 w-5 text-red-500" />
        </div>
        <div className="ml-3 flex-1">
          <h3 className="text-sm font-medium text-red-800">Lỗi</h3>
          <div className="mt-1 text-sm text-red-700">{message}</div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg p-1.5 hover:bg-red-100 inline-flex items-center justify-center"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
