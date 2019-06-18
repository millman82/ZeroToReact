import * as React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Severity } from "../../types";
import AddNotification, { IAddNotificationProps } from "./AddNotification";

describe("AddNotification tests", () => {
  function renderAddNotification(overrides: Partial<IAddNotificationProps> = {}) {
    return render(<AddNotification onSubmit={jest.fn()} {...overrides} />);
  }

  it("calls onSubmit with values", () => {
    const onSubmit = jest.fn();
    const { getByLabelText } = renderAddNotification({
      onSubmit
    });

    fireEvent.change(getByLabelText("Event Name:"), {
      target: {
        value: "eventName"
      }
    });

    fireEvent.change(getByLabelText("Severity"), {
      target: {
        value: Severity.High
      }
    });

    // Trigger the click on the Submit button using fireEvent.click
    // Assert that onSubmit was called with the expected values
    expect(false).toBe(true);
  });

  it("resets form when Reset is clicked", () => {
    // Find the right react-testing-library function to use here
    const {} = renderAddNotification();

    // Trigger the click on the Reset button
    // Assert that the inputs values have reset
    expect(false).toBe(true);
  });
});
