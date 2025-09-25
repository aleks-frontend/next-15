"use client";

import Link from "next/link";
import { use } from "react";

const ArticlePage = ({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang: string }>;
}) => {
  // use() is a hook that allows us to use the params and searchParams in a client component without having to await them
  const { articleId } = use(params);
  const { lang } = use(searchParams);

  // Helper function to get link className based on active state
  const getLinkClassName = (currentLang: string) => {
    const baseClasses =
      "block p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border";
    const activeClasses =
      "bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 text-blue-800 dark:text-blue-200";
    const inactiveClasses =
      "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-blue-600 hover:text-blue-700";

    return `${baseClasses} ${
      lang === currentLang ? activeClasses : inactiveClasses
    }`;
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Article Heading {articleId}
      </h1>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        Language: {lang}
      </h2>

      <div className="space-y-4">
        <Link
          href={`/articles/${articleId}?lang=en`}
          className={getLinkClassName("en")}
        >
          Article in English {lang === "en" && "✓"}
        </Link>
        <Link
          href={`/articles/${articleId}?lang=es`}
          className={getLinkClassName("es")}
        >
          Article in Spanish {lang === "es" && "✓"}
        </Link>
        <Link
          href={`/articles/${articleId}?lang=fr`}
          className={getLinkClassName("fr")}
        >
          Article in French {lang === "fr" && "✓"}
        </Link>
      </div>
    </div>
  );
};

export default ArticlePage;
