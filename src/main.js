import { formatPassTime } from './data/data'
export const isArr = someVar => {
    return Object.prototype.toString.call(someVar).slice(8, -1).toLowerCase() === 'array'
};

export default {
    formatPassTime
}