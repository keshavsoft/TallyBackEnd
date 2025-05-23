import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnITEMNAME,LocalCoumnITEMCATEGORY,LocalCoumnITEMGROUP,LocalCoumnGUID}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnITEMNAME,LocalCoumnITEMCATEGORY,LocalCoumnITEMGROUP,LocalCoumnGUID});

    return LocalFromDal;
};

export {
    postDefaultFunc
};