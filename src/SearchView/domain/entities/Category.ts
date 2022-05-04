import { Properties } from '../../../Shared/infrastructure/types/FunctionPropertiesType';


export default class Category {
    id: string;
    name?: string;
    emoji?: string;

    constructor(id: string, name: string, emoji: string) {
        this.id = id;
        this.name = name;
        this.emoji = emoji;
    }
}

export type CategoryConstructor = Properties<Category>;
