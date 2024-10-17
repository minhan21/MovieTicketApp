describe("Movie Ticket Booking App", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should show the films tab by default", async () => {
    await expect(element(by.text("Films"))).toBeVisible();
  });

  it("should navigate to booking screen when booking button is pressed", async () => {
    await element(by.text("Book Ticket")).atIndex(0).tap();
    await expect(element(by.text("Book Ticket"))).toBeVisible();
  });

  it("should add film to favorites when favorite button is pressed", async () => {
    await element(by.text("Add to Favorites")).atIndex(0).tap();
    await element(by.text("Favorites")).tap();
    await expect(element(by.text("Favorite"))).toBeVisible();
  });

  it("should show booked films in bookings tab", async () => {
    await element(by.text("Films")).tap();
    await element(by.text("Book Ticket")).atIndex(0).tap();
    await element(by.text("Book Ticket")).tap();
    await element(by.text("Bookings")).tap();
    await expect(element(by.text("Already Seen"))).toBeVisible();
  });

  it("should not allow booking already booked films", async () => {
    await element(by.text("Films")).tap();
    await expect(element(by.text("Already Seen"))).toBeVisible();
    await expect(element(by.text("Already Seen"))).toBeDisabled();
  });
});
