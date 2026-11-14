"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Countdown } from "@/components/ui/countdown";

export function CountdownExample() {
  const [quizEndsAt, setQuizEndsAt] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);
  // Fixed on first render, so the example deadline does not move on re-render.
  const [examEndsAt] = useState(() => Date.now() + (2 * 60 * 60 + 14 * 60 + 5) * 1000);

  return (
    <div className="flex w-full max-w-sm flex-col gap-8">
      <div className="flex items-center justify-between gap-4 border border-border px-4 py-3">
        <span className="text-sm font-medium text-foreground">Mock exam, example</span>
        <Countdown endsAt={examEndsAt} label="Exam time" warnBelow={5 * 60} />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            onClick={() => {
              setFinished(false);
              setQuizEndsAt(Date.now() + 15_000);
            }}
          >
            {quizEndsAt ? "Restart" : "Start"} a 15-second quiz
          </Button>
          {quizEndsAt ? (
            <Countdown
              endsAt={quizEndsAt}
              label="Quiz time"
              warnBelow={10}
              size="lg"
              onComplete={() => setFinished(true)}
            />
          ) : null}
        </div>
        <p className="min-h-5 text-sm text-muted-foreground">
          {finished ? "Time is up. onComplete ran once." : "The warning starts at 10 seconds."}
        </p>
      </div>
    </div>
  );
}
