"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var Category = (function () {
    function Category(label) {
        this.label = label;
    }
    return Category;
}());
exports.Category = Category;
exports.CATEGORIES = [
    { id: 1, label: "cat1" },
    { id: 2, label: "cat2" },
];
var CategoriesComponent = (function () {
    function CategoriesComponent() {
        this.title = 'List of categories';
        this.categories = exports.CATEGORIES;
        this.clearModal();
    }
    CategoriesComponent.prototype.clearModal = function () {
        this.modCategory = new Category("");
    };
    CategoriesComponent.prototype.openEmptyFormCategory = function () {
        this.clearModal();
        this.modalFormCategory.open();
    };
    CategoriesComponent.prototype.openFormCategory = function (category) {
        this.clearModal();
        this.modCategory = category;
        this.modalFormCategory.open();
    };
    CategoriesComponent.prototype.dismissFormCategory = function () {
        this.clearModal();
        this.modalFormCategory.dismiss();
    };
    CategoriesComponent.prototype.openDeleteCategory = function () {
        this.modalDeleteCategory.open();
    };
    CategoriesComponent.prototype.dismissDeleteCategory = function () {
        this.modalDeleteCategory.dismiss();
    };
    CategoriesComponent.prototype.saveFormCategory = function (bool) {
        this.clearModal();
        if (bool) {
            this.categories.push(this.modCategory);
        }
        else {
            this.categories[this.modCategory.id] = this.modCategory;
        }
        // API requests
    };
    __decorate([
        core_1.ViewChild('formCategory'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], CategoriesComponent.prototype, "modalFormCategory", void 0);
    __decorate([
        core_1.ViewChild('deleteCategory'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], CategoriesComponent.prototype, "modalDeleteCategory", void 0);
    CategoriesComponent = __decorate([
        core_1.Component({
            selector: 'notepad-app',
            templateUrl: './app/categories/categories.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], CategoriesComponent);
    return CategoriesComponent;
}());
exports.CategoriesComponent = CategoriesComponent;
//# sourceMappingURL=categories.component.js.map