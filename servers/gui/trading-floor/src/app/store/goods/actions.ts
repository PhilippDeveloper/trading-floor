import {EStore} from '@entities/store/store.enums';
import {StoreHelper} from '@shared/helpers/store.helper';
import {createAction, props} from '@ngrx/store';
import {ICatalog} from '@entities/shared/components/catalog/catalog.interfaces';
import {ErrorObject} from '@entities/common/common.interfaces';

const moduleName = EStore.Modules.Goods;
const moduleDataLoadingActionNameCreator = StoreHelper.getModuleDataLoadingActionNameSetCreator(moduleName);

const TYPES = {
	LOAD_CATALOG_DATA: moduleDataLoadingActionNameCreator('Load catalog data'),
};

export const GoodsActions = {
	types: TYPES,
	loadCatalogDataRequested: createAction(TYPES.LOAD_CATALOG_DATA.REQUESTED),
	loadCatalogDataSucceeded: createAction(
		TYPES.LOAD_CATALOG_DATA.SUCCEEDED,
		props<{payload: ICatalog.CatalogData[]}>()
	),
	loadCatalogDataFailed: createAction(TYPES.LOAD_CATALOG_DATA.FAILED, props<{payload: ErrorObject}>()),
};
