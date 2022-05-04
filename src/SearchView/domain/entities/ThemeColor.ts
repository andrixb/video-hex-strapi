import { Properties } from '../../../Shared/infrastructure/types/FunctionPropertiesType';


export default class ThemeColor {
    hex?: string;

    constructor(hex: string) {
        this.hex = hex;
    }
}

export type ThemeColorConstructor = Properties<ThemeColor>;
