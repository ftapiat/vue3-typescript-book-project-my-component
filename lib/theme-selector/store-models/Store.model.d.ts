import { ActionsInterface, MutationsInterface, StateInterface } from "../store-models";
export interface StoreInterface {
    state: StateInterface;
    mutations: MutationsInterface;
    actions: ActionsInterface;
}
export declare class StoreModel implements StoreInterface {
    readonly state: StateInterface;
    readonly mutations: MutationsInterface;
    readonly actions: ActionsInterface;
    constructor(state: StateInterface);
}
