import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/libs/material/material.module';

import * as fromContainer from './containers';
import * as fromComponent from './components';
import * as fromServices from './services';

@NgModule({
  declarations: [...fromContainer.containers, ...fromComponent.components],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  providers: [...fromServices.services],
})
export class TodoListModule {}
