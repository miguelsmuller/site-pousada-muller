import { ComponentType } from '@angular/cdk/portal';
import { InjectionToken } from '@angular/core';

export const DIALOG_TYPE: InjectionToken<ComponentType<unknown>> = new InjectionToken<ComponentType<unknown>>(
  'DialogType'
);
