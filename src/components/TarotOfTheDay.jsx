import DECK from '../data/tarot.json';

/**
 * "card of the day" — one draw from a 78-card deck.
 *
 * Deck data and art come from krates98/tarotcardapi (MIT). That project is a
 * self-hosted Express server with no public deployment, so the deck is vendored
 * into `src/data/tarot.json` and `public/tarot/` instead of fetched.
 *
 * The draw is seeded by the visitor's local date, not Math.random(): everyone
 * gets the same card on the same day, and a reload doesn't reshuffle it — a
 * card "of the day" that changes on refresh is just a slot machine.
 */

/** FNV-1a over the date string. Small, fast, and spreads adjacent days apart. */
function hash(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i += 1) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

function todaysCard(date = new Date()) {
  const key = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  return DECK[hash(key) % DECK.length];
}

export default function TarotOfTheDay() {
  const card = todaysCard();
  // Every description is two paragraphs: the meaning, then the advice. Only
  // the first fits the pin; the second sits behind a disclosure.
  const [meaning, advice] = card.description.split('\n\n');

  return (
    <div className="tarot">
      <img
        className="tarot__card"
        src={card.image}
        alt={`${card.name} tarot card`}
        width={300}
        height={525}
        loading="lazy"
        decoding="async"
      />
      <div className="tarot__text">
        <p className="pin__lead">{card.name.toLowerCase()}</p>
        <p className="tarot__meaning">{meaning}</p>
        {advice && (
          <details className="tarot__more">
            <summary>read more</summary>
            <p>{advice}</p>
          </details>
        )}
      </div>
    </div>
  );
}
