import Head from "next/head";
import Image from "next/image";
import { Header } from "@/components/Header";
import { TopCards } from "@/components/TopCards";
import { BarChart } from "@/components/BarChart";
import { RecentOrders } from "@/components/RecentOrders";
import { DoughnutChart } from "@/components/DoughnutChart";
export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-100 min-h-screen">
        <Header heading="Dashboard" />
        <TopCards />
        <div className="p-4 grid md:grid-cols-3 grid-ccols-1 gap-4">
          <div className="flex">
            <BarChart />
          </div>
          <div className="flex">
            <DoughnutChart />
          </div>

          <RecentOrders />
        </div>
      </main>
    </>
  );
}
