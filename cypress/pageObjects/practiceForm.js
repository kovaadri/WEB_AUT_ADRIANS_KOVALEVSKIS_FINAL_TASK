import { BasePage } from "./basePage";

export class PracticeForm extends BasePage {
  static get url() {
    return "/automation-practice-form";
  }

  static get firstNameInput() {
    return cy.get("#firstName");
  }

  static get lastNameInput() {
    return cy.get("#lastName");
  }
  
  static get emailInput() {
    return cy.get("#userEmail");
  }

  static get genderRadio() {
    return cy.get("input[name='gender']");
  }

  static get mobileInput() {
    return cy.get("#userNumber");
  }

  static get dateInput() {
    return cy.get("#dateOfBirthInput");
  }

  static get dateWidgetPickerMonth() {
    return cy.get(".react-datepicker__month-select");
  }

  static get dateWidgetPickerYear() {
    return cy.get(".react-datepicker__year-select");
  }

  static dateWidgetPickerDay(day) {
    return cy.get(`.react-datepicker__day--0${day}`).not(".react-datepicker__day--outside-month");
  }
  
  static get subjectInput() {
    return cy.get("#subjectsInput");
  }

  static get hobbiesCheckbox() {
    return cy.get("#hobbiesWrapper").find("input[type='checkbox']");
  }

  static get imageUploadInput() {
    return cy.get("#uploadPicture");
  }

  static get addressInput() {
    return cy.get("#currentAddress");
  }

  static get stateSelect() {
    return cy.get("#state");
  }

  static get citySelect() {
    return cy.get("#city");
  }

  static get selectWidget() {
    return cy.get("div.css-qr46ko[role='listbox']");
  }

  static get submitButton() {
    return cy.get("#submit");
  }

  static get modalDialog() {
    return cy.get(".modal-body");
  }
}