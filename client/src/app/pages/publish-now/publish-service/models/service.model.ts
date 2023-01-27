export class service {
    constructor(
        public name: string, 
        public hashtags:string, 
        public category:string, 
        public subcategory:string, 
        public videoService:any,
        public imgServiceOne: any,
        public imgServiceTwo: any,
        public imgServiceThree: any,
        public shortDescription: string,
        public longDescription: string,
        public status: string,
        public createdAt: string,
        public user: string
    ){}
}