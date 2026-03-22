import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders NFT Ticketing title", () => {
  render(<App />);
  const title = screen.getByText(/NFT Ticketing/i);
  expect(title).toBeInTheDocument();
});

test("renders Connect Wallet button", () => {
  render(<App />);
  const button = screen.getByText(/Connect Wallet/i);
  expect(button).toBeInTheDocument();
});

test("renders Buy Ticket button", () => {
  render(<App />);
  const button = screen.getByText(/Buy Ticket/i);
  expect(button).toBeInTheDocument();
});