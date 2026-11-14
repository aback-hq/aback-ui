"use client";

import * as React from "react";
import { IconAlarm, IconClock, IconClockCheck } from "@tabler/icons-react";

import { cn } from "../lib/utils";

/**
 * Formats a duration for a countdown: `m:ss` under an hour, `h:mm:ss` from an
 * hour. Partial seconds round up, so the clock reads 0:00 only when the time
 * is actually up.
 */
export function formatCountdown(milliseconds: number) {
  const total = Math.max(0, Math.ceil(milliseconds / 1000));
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  const ss = String(seconds).padStart(2, "0");
  return hours > 0 ? `${hours}:${String(minutes).padStart(2, "0")}:${ss}` : `${minutes}:${ss}`;
}

function spokenDuration(milliseconds: number) {
  const total = Math.max(0, Math.ceil(milliseconds / 1000));
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  const parts = [
    hours ? `${hours} ${hours === 1 ? "hour" : "hours"}` : "",
    minutes ? `${minutes} ${minutes === 1 ? "minute" : "minutes"}` : "",
    seconds || total === 0 ? `${seconds} ${seconds === 1 ? "second" : "seconds"}` : "",
  ];
  return parts.filter(Boolean).join(" ");
}

function spokenThreshold(seconds: number) {
  if (seconds % 60 === 0) {
    const minutes = seconds / 60;
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"}`;
  }
  return `${seconds} ${seconds === 1 ? "second" : "seconds"}`;
}

// One clock for every countdown on the page. The snapshot is whole seconds,
// so a subscriber re-renders once a second however often the clock checks.
function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 250);
  return () => window.clearInterval(id);
}

function readNow() {
  return Math.floor(Date.now() / 1000) * 1000;
}

function readServerNow() {
  return null;
}

const sizes = {
  sm: "text-sm gap-1.5 [&_svg]:size-3.5",
  default: "text-base gap-2 [&_svg]:size-4",
  lg: "text-2xl gap-2.5 [&_svg]:size-5",
} as const;

export interface CountdownProps extends Omit<React.ComponentProps<"div">, "children"> {
  /** When the time runs out, as a Date or epoch milliseconds. */
  endsAt: Date | number;
  /** The timer's accessible name. */
  label?: string;
  /**
   * Seconds left at which the countdown turns to its warning state: an alarm
   * icon, the danger colour, and one announcement to screen readers. `0`
   * turns the warning off.
   */
  warnBelow?: number;
  /** Runs once when the time runs out. Runs again only after `endsAt` changes. */
  onComplete?: () => void;
  /** Shows the clock icon, which also changes with the state. */
  showIcon?: boolean;
  size?: keyof typeof sizes;
}

/**
 * Time left until a deadline, ticking once a second: an exam, a reserved
 * seat, a sale, a code that expires. It is a `role="timer"` region, so screen
 * readers do not read every tick; they hear one announcement when the
 * warning starts and one when the time is up.
 *
 * Before hydration it shows a placeholder, so a statically rendered page does
 * not disagree with the browser's clock.
 */
function Countdown({
  endsAt,
  label = "Time remaining",
  warnBelow = 60,
  onComplete,
  showIcon = true,
  size = "default",
  className,
  ...props
}: CountdownProps) {
  const now = React.useSyncExternalStore(subscribe, readNow, readServerNow);
  const end = typeof endsAt === "number" ? endsAt : endsAt.getTime();
  const remaining = now === null ? null : Math.max(0, end - now);
  const done = remaining !== null && remaining <= 0;
  const warning = !done && remaining !== null && warnBelow > 0 && remaining <= warnBelow * 1000;
  const state = remaining === null ? "pending" : done ? "done" : warning ? "warning" : "running";

  const completeRef = React.useRef(onComplete);
  const firedFor = React.useRef<number | null>(null);
  React.useEffect(() => {
    completeRef.current = onComplete;
  });
  React.useEffect(() => {
    if (done && firedFor.current !== end) {
      firedFor.current = end;
      completeRef.current?.();
    }
  }, [done, end]);

  const Icon = done ? IconClockCheck : warning ? IconAlarm : IconClock;
  const announcement = done
    ? `${label}: time is up.`
    : warning
      ? `${label}: less than ${spokenThreshold(warnBelow)} left.`
      : "";

  return (
    <div
      data-slot="countdown"
      data-state={state}
      className={cn("inline-flex items-center", className)}
      {...props}
    >
      <span
        role="timer"
        aria-label={label}
        className={cn(
          "inline-flex items-center font-medium text-foreground",
          state === "warning" && "text-danger",
          state === "done" && "text-muted-foreground",
          sizes[size],
        )}
      >
        {showIcon ? (
          <Icon
            aria-hidden="true"
            className={cn("shrink-0", state === "warning" && "animate-pulse motion-reduce:animate-none")}
          />
        ) : null}
        <span aria-hidden="true" className="font-mono tabular-nums">
          {remaining === null ? "--:--" : formatCountdown(remaining)}
        </span>
        <span className="sr-only">
          {remaining === null ? "Loading" : `${spokenDuration(remaining)} left`}
        </span>
      </span>
      <span role="status" className="sr-only">
        {announcement}
      </span>
    </div>
  );
}

export { Countdown };
