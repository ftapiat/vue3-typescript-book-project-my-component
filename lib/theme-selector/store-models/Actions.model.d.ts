import { ThemeInfoInterface } from "../models";
import { StoreInterface } from "../store-models";
export interface ActionsInterface {
    loadThemes(themes: ThemeInfoInterface[]): void;
    selectTheme(themeId: string): void;
}
export declare class ActionsModel implements ActionsInterface {
    private readonly store;
    constructor(store: StoreInterface);
    loadThemes(themes: ThemeInfoInterface[]): void;
    selectTheme(themeId: string): void;
}
