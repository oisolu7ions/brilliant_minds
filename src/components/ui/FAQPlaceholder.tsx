import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQPlaceholder() {
  return (
    <div className="space-y-4">
      {FAQ_ITEMS.map((item) => (
        <details
          key={item.question}
          className="group rounded-xl border border-border bg-white overflow-hidden"
        >
          <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-semibold text-navy hover:bg-gray-light transition-colors list-none [&::-webkit-details-marker]:hidden">
            {item.question}
            <svg
              className="h-5 w-5 shrink-0 text-soft-blue transition-transform group-open:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="px-6 pb-4 text-muted leading-relaxed border-t border-border pt-4">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
