import { NgModule } from '@angular/core'
import { A11yModule } from '@angular/cdk/a11y'
import { CdkTableModule } from '@angular/cdk/table'
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule} from '@angular/material/input'
import { MatIconModule} from '@angular/material/icon'
import { CommonModule} from '@angular/common'
import { MatListModule} from '@angular/material/list'
import { MatButtonModule} from '@angular/material/button'
import { MatTableModule} from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatBadgeModule } from '@angular/material/badge'
import { MatRippleModule } from '@angular/material/core'
import { MatSortModule } from '@angular/material/sort'
import { MatDialogModule } from '@angular/material/dialog'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatSelectModule } from '@angular/material/select'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { ReactiveFormsModule } from '@angular/forms'
import { MatDividerModule } from '@angular/material/divider'
import { MatCardModule } from '@angular/material/card'
import { MatCheckboxModule } from '@angular/material/checkbox'
import {MatRadioModule} from '@angular/material/radio'
import {MatBottomSheetModule} from '@angular/material/bottom-sheet'
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {MatTabsModule} from '@angular/material/tabs'
import {MatGridListModule} from '@angular/material/grid-list'
import { MatToolbarModule } from '@angular/material/toolbar'

@NgModule({
  exports: [
    CommonModule,
    A11yModule,
    CdkTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatBadgeModule,
    MatRippleModule,
    MatSortModule,
    MatDialogModule,
    MatExpansionModule,
    MatSidenavModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatBottomSheetModule,
    MatSnackBarModule,
    MatTabsModule,
    MatGridListModule,
    MatToolbarModule
  ],
})
export class MaterialModule {}
