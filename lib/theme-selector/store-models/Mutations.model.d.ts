import { ThemeInfoInterface } from "../models";
import { StateInterface } from "../store-models";
export interface MutationsInterface {
    loadThemes(themes: ThemeInfoInterface[]): void;
    selectTheme(themeId: string): void;
}
export declare class MutationsModel implements MutationsInterface {
    private state;
    constructor(state: StateInterface);
    loadThemes(themes: ThemeInfoInterface[]): void;
    selectTheme(themeId: string): void;
}
