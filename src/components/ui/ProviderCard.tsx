import Image from "next/image";

interface ProviderCardProps {
  name: string;
  preferredName?: string;
  credentials: string;
  bio: string;
  imageAlt: string;
  imageSrc?: string;
}

export default function ProviderCard({
  name,
  preferredName,
  credentials,
  bio,
  imageAlt,
  imageSrc,
}: ProviderCardProps) {
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="aspect-[4/3] relative bg-gradient-to-br from-soft-blue-light to-sage-light">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 512px"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center"
            role="img"
            aria-label={imageAlt}
          >
            <svg
              className="w-20 h-20 text-soft-blue/40"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-bold text-navy">{name}</h3>
        {preferredName && (
          <p className="text-sm text-muted mt-0.5">Known as {preferredName}</p>
        )}
        <p className="text-soft-blue font-medium mt-2">{credentials}</p>
        <p className="text-muted leading-relaxed mt-4">{bio}</p>
      </div>
    </article>
  );
}
