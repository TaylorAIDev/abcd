import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import { tempJavascriptLessons, tempPythonLessons } from "../../data/lessons";
import type { Lesson } from "./schema";
import { tempJavascriptChallenges1 } from "@/data/challenges";

const startingTopics = ["JavaScript", "Python"];
const startingLessons: Record<string, Lesson[]> = {
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
  const [lessons, setLessons] = useState(() => {
    const lessons = startingLessons[topic[0].value];
    return lessons;
  });
  const [selectedLesson, setSelectedLesson] = useState<Lesson>(
    () => lessons[0]
  );
  const [selectedDoc, setSelectedDoc] = useState<string | undefined>(undefined);
  const handleChange = (value: string) => {
    setTopics((prev) => {
      return prev.map((t) => ({ ...t, active: t.value === value }));
    });
    setSelectedLesson(startingLessons[value][0]);
    setLessons(startingLessons[value]);
  };
  const handleNextLesson = () => {
    const index = lessons.findIndex((l) => l.title === selectedLesson.title);
    if (index === lessons.length - 1) {
      return;
    }
    setSelectedLesson(lessons[index + 1]);
  };
  const handlePrevLesson = () => {
    const index = lessons.findIndex((l) => l.title === selectedLesson.title);
    if (index === 0) {
      return;
    }
    setSelectedLesson(lessons[index - 1]);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Submitted");
  };
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <form className="flex-col px-4 py-4" onSubmit={handleSubmit}>
        <Tabs
          defaultValue={topic[0].value}
          onValueChange={handleChange}
          className="space-y-4 px-4"
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
              <div className="grid">
                <Card key={selectedLesson.title}>
                  <CardHeader>
                    <CardTitle>{selectedLesson.title}</CardTitle>
                    <CardDescription>
                      {selectedLesson.description}
                    </CardDescription>
                  </CardHeader>
                  {/* <CardContent>{lesson.content}</CardContent> */}
                  <CardFooter className="grid lg:grid-cols-6 grid-cols-3 gap-2">
                    <Button>Learn More</Button>
                    <Button onClick={handlePrevLesson}>Prev</Button>
                    <Button onClick={handleNextLesson}>Next</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <section className="p-4">
          <Input></Input>
        </section>
      </form>
      <section className="flex-col px-4 py-4">
        <Tabs defaultValue={"Challenge"} className="p-4">
          <TabsList className="">
            {["Challenge", "Answer"].map((t, i) => (
              <TabsTrigger key={t} value={t}>
                {t}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="Challenge">
            <Card>
              <CardHeader>
                <CardTitle>{selectedLesson?.challenges[0].title}</CardTitle>
                <CardDescription>
                  {selectedLesson?.challenges[0].challenge}
                </CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
          <TabsContent value="Answer">
            <Card>
              <CardHeader>
                <CardTitle>{selectedLesson?.challenges[0].title}</CardTitle>
                <CardDescription>
                  {selectedLesson?.challenges[0].answer}
                </CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
        </Tabs>
        <Tabs defaultValue={selectedLesson.docs[0].title} className="p-4">
          <TabsList className="">
            {selectedLesson.docs.map((doc, i) => (
              <TabsTrigger key={doc.title} value={doc.title}>
                {`Doc ${i + 1}`}
              </TabsTrigger>
            ))}
          </TabsList>
          {selectedLesson.docs.map((doc) => (
            <TabsContent key={doc.title} value={doc.title}>
              <Card>
                <CardHeader>
                  <CardTitle>{doc.title}</CardTitle>
                  <CardDescription>{doc.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <iframe
                    style={{ width: "100%", height: "500px" }}
                    src={doc.url}
                  ></iframe>
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </section>
  );
}
export default App;
