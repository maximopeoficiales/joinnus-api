
export interface Datum {
    ticketTypeId: number;
    name: string;
    blockName?: any;
    blockId: string;
    enabled: number;
    description?: any;
    type: string;
    color: string;
    dateStart?: any;
    dateEnd?: any;
    key?: any;
    image: string;
    requireQuantityValidation: number;
    activityDateHourId: number;
    quantitySold: number;
    quantitySoldPendingPayment: number;
    quantityMax: number;
    soldOut: number;
    isSpecialPrice: number;
    minQuantityPerOrder: number;
    maxQuantityPerOrder: number;
    maxQuantityPerUser: number;
    flagEventRepeat: number;
    currency: string;
    showCommission: number;
    commissionType: string;
    commissionPerTxPorcentaje: string;
    commissionPerTx?: any;
    taxValue: string;
    taxName: string;
    price: string;
    isFov: number;
    discountBank: any[];
}

export interface JoinnusTypesTickets {
    data: Datum[];
    status: boolean;
    message: string;
}


