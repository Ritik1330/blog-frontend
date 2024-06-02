"use client"

import BarChart from "@/components/BarChart";
import Card, { CardProps, OverviewCard } from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import ViewsCard, { ViewsProps } from "@/components/ViewsCard";
import { Users2, Activity, FilesIcon, Layers } from "lucide-react";

const CardData: CardProps[] = [
  {
    label: "Total Users",
    icon: Users2,
    count: "25",
    description: "Total number of name suggestions generated.",
  },
  {
    label: "Total Views",
    icon: Activity,
    count: "10,235",
    description: "Total number of views on the platform.",
  },
  {
    label: "Total Posts",
    icon: FilesIcon,
    count: "567",
    description: "Total number of posts published on the platform.",
  },
  {
    label: "Total Categories",
    icon: Layers,
    count: "32",
    description: "Total number of categories available on the platform.",
  },
];

const articles: ViewsProps[] = [
  {
    title: "The Importance of Exercise",
    summary:
      "Regular exercise has numerous health benefits, including improved cardiovascular health, weight management, and mood enhancement.",
    views: "1200",
    image: "https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg",
  },
  {
    title: "Tips for Productivity",
    summary:
      "Boost your productivity with these helpful tips, including time management techniques, setting goals, and minimizing distractions.",
    views: "800",
    image: "https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg",
  },
  {
    title: "Healthy Eating Habits",
    summary:
      "Eating a balanced diet rich in fruits, vegetables, lean proteins, and whole grains is essential for overall health and well-being.",
    views: "1500",
    image: "https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg",
  },
  {
    title: "Importance of Sleep",
    summary:
      "Getting enough quality sleep is crucial for physical and mental health. It helps with memory consolidation, immune function, and mood regulation.",
    views: "900",
    image: "https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg",
  },
  {
    title: "Stress Management Techniques",
    summary:
      "Learn effective strategies for managing stress, such as deep breathing exercises, mindfulness meditation, and engaging in hobbies.",
    views: "1100",
    image: "https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg",
  },
  {
    title: "The Benefits of Meditation",
    summary:
      "Meditation can reduce stress, improve concentration, promote emotional well-being, and enhance self-awareness. Discover its many benefits.",
    views: "1300",
    image: "https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg",
  },
  // Add more articles as needed
];

export default function page() {
  return (
    <div className=" flex flex-col sm:gap-4 sm:py-4 px-4 sm:pl-16  ">
    {/* <div className=" flex flex-col gap-4 w-full "> */}
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {CardData.map((d, i) => (
          <OverviewCard
            key={i}
            count={d.count}
            description={d.description}
            icon={d.icon}
            label={d.label}
          />
        ))}
      </section>
      <section className="grid grid-cols-1 gap-3 transition-all lg:grid-cols-2">
        <Card className="">
          <p className="p-4 font-semibold">Overview</p>
          <BarChart />
        </Card >
        <Card className="flex justify-between gap-4">
          <p>Recents Articles</p>
          <p className="text-sm to-gray-400 dark:text-white">
            You get 25K views in this month.
          </p>
          {articles.map((article, i) => (
            <ViewsCard
              key={i}
              title={article.title}
              summary={article.summary}
              views={article.views}
              image={article.image}
            />
          ))}
        </Card>
      </section>
    </div>
  );
}
