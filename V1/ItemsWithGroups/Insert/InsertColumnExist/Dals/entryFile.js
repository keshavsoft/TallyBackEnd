import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnITEMNAME,LocalCoumnITEMCATEGORY,LocalCoumnITEMGROUP,LocalCoumnGUID}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnITEMNAME,LocalCoumnITEMCATEGORY,LocalCoumnITEMGROUP,LocalCoumnGUID});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};