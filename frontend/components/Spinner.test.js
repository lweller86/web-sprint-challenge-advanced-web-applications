import React from "react";
import Spinner from "./Spinner";
import { screen, render } from "@testing-library/react";

test("sanity", () => {
  expect(true).not.toBe(false);
});

test("Renders Without Errors", () => {
  render(<Spinner />);
});

test("Spinner does not render with function set to false.  ", () => {
  render(<Spinner on={false} />);
  const pleaseWait = screen.queryByText(/Please wait/i);
  expect(pleaseWait).toBeNull();
});

test("Renders functional when set to true ", () => {
  render(<Spinner on={true} />);
  const pleaseWait = screen.queryByText(/Please wait/i);
  expect(pleaseWait).toBeTruthy();
});
