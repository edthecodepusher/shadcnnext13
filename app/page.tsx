import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { buttonVariants } from '@/components/ui/button';
import InfoCard from '@/components/InfoCard';
import { Main } from '@/components/Main';

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-3 pb-8 pt-4 md:py-2">
      <Main />
      <InfoCard />
    </section>
  );
}
