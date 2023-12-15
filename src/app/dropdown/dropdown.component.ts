import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DropdownService } from './services/dropdown.component.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Output() optionSelected: EventEmitter<string> = new EventEmitter<string>();
  dropdownForm: FormGroup;
  isDropdownExpanded: boolean = false;
  options: any[] = [];
  selectedOption!: string;
  selectedLabelText: string = '';

  constructor(
    private dropdownService: DropdownService,
    private fb: FormBuilder
  ) {
    this.dropdownForm = this.fb.group({
      selectedOption: [''],
    });
  }

  ngOnInit(): void {
    this.dropdownService.getOptions().subscribe((data) => {
      this.options = data.options;
      if (this.options.length > 0) {
        this.selectedOption = this.options[0].label;
        this.selectedLabelText = this.selectedOption;
        this.dropdownForm.patchValue({ selectedOption: this.options[0].value });
      }
    });
  }

  /**
   * @description Handles the selection change of the dropdown.
   * @param selectedOption - The label of the selected option.
   */
  onSelectChange(selectedOption: string): void {
    this.selectedOption = selectedOption;
    this.selectedLabelText = this.selectedOption;
    this.optionSelected.emit(this.selectedOption);
    this.isDropdownExpanded = false;
  }
  /**
   * @description Gets the label of the currently selected option.
   * @returns The label of the currently selected option.
   */
  getSelectedLabel(): string {
    const selectedValue = this.dropdownForm.get('selectedOption')?.value;
    const selectedOption = this.options.find(
      (option) => option.value === selectedValue
    );
    return selectedOption?.label || '';
  }

  /**
   * @description Toggles the dropdown's expanded/collapsed state.
   */
  toggleDropdown(): void {
    this.isDropdownExpanded = !this.isDropdownExpanded;
  }
}
