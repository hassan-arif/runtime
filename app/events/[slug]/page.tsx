import { IEvent } from "@/database";
import { notFound } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const EventDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const res = await fetch(`${BASE_URL}/api/events/${slug}`);
  const { event }: { event: IEvent } = await res.json();

  if (!event) return notFound();

  return (
    <section id="event">
      <h1>
        Event Details: <br />
        {event.title}
      </h1>

      <p>{event.description}</p>

      <p>{event.location}</p>

      <p>{event.date}</p>

      <p>{event.time}</p>
    </section>
  );
};

export default EventDetailsPage;
