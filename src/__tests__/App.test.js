import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm Liam Naule`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm liam naule/i,
    exact: false,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself with appropriate alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/portrait of liam naule/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", "/images/photo.jpg");
});

test("displays a second-level heading with the text `About Me`", () => {
  render(<App />);
  const aboutHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(aboutHeading).toBeInTheDocument();
});

test("displays a paragraph for the biography", () => {
  render(<App />);
  const bioParagraph = screen.getByText(/software engineer with experience/i);
  expect(bioParagraph).toBeInTheDocument();
  expect(bioParagraph.tagName.toLowerCase()).toBe("p");
});

test("displays a link to GitHub page", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", "https://github.com/liamnaule");
});

test("displays a link to LinkedIn page", () => {
  render(<App />);
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/liam-naule-33b110363/"
  );
});