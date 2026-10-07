import SpotifyNowPlaying from './SpotifyNowPlaying';
import Marginalia from './Marginalia';
import TarotOfTheDay from './TarotOfTheDay';
import Sticker from './Sticker';
import Scatter from './Scatter';
import { SCATTER } from '../stickers';

/**
 * "now" — the bento row.
 *
 * Five pins of deliberately unequal size. The rhythm is the size variation,
 * not a row of matching cards: two small facts, one wide live feed, one tall
 * photograph, and a daily tarot draw along the bottom. Uniform cards here would flatten it back into the 3-column
 * feature grid every generated page ships.
 */
export default function Currently() {
  return (
    <section className="band" id="now">
      <div className="band__head">
        <h2 className="band__title">now</h2>
      </div>

      <div className="bento">
        <article className="pin pin--marigold bento__a">
          <Sticker of="ctrl" className="pin__mark" width="3rem" />
          <p className="pin__label">role</p>
          <p className="pin__lead">software engineer 1 @ costar group</p>
        </article>

        <article className="pin pin--blue bento__b">
          <Sticker of="coffee" className="pin__mark" width="3.25rem" />
          <p className="pin__label">stack</p>
          <p className="pin__lead">mainly working with react, c#, and .net</p>
        </article>

        <article className="pin pin--olive bento__c">
          <p className="pin__label">on repeat</p>
          <SpotifyNowPlaying />
        </article>

        <div className="bento__d">
          <Marginalia />
        </div>

        <article className="pin pin--rose bento__e">
          <p className="pin__label">card of the day</p>
          <TarotOfTheDay />
        </article>
      </div>
      <Scatter items={SCATTER.now} />
    </section>
  );
}
