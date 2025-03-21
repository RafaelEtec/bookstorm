import BookOverview from "@/components/BookOverview";
import BookList from "@/components/BookList";
import { sampleBooks } from "@/constants";

const Home = () => (
  <>
    <BookOverview {...sampleBooks[0]} />

    <BookList
      title="Mais recentes"
      books={sampleBooks}
      containerClassName="mt-28"
    />
  </>
);

export default Home;
