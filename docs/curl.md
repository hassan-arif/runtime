```bash
curl --location 'https://runtime-pi.vercel.app/api/events'
```

```bash
curl --location 'https://runtime-pi.vercel.app/api/events/ces-2026-the-global-stage-for-innovation'
```

```bash
curl --location 'https://runtime-pi.vercel.app/api/events' \
--form 'title="Web Summit Lisbon 2026"' \
--form 'description="The event that Forbes says '\''defines the future of the tech industry'\'' returns to Lisbon."' \
--form 'overview="Web Summit 2026 gathers over 70,000 attendees and the world'\''s most influential founders to discuss the intersection of technology, climate change, and ethics."' \
--form 'venue="Altice Arena"' \
--form 'location="Lisbon, Portugal"' \
--form 'date="2026-11-09"' \
--form 'time="10:00"' \
--form 'mode="offline"' \
--form 'audience="Startups, Investors, Tech journalists, Politicians"' \
--form 'agenda="[
    \"10:00 AM | Opening Night: The State of Tech\",
    \"12:30 PM | Venture Capital Roundtables\",
    \"03:00 PM | Sustainability & Green Tech Panel\",
    \"08:00 PM | Night Summit Networking\"
]"' \
--form 'organizer="Web Summit"' \
--form 'tags="[\"Startups\", \"Investment\", \"Web\", \"Future\"]"' \
--form 'image=@"/Users/hassan/Desktop/Web-Summit-centre-stage-with-crowd.png"'
```
