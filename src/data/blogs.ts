export type Blog = {
  title: string;
  description: string;
  url: string;
  tags: string[];
  icon: string;
};

export const blogs: Blog[] = [
  {
    title: "Maths Blog",
    description: "Exploring proofs, number theory, logic, and fascinating mathematical ideas.",
    url: "https://mohamedezerbouzouraa.github.io/math-blog/",
    tags: ["Proofs", "Number Theory", "Logic"],
    icon: "∑",
  },
  {
    title: "The Infinite Mystery of Prime Numbers",
    description:
      "From Fermat's beautiful conjecture — shattered by Euler — to Wilson's elegant divisibility criterion and the deepest unsolved problems in mathematics.",
    url: "https://mohamedezerbouzouraa.github.io/prime_numbers/",
    tags: ["Prime Numbers", "Number Theory", "History of Ideas"],
    icon: "ℙ",
  },
];
