type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number
}
type compare = Pick<AllType, 'name' | 'position' | 'color' | 'weight'>;
function compare<T extends compare> (top: T, bottom: T): AllType {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    }
}
