import { timeLine } from "@/utils/timeline";
import { GoDotFill } from "react-icons/go";

const Timeline = () => {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {timeLine.map((t, index) => (
        <li className="mb-10 ms-6" key={t.title}>
          <span className="absolute -start-3 flex size-6 items-center justify-center rounded-full bg-gray-500 ring-8 ring-white dark:ring-gray-900">
            <GoDotFill />
          </span>
          <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
            {t.title}
            <span
              className={`${index !== 0 && "hidden"} me-2 ms-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300`}
            >
              Latest
            </span>
          </h3>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {t.date}
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            {t.description}
          </p>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
