import { Button, Container } from "react-bootstrap";
import FantasyBooks from "../data/fantasy.json";
import HistoryBooks from "../data/history.json";
import HorrorBooks from "../data/horror.json";
import RomanceBooks from "../data/romance.json";
import ScifiBooks from "../data/scifi.json";

const Buttons = ({ setBooks }) => {
  const categories = [
    {
      name: "Fantasy",
      variant:"success",
      data: FantasyBooks,
    },
    {
      name: "History",
      variant: "warning",
      data: HistoryBooks,
    },
    {
      name: "Horror",
      variant:"dark",
      data: HorrorBooks,
    },
    {
      name: "Romance",
      variant:"danger",
      data: RomanceBooks,
    },
    {
      name: "SciFi",
      variant:"info",
      data: ScifiBooks,
    },
  ];
  return (
    <Container>
      <div className="text-center p-3">
        {categories.map((category, index) => (
          <Button
            variant={category.variant}
            className="mx-2"
            onClick={() => setBooks(category.data)}
            key={index}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </Container>
  );
};
export default Buttons;
