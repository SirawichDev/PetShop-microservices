import IPetDocument from '../data-abstracts/IPetDocument';

class PetModel {
    private _getDoc: IPetDocument;

    constructor(iPetDocument: IPetDocument) {
        this._getDoc = iPetDocument;
    }
    get id(): string {
        return this._getDoc.id.toString();
    }
    get name(): string {
        return this._getDoc.name.toString();
    }
}
