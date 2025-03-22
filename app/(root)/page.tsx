import BookOverview from "@/components/BookOverview";
import BookList from "@/components/BookList";
import { sampleBooks } from "@/constants";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";

const Home = async () => {
  return (
    <>
      <BookOverview {...sampleBooks[0]} />

      <BookList
        title="Mais recentes"
        books={sampleBooks}
        containerClassName="mt-28"
      />
    </>
  );
};

export default Home;
