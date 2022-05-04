import { Properties } from '../../../Shared/infrastructure/types/FunctionPropertiesType';
import Category from './Category';
import ThemeColor from './ThemeColor';


export default class Community {
    idString: string;
    name: string;
    visible: boolean;
    seedPhrase?: string;
    symbol?: string;
    communityStatus?: string;
    themeColor?: ThemeColor;
    category?: Category[];

    constructor(
        idString: string,
        name: string,
        visible: boolean,
        seedPhrase?: string,
        symbol?: string,
        communityStatus?: string,
        themeColor?: ThemeColor,
        category?: Category[]
    ) {
        this.idString = idString;
        this.name = name;
        this.seedPhrase = seedPhrase;
        this.symbol = symbol;
        this.visible = visible;
        this.communityStatus = communityStatus;
        this.themeColor = themeColor;
        this.category = category;
    }
}

export type CommunityConstructor = Properties<Community>;
