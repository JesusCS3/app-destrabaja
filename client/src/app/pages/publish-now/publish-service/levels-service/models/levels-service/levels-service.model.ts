export class initialPlan {
    constructor(public initialPlanName: string, public deliveryTime: number, public comments:string, 
        public price:number, public priceClient:number) {}
}

export class plusPlan {
    constructor(public plusPlanName: string, public deliveryTimePlus: number, public commentsPlus:string, 
        public pricePlus:number, public priceClientPlus:number){}
}

export class premiumPlan {
    constructor(public premiumPlanName: string, public deliveryTimePremium: number, public commentsPremium:string, 
        public pricePremium:number, public priceClientPremium:number){}
}