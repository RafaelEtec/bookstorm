import React from "react";
import Image from "next/image";

const BookOverview = ({
  title,
  author,
  genre,
  rating,
  total_copies,
  available_copies,
  description,
  color,
  cover,
}: Book) => {
  return (
    <section className="book-overview">
      <div className="flex flex-1 flex-col gap-5">
        <h1>{title}</h1>
      </div>

      <div className="book-info">
        <p>
          By <span className="font-semibold text-light-200">{author}</span>
        </p>
        <p>
          Category <span className="font-semibold text-light-200">{genre}</span>
        </p>
        <div className="flex flex-row gap-1">
          <Image src="/icons/star.svg" alt="star" width="22" height="22" />
          {rating}
        </div>
      </div>

      <div className="book-copies">
        <p>
          Total <span>{total_copies}</span>
        </p>
        <p>
          Disponíveis <span>{available_copies}</span>
        </p>
      </div>
    </section>
  );
};
export default BookOverview;
