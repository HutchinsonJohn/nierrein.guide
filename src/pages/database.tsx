import Layout from "@components/Layout";
import Meta from "@components/Meta";
import Image from "next/image";
import Link from "next/link";

import storiesImg from "../../public/database/stories.jpg";
import assetsImg from "../../public/database/assets.jpg";
import artworksImg from "../../public/database/artworks.jpg";
import costumesImg from "../../public/database/costumes.jpg";
import weaponsImg from "../../public/database/weapons.jpg";
import memoirsImg from "../../public/database/memoirs.jpg";

export default function Database(): JSX.Element {
  return (
    <Layout>
      <Meta
        title="Database"
        description="3D Model viewer, Stories, Assets and Artworks"
        cover="https://nierrein.guide/cover-database.jpg"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Link href="/database/costumes">
          <a className="flex justify-center items-center px-4 py-2 h-24 md:h-52 relative z-10 border-2 border-beige-text border-opacity-60 transform transition-transform ease-out-cubic hover:scale-105">
            <Image
              height={350}
              width={200}
              layout="fill"
              objectFit="cover"
              className="-z-1 filter brightness-50"
              src={costumesImg}
              alt="Costumes thumbnail"
            />
            <h3 className="text-4xl md:text-5xl font-bold tracking-wider text-beige text-shadow">
              Costumes
            </h3>
          </a>
        </Link>

        <Link href="/database/weapons">
          <a className="flex justify-center items-center px-4 py-2 h-24 md:h-52 relative z-10 border-2 border-beige-text border-opacity-60 transform transition-transform ease-out-cubic hover:scale-105">
            <Image
              height={350}
              width={200}
              layout="fill"
              objectFit="cover"
              className="-z-1 filter brightness-50"
              src={weaponsImg}
              alt="Weapons thumbnail"
            />
            <h3 className="text-4xl md:text-5xl font-bold tracking-wider text-beige text-shadow">
              Weapons
            </h3>
          </a>
        </Link>

        <Link href="/database/memoirs">
          <a className="flex justify-center items-center px-4 py-2 h-24 md:h-52 relative z-10 border-2 border-beige-text border-opacity-60 transform transition-transform ease-out-cubic hover:scale-105">
            <Image
              height={350}
              width={200}
              layout="fill"
              objectFit="cover"
              className="-z-1 filter brightness-50"
              src={memoirsImg}
              alt="Memoirs thumbnail"
            />
            <h3 className="text-4xl md:text-5xl font-bold tracking-wider text-beige text-shadow">
              Memoirs
            </h3>
          </a>
        </Link>

        <Link href="/database/stories">
          <a className="flex justify-center items-center px-4 py-2 h-24 md:h-52 relative z-10 border-2 border-beige-text border-opacity-60 transform transition-transform ease-out-cubic hover:scale-105">
            <Image
              height={350}
              width={200}
              layout="fill"
              objectFit="cover"
              className="-z-1 filter brightness-50"
              src={storiesImg}
              alt="Stories thumbnail"
            />
            <h3 className="text-4xl md:text-5xl font-bold tracking-wider text-beige text-shadow">
              Stories
            </h3>
          </a>
        </Link>

        <Link href="/database/assets">
          <a className="flex justify-center items-center px-4 py-2 h-24 md:h-52 relative z-10 border-2 border-beige-text border-opacity-60 transform transition-transform ease-out-cubic hover:scale-105">
            <Image
              height={350}
              width={200}
              layout="fill"
              objectFit="cover"
              className="-z-1 filter brightness-50"
              src={assetsImg}
              alt="Assets thumbnail"
            />
            <h3 className="text-4xl md:text-5xl font-bold tracking-wider text-beige text-shadow">
              Assets
            </h3>
          </a>
        </Link>

        <Link href="/database/artworks">
          <a className="flex justify-center items-center px-4 py-2 h-24 md:h-52 relative z-10 border-2 border-beige-text border-opacity-60 transform transition-transform ease-out-cubic hover:scale-105">
            <Image
              height={350}
              width={200}
              layout="fill"
              objectFit="cover"
              className="-z-1 filter brightness-50"
              src={artworksImg}
              alt="Artworks thumbnail"
            />
            <h3 className="text-4xl md:text-5xl font-bold tracking-wider text-beige text-shadow">
              Artworks
            </h3>
          </a>
        </Link>
      </div>
    </Layout>
  );
}
