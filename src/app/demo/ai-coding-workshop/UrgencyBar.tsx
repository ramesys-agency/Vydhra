"use client";

import Countdown, { useCountdown } from "./Countdown";
import { WORKSHOP, EARLY_BIRD_VALUE } from "./workshop.config";

export default function UrgencyBar() {
  const early = useCountdown(WORKSHOP.earlyBirdEndsAt);
  const earlyOver = early?.done;

  return (
    <a
      href="#register"
      className="block bg-zinc-950 px-4 py-2.5 text-center text-xs font-semibold text-white sm:text-sm"
    >
      <span className="material-icons mr-1 align-middle text-base text-primary">bolt</span>
      {earlyOver ? (
        <>
          Registrations close in <Countdown to={WORKSHOP.registrationClosesAt} variant="inline" doneText="now" /> ·{" "}
        </>
      ) : (
        <>
          Early-bird bonuses worth ₹{EARLY_BIRD_VALUE.toLocaleString("en-IN")} expire in{" "}
          <span className="text-primary">
            <Countdown to={WORKSHOP.earlyBirdEndsAt} variant="inline" />
          </span>{" "}
          ·{" "}
        </>
      )}
      <span className="underline underline-offset-2">Register now →</span>
    </a>
  );
}
