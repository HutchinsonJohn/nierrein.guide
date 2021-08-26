import { Guide } from "@models/guide";
import Image from "next/image";
import Link from "next/link";

import defaultCover from "../../public/cover-guides.jpg";

export default function FeaturedGuides({
  guides = [],
}: {
  guides: Guide[];
}): JSX.Element {
  return (
    <section>
      <h2>Featured Guides</h2>

      {guides.map((guide) => (
        <Link href={`/guide/${guide.slug}`} key={guide.slug} passHref={true}>
          <a className="flex flex-col sm:flex-row p-4 bg-transparent-bg transition-transform rounded-md transform hover:-translate-y-1">
            <div className="h-44 sm:h-24 sm:w-24 relative">
              <Image
                objectFit="cover"
                layout="fill"
                src={guide?.cover?.url ?? defaultCover}
                alt="cover"
              />
            </div>

            <div className="flex flex-col justify-center ml-4">
              <h3 className="text-4xl">{guide.title}</h3>
              <span className="text-beige">by {guide.author}</span>
            </div>
          </a>
        </Link>
      ))}
    </section>
  );
}