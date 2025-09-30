const Loading: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-8 p-6">
      <div className="inline-flex items-center gap-3 text-gray-600">
        <span className="relative flex h-10 w-10">
          <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-20 animate-ping" />
          <span className="relative inline-flex h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 animate-spin [animation-duration:1.2s]" />
        </span>
        <span className="text-lg font-medium">Loading blog…</span>
      </div>

      <div className="w-full max-w-3xl space-y-4">
        {[1, 2, 3].map((key) => (
          <div
            key={key}
            className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="h-6 w-48 rounded bg-gray-200/80 dark:bg-gray-800 animate-pulse" />
            <div className="mt-3 h-4 w-3/4 rounded bg-gray-200/70 dark:bg-gray-800 animate-pulse" />
            <div className="mt-2 h-4 w-2/3 rounded bg-gray-200/60 dark:bg-gray-800 animate-pulse" />
            <div className="mt-4 flex gap-2">
              <div className="h-6 w-20 rounded-full bg-gray-200/70 dark:bg-gray-800 animate-pulse" />
              <div className="h-6 w-16 rounded-full bg-gray-200/70 dark:bg-gray-800 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
