import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

// 1️⃣ Heading test
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const heading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    level: 1,
  });
  expect(heading).toBeInTheDocument();
});

// 2️⃣ Image test
test("displays an image with correct alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/profile picture/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src");
});

// 3️⃣ About Me section
test("displays a second-level heading with the text 'About Me'", () => {
  render(<App />);
  const aboutHeading = screen.getByRole("heading", { name: /about me/i, level: 2 });
  expect(aboutHeading).toBeInTheDocument();
});

// 4️⃣ Paragraph test
test("displays a paragraph about the user", () => {
  render(<App />);
  const paragraph = screen.getByText(/i am/i);
  expect(paragraph).toBeInTheDocument();
});

// 5️⃣ GitHub and LinkedIn links
test("displays GitHub and LinkedIn links with correct hrefs", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });

  expect(githubLink).toHaveAttribute("href", expect.stringContaining("github.com"));
  expect(linkedinLink).toHaveAttribute("href", expect.stringContaining("linkedin.com"));
});
