import * as React from "react";
import { fireEvent, render } from "@testing-library/react";
import { INotificationItem, Severity } from "../../types";
import NotificationItem, { INotificationItemProps } from "./NotificationItem";

describe("NotificationItem tests", () => {
  const fakeEvent: INotificationItem = {
    id: 1,
    severity: Severity.High
  };

  function renderNotificationItem(props: Partial<INotificationItemProps> = {}) {
    return render(<NotificationItem event={fakeEvent} onRemove={jest.fn()} />);
  }

  it("renders item name", () => {
    // Find the right react-test-library function to use here
    const {} = renderNotificationItem();

    // Assert that item name is rendered in list item
    expect(false).toBe(true);
  });

  it("calls onRemove when Remove button is clicked", () => {
    const onRemove = jest.fn();
    // Find the right react-testing-library function to use here
    const {} = renderNotificationItem({
      onRemove
    });

    // Trigger click on the button using fireEvent.click
    // Assert that onRemove was called
    expect(false).toBe(true);
  });

  it("hides remove button when onRemove is not specified", () => {
    const onRemove = jest.fn();
    // Find the right react-testing-library function to use here
    const {} = renderNotificationItem({
      onRemove: undefined
    });

    // Assert that Remove button does not exist
    expect(false).toBe(true);
  });
});
