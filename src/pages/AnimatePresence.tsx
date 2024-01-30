import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

interface cardProps {
  id: number;
  title: string;
  subtitle: string;
  description: string;
}

const cards: cardProps[] = [
	{
		id: 1,
		title: "Card 1",
		subtitle: "Information 1",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	},
	{
		id: 2,
		title: "Card 2",
		subtitle: "Information 2",
		description:
			"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
	},
	{
		id: 3,
		title: "Card 3",
		subtitle: "Information 3",
		description:
			"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
	},
	{
		id: 4,
		title: "Card 4",
		subtitle: "Information 4",
		description:
			"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
];

const AnimatePresencePracPage = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setSelectedId(selectedId === id ? null : id);
  };

  const handleCardClose = () => {
    setSelectedId(null);
  }

  return (
    <CardsContainer>
      {cards.map((card) => (
        selectedId !== card.id ? (
          <CardBox
            key={card.id}
            onClick={() => handleCardClick(card.id)}
          >
            <CardInformation>
              <h1>{card.title}</h1>
              <h2>{card.subtitle}</h2>
            </CardInformation>
          </CardBox>
        ) : (
          <div></div>
        )
      ))}
      <AnimatePresence>
        {selectedId !== null && (
          <OpenCardBox
            key="openCard"
            layout
            initial={{ y: -50, scale: 0 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 50, scale: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => handleCardClose()}
          >
            <CardInformation>
              <h1>{cards[selectedId - 1].title}</h1>
              <h2>{cards[selectedId - 1].subtitle}</h2>
              <p>{cards[selectedId - 1].description}</p>
            </CardInformation>
          </OpenCardBox>
        )}
      </AnimatePresence>
      <DimLayer
        animate={{ opacity: selectedId !== null ? 0.3 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </CardsContainer>
  );
};

export default AnimatePresencePracPage;

const CardsContainer = styled.div`
	width: 50rem;
	height: 30rem;
	padding: 3rem;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(2, 1fr);
	gap: 1.5rem;
	border-radius: 20px;
	background: #8eb6bb;

  position: relative;
`;

const CardBox = styled(motion.div)`
	background: #fff;
	border-radius: 15px;
	width: 100%;
	height: 100%;
	cursor: pointer;

	display: flex;
	flex-direction: column;
	justify-content: end;

	&:nth-child(1) {
		grid-column: 1 / span 2;
		grid-row: 1;
	}
	&:nth-child(2) {
		grid-column: 3;
		grid-row: 1;
	}
	&:nth-child(3) {
		grid-column: 1;
		grid-row: 2;
	}
	&:nth-child(4) {
		grid-column: 2 / span 2;
		grid-row: 2;
	}
`;

const CardInformation = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2rem 1.5rem;
	gap: 0.8rem;
  line-height: 1.2;

	h1 {
		font-size: 1.5rem;
		font-weight: 700;
	}

	h2 {
		font-size: 1.2rem;
		font-weight: 500;
	}
`;

const OpenCardBox = styled(motion.div)`
  background-color: white;
	border-radius: 15px;
	height: calc(100% - 10rem);
	width: 40rem;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	z-index: 10;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	flex-direction: column;

  cursor: pointer;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const DimLayer = styled(motion.div)`
	position: absolute;
	height: 100%;
	width: 100%;
	left: 0;
	top: 0;
	background: #000000;
	opacity: 0;
	pointer-events: none;

  border-radius: 20px;
`;
