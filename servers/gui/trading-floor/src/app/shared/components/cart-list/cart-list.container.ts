import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ICartList} from '@entities/shared/components/cart-list/cart-list.interfaces';
import {LocalStorageHelper} from '@shared/helpers/local-storage.helper';
import {CART_LOCAL_STORAGE_KEY} from '@entities/common/common.constants';
import {LocalStorageEvents} from '@entities/common/common.enums';

@Component({
	selector: 'cart-list',
	template: '<cart-list-component [data]="proceedCartData"></cart-list-component>',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartListContainer implements OnInit {
	public proceedCartData: ICartList.ProcessedData;

	constructor(private cdr: ChangeDetectorRef) {
		LocalStorageHelper.on(LocalStorageEvents.Change, this.onStorageChanged.bind(this));
	}

	public ngOnInit(): void {
		if (LocalStorageHelper.isEmpty(CART_LOCAL_STORAGE_KEY)) {
			return;
		}
		this.proceedCartData = Object.values(LocalStorageHelper.getData<ICartList.StorageData>(CART_LOCAL_STORAGE_KEY));
	}

	private onStorageChanged(): void {
		if (LocalStorageHelper.isEmpty(CART_LOCAL_STORAGE_KEY)) {
			this.proceedCartData = [];
			this.cdr.markForCheck();
			return;
		}
		this.proceedCartData = Object.values(LocalStorageHelper.getData<ICartList.StorageData>(CART_LOCAL_STORAGE_KEY));
		this.cdr.markForCheck();
	}
}
