export interface Post {
  date: string;
  href: string;
  title: string;
  year: number;
}
export const posts: Post[] = [
  {
    date: "Nov 16",
    href: "https://medium.com/@JuanPabloHerrera/measuring-retention-9fe15649f33f",
    title: "Measuring Retention",
    year: 2025,
  },
  {
    date: "Jun 11",
    href: "https://medium.com/@JuanPabloHerrera/mcp-ai-productivity-05e09618d192",
    title: "MCP, AI, Productivity",
    year: 2025,
  },
  {
    date: "Jan 26",
    href: "https://medium.com/@JuanPabloHerrera/a-b-testing-streamlit-and-statsig-30ba3532d999",
    title: "A/B Testing, Streamlit, and Statsig",
    year: 2025,
  },
  {
    date: "Jan 5",
    href: "https://medium.com/nerd-for-tech/simulating-the-pitfalls-of-peeking-in-a-b-testing-05824fae245c",
    title: "Simulating the Pitfalls of Peeking in A/B Testing",
    year: 2025,
  },
  {
    date: "Dec 12",
    href: "https://medium.com/nerd-for-tech/late-deliveries-and-ratings-propensity-score-matching-approach-dfa333b330ec",
    title: "Late Deliveries and Ratings",
    year: 2024,
  },
  {
    date: "Dec 01",
    href: "https://medium.com/@JuanPabloHerrera/why-interrupted-time-series-might-be-your-new-favorite-data-tool-399d260a9cd9",
    title: "Why Interrupted Time Series Might Be Your New Favorite Data Tool",
    year: 2024,
  },
  {
    date: "Aug 25",
    href: "https://medium.com/@JuanPabloHerrera/thoughts-about-modeling-on-clustered-data-1-2-fbfb7c2645b0",
    title: "Clustered Data and Linear Models: Avoiding the Traps",
    year: 2024,
  },
];
export const projects = [
  {
    year: "2025",
    href: "https://github.com/juanpi19/causal-attribution-analysis",
    title: "Causal Inference in Retail",
  },
  {
    year: "2024",
    href: "https://github.com/juanpi19/park-smart",
    title: "ParkSmart: A solution to the street parking issue in Los Angeles",
  },
];
