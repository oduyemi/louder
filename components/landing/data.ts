export const louderImages = {
  hero: "/images/hero.jpg",
  worship: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1000&q=85",
  friends: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85",
  crowd: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=85",
  community: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1000&q=85",
  street: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85",
};

export const louderNav = [
  { label: "The movement", href: "#movement" },
  { label: "The experience", href: "#experience" },
  { label: "The people", href: "#moments" },
];

export const experiences = [
  {
    number: "01",
    tag: "TURN IT UP",
    title: "Worship with your whole heart.",
    copy: "Big sound, open hearts and room to express what matters most.",
    image: louderImages.worship,
    alt: "A worshipper singing with passion",
    tone: "gold",
  },
  {
    number: "02",
    tag: "FIND YOUR PEOPLE",
    title: "Come for the moment. Leave with a community.",
    copy: "Real conversations, new friendships and people who make space for you.",
    image: louderImages.friends,
    alt: "Friends spending time together",
    tone: "cyan",
  },
  {
    number: "03",
    tag: "TAKE IT FURTHER",
    title: "Let your faith have a footprint.",
    copy: "The love doesn't stop when the music does. We carry it into everyday life.",
    image: louderImages.street,
    alt: "A community gathering outdoors",
    tone: "orange",
  },
];

export const galleryItems = [
  { image: louderImages.crowd, alt: "A crowd at a live music event", label: "THE SOUND", className: "gallery-feature" },
  { image: louderImages.friends, alt: "Friends enjoying time together", label: "THE PEOPLE", className: "gallery-tall" },
  { image: louderImages.worship, alt: "A person singing during worship", label: "THE HEART", className: "gallery-small" },
  { image: louderImages.community, alt: "A group sharing a moment", label: "THE CONNECTION", className: "gallery-wide" },
];
