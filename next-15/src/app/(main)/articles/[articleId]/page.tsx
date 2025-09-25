import Link from "next/link";

const ArticlePage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Article Heading
      </h1>

      <div className="space-y-4">
        <Link
          href="/articles/article-1?lang=en"
          className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200 dark:border-gray-700 text-blue-600 hover:text-blue-700"
        >
          Article in English
        </Link>
        <Link
          href="/articles/article-1?lang=es"
          className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200 dark:border-gray-700 text-blue-600 hover:text-blue-700"
        >
          Article in Spanish
        </Link>
        <Link
          href="/articles/article-1?lang=fr"
          className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200 dark:border-gray-700 text-blue-600 hover:text-blue-700"
        >
          Article in French
        </Link>
      </div>
    </div>
  );
};

export default ArticlePage;
