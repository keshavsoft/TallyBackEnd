import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
	let LocalCoumnGUID = LocalRequestBody.GUID;
	let LocalCoumnITEMGROUP = LocalRequestBody.ITEMGROUP;
	let LocalCoumnITEMCATEGORY = LocalRequestBody.ITEMCATEGORY;
	let LocalCoumnITEMNAME = LocalRequestBody.ITEMNAME;

    let LocalFromRepo = postDefaultFuncFromRepo({LocalCoumnITEMNAME,LocalCoumnITEMCATEGORY,LocalCoumnITEMGROUP,LocalCoumnGUID});

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };

    res.set('Content-Type', 'text/plain');
    res.send(LocalFromRepo.SuccessText);
};

export {
    postFilterDataFromBodyFunc
};