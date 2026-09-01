export class FormPage {
  constructor(page) {
    this.page = page;
    this.contactName = page.locator('#validationCustom01');
    this.contactNumber = page.locator('#validationCustom05[name="contactnumber"]');
    this.pickupDate = page.locator('#validationCustom05[name="pickupdate"]');
    this.paymentMethod = page.locator('#validationCustom04');
    this.submitButton = page.locator('[type="submit"]');
  }

  async goto() {
    await this.page.goto('https://practice.expandtesting.com/form-validation');
  }

  async fillForm(data) {
    await this.contactName.fill(data.contactName);
    await this.contactNumber.fill(data.contactNumber);
    await this.pickupDate.fill(data.pickupDate);
    await this.paymentMethod.selectOption({ label: data.paymentMethod });
  }

  async submit() {
    await this.submitButton.click();
  }
}
