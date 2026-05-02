const { PracticeForm } = require("../pageObjects/practiceForm")

describe('demoqa form', () => {
  context('Visit form page', () => {
    beforeEach(() => {
      PracticeForm.visit();
    })

    it('Fill out practice form', () => {
      PracticeForm.firstNameInput.type("name");
      PracticeForm.lastNameInput.type("example");
      PracticeForm.emailInput.type("name@example.com");
      PracticeForm.genderRadio.check("Other");
      PracticeForm.mobileInput.type("1234567890");

      PracticeForm.dateInput.click();
      PracticeForm.dateWidgetPickerMonth.select("February");
      PracticeForm.dateWidgetPickerYear.select("1930");
      PracticeForm.dateWidgetPickerDay(28).click();

      PracticeForm.subjectInput.type("Economics{enter}");
      PracticeForm.hobbiesCheckbox.check("3");
      PracticeForm.imageUploadInput.selectFile("cypress/files/banana.jpg");
      PracticeForm.addressInput.type("Some address 123");
      PracticeForm.stateSelect.click();
      PracticeForm.selectWidget.contains("NCR").click();
      PracticeForm.citySelect.click();
      PracticeForm.selectWidget.contains("Delhi").click();
      PracticeForm.submitButton.click();

      const validate_values = ["name example", "name@example.com", "Other", "1234567890", "28 February,1930", "Economics", "Music", "banana.jpg", "Some address 123", "NCR Delhi"];

      for (let i = 0; i < validate_values.length; i++) {
        PracticeForm.modalDialog.find("tbody tr").eq(i).should("contain.text", validate_values[i]);
      }
    })
  })
})