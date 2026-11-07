export const louderImages = {
  hero: "/images/hero.jpg",
  worship: "/images/dj.jpg",
  friends: "/images/middle.jpg",
  crowd: "/images/crowd.jpg",
  community: "/images/community.jpg",
  street: "/images/street.jpg",
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
