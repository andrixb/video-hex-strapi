import { Properties } from '../../../Shared/infrastructure/types/FunctionPropertiesType';

type Pagination = {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export default class Meta {
    pagination: Pagination

    constructor(
       pagination: Pagination
    ) {
       this.pagination = pagination
    }
}

export type MetaType = Properties<Meta>;
