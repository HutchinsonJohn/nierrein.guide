import Image from "next/image";
import Link from "next/link";
import SVG from "react-inlinesvg";
import { AiOutlineUser } from "react-icons/ai";
import { StrapiImageFormats } from "@models/types";
import format from "date-fns/format";

interface ArticleProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  slug: string;
  image: StrapiImageFormats;
}

export default function Article({
  title = "Guide name",
  excerpt = "Lorem ipsum dolor sit amet",
  author = "author",
  date = "2021-08-28T00:51:14.244Z",
  slug = "getting-started",
  image,
}: ArticleProps): JSX.Element {
  return (
    <Link href={`/guide/${slug}`} passHref={true}>
      <a className="group">
        <article className="article-parent relative">
          <div className="diamond-border">
            <div className="article__mask absolute top-0 left-32 select-none ">
              <SVG src="/assets/images/icons/mask.svg" />
              <div className="losange h-16 w-16 sm:h-32 sm:w-32 lg:h-64 lg:w-64">
                <Image
                  objectFit="cover"
                  src={
                    image?.large?.url ??
                    image?.medium?.url ??
                    image?.small?.url ??
                    image?.thumbnail?.url
                  }
                  height={512}
                  width={512}
                  alt={`${title} thumbnail`}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center h-12 lg:h-20 bg-beige-inactive">
            <h3 className="ml-8 sm:ml-28 lg:ml-44 text-black text-xl lg:text-4xl font-semibold">
              {title}
            </h3>
          </div>
          <div className="bg-grey-foreground h-20 lg:h-44">
            <div className="relative ml-8 sm:ml-28 lg:ml-44 lg:pt-5 lg:pb-10 h-full">
              <div className="flex flex-col justify-around lg:justify-between h-full max-w-lg">
                <p className="hidden lg:block text-lg text-beige-active leading-tight">
                  {excerpt}
                </p>

                <div className="relative flex items-start flex-col lg:flex-row lg:justify-between text-beige-inactive">
                  <span className="flex gap-x-1">
                    <AiOutlineUser size={24} />
                    {author}
                  </span>

                  <SVG className="my-1 lg:hidden" src="/decorations/hr.svg" />

                  <SVG
                    className="absolute mt-6 hidden lg:block"
                    src="/decorations/article-underline.svg"
                  />

                  <span>{format(new Date(date), "PP")}</span>
                </div>
              </div>

              <SVG
                className="absolute right-3 lg:right-20 top-1/2 transform -translate-y-1/2 h-6 transition-transform ease-out-cubic lg:h-12 group-hover:translate-x-1 lg:group-hover:translate-x-6"
                src="/decorations/arrow.svg"
              />
            </div>
          </div>
        </article>
      </a>
    </Link>
  );
}
