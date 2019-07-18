export interface IEntity {
    entity: string;
    type: string;
    startIndex: number;
    endIndex: number;
    resolution?: IResolution;
    role: string;
}

interface IResolution {
    values: string[]
}