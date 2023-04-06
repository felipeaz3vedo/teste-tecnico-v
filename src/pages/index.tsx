import Head from 'next/head';
import { MainCard } from '@/components/MainCard';
import { FilterArea } from '@/components/FilterArea';
import { Header } from '@/components/Header';
import { Card } from '@/components/Card';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Header />

      <FilterArea />

      <main className="flex flex-col">
        <section className="flex gap-5 flex-wrap mb-5">
          <MainCard color="orange" />
          <MainCard color="purple" />
          <MainCard color="green" />
        </section>

        <section className="flex gap-5 mb-5">
          <Card.Small />
          <Card.Small />
          <Card.Small />
          <Card.Small />
          <Card.Small />
          <Card.Small />
        </section>

        <section className="flex gap-5 mb-[30px]">
          <Card.Medium />
          <Card.Medium />
          <Card.Medium />
          <Card.Medium />
        </section>

        <section className="flex gap-5 mb-16">
          <Card.Table />
          <Card.Table />
          <Card.Table />
        </section>
      </main>
    </>
  );
}
