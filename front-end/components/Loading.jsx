import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm z-50">
      <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col items-center justify-center">
        <div className="relative my-4">
          {/* Main spinner */}
          <div className="w-20 h-20 rounded-full border-8 border-gray-200"></div>
          <div className="absolute top-0 left-0 w-20 h-20 rounded-full border-8 border-blue-600 border-t-transparent animate-spin"></div>

          {/* Inner spinner - counter rotation */}
          <div className="absolute top-5 left-5 w-10 h-10 rounded-full border-4 border-gray-200"></div>
          <div className="absolute top-5 left-5 w-10 h-10 rounded-full border-4 border-purple-500 border-t-transparent animate-spin"></div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-gray-700 font-medium">Đang tải dữ liệu...</p>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
            <div className="bg-blue-600 h-1.5 rounded-full animate-pulse w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
