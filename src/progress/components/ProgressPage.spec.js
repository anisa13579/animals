import { render, screen } from "@testing-library/react";
import ProgressPage from "./ProgressPage";

test("shows the text", () => {
  render(<ProgressPage />);
  expect(screen.getByText("Progress So Far")).toBeVisible();
  expect(screen.getByText("Reading")).toBeVisible();
  expect(screen.getByText("Maths")).toBeVisible();
});
