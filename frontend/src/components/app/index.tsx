import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState } from "react";
import { tempJavascriptLessons, tempPythonLessons } from "./data";
import type { Lesson } from "./schema";

const startingTopics = ["JavaScript", "Python"];
const lessons: Record<string, Lesson[]> = {
  JavaScript: tempJavascriptLessons,
  Python: tempPythonLessons,
};

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
                <section>
                  {lessons[tab.value]?.map((lesson) => (
                    <Card key={lesson.title}>
                      <CardHeader>
                        <CardTitle>{lesson.title}</CardTitle>
                        <CardDescription>{lesson.description}</CardDescription>
                      </CardHeader>
                      {/* <CardContent>{lesson.content}</CardContent> */}
                      <CardFooter>
                        <Button>Learn More</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </section>
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
