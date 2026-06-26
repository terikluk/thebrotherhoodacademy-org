import Image from "next/image";

interface GalleryPhoto {
  src: string;
  alt: string;
}

interface GalleryGridProps {
  photos: GalleryPhoto[];
}

export default function GalleryGrid({ photos }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {photos.map((photo, i) => (
        <div
          key={i}
          className={`relative overflow-hidden rounded-xl ${
            i === 0 ? "col-span-2 md:col-span-1 row-span-2 min-h-72" : "min-h-48"
          }`}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}
