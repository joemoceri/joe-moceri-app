import { Injectable } from "@angular/core";

@Injectable()
export class ModalService {

    constructor(
    ) { }

    prompt(message: string): string | null {
      return prompt(message);
    }

    confirmDelete(): boolean {
        return confirm("Are you sure you want to delete the selected item(s)?");
    }

    confirmErase(): boolean {
        return confirm("Are you sure you want to clear your changes? All unsaved data will be lost.");
    }

    confirmReset(): boolean {
        return confirm("Are you sure you want to reset your changes? All unsaved data will be lost.");
    }

    confirm(message: string): boolean {
        return confirm(message);
    }

    alertSuccess(): void {
        alert("The operation completed successfully");
    }

    alertError(error: string): void {
        alert("An error occurred. " + error);
    }

    alert(message: string): void {
        alert(message);
    }
}
