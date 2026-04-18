import { useState, useEffect } from 'react';

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // April 29, 2026, roughly at noon
    const targetDate = new Date('2026-04-29T12:00:00');

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-4 text-center mt-8 font-serif" data-testid="countdown">
      <div className="flex flex-col items-center">
        <span className="text-4xl font-display text-primary">{timeLeft.days}</span>
        <span className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Days</span>
      </div>
      <div className="text-3xl text-primary font-display">:</div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-display text-primary">{timeLeft.hours}</span>
        <span className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Hours</span>
      </div>
      <div className="text-3xl text-primary font-display">:</div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-display text-primary">{timeLeft.minutes}</span>
        <span className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Mins</span>
      </div>
      <div className="text-3xl text-primary font-display">:</div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-display text-primary">{timeLeft.seconds}</span>
        <span className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Secs</span>
      </div>
    </div>
  );
}
