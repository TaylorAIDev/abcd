import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const startingTopics = ["JavaScript", "NextJS", "English", "Spanish", "Python"];
const tempLessons = [
  {
    title: "JavaScript 1",
    description: "This is a description",
  },
];

function App() {
  const [topic, setTopics] = useState(() => {
    const topics = startingTopics.map((t) => ({
      title: t,
      value: t,
      active: false,
    }));
    topics[0].active = true;
    return topics;
  });
  const handleChange = (value: string) => {
    setTopics((prev) => {
      return prev.map((t) => ({ ...t, active: t.value === value }));
    });
  };

  return (
    <div className="flex-col md:flex">
      <section className="grid-cols-2 px-4">
        <Tabs
          defaultValue={topic[0].value}
          onValueChange={handleChange}
          className="space-y-4"
        >
          <TabsList className="">
            {topic.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {topic.map((tab, i) => (
            <TabsContent
              key={tab.value}
              value={tab.value}
              className="space-y-4"
            >
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {tab.title}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
      <section className="grid-cols-2 px-4"></section>
    </div>
  );
}
export default App;
