import Image from 'next/image';
import css from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={css.container}>
      <div className={css.hero}>
        <Image src="/hero.webp" alt="Rental car" fill className={css.background} priority />
        <div className={css.content}>
          <div className={css.text}>
            <h1 className={css.title}>Find your perfect rental car</h1>
            <p className={css.subtitle}>Reliable and budget-friendly rentals for any journey</p>
          </div>
          <Link href="/catalog" className={css.button}>
            View Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}
