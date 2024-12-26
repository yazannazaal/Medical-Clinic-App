import React, { useState, useEffect } from "react";

const Loding = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // محاكاة تحميل البيانات (يمكنك استبدالها بمنطق تحميل حقيقي)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // تحميل لمدة 3 ثوانٍ
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* شاشة التحميل */}
      {isLoading ? (
        <div className="flex flex-col items-center">
          <div className="loader w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-700 text-lg">Loading...</p>
        </div>
      ) : (
        /* المحتوى الرئيسي */
        <div className="transition-opacity duration-1000 opacity-100">
          <h1 className="text-3xl font-bold text-gray-800">Welcome!</h1>
          <p className="text-gray-600 mt-4">Content uploaded successfully.</p>
        </div>
      )}
    </div>
  );
};

export default Loding;
