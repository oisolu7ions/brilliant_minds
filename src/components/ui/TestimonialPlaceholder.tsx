export default function TestimonialPlaceholder() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((n) => (
        <blockquote
          key={n}
          className="rounded-2xl border border-border bg-white p-6 md:p-8 shadow-sm"
        >
          <svg
            className="h-8 w-8 text-soft-blue/30 mb-4"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.016 3.016 0 01-3.016 3.016c-1.518 0-2.916-1.134-3.242-2.658zM14.583 17.321C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.016 3.016 0 01-3.016 3.016c-1.518 0-2.916-1.134-3.242-2.658z" />
          </svg>
          {/* TODO: Replace with actual client testimonials when provided */}
          <p className="text-muted leading-relaxed italic">
            Client testimonial placeholder — a brief, authentic reflection on
            the experience will be added here once approved by the client.
          </p>
          <footer className="mt-4 text-sm font-semibold text-navy">
            — Client Name (Placeholder)
          </footer>
        </blockquote>
      ))}
    </div>
  );
}
