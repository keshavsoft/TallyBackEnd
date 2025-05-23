import fs from "fs";
const CommonDataPath = "Data";
const CommonFileName = "ItemsWithGroups";

let StartFunc = ({ inId }) => {
    const LocalFileName = CommonFileName;
    const LocalId = inId;

    let LocalReturnData = { KTF: false };

    try {
        const data = fs.readFileSync(`${CommonDataPath}/${LocalFileName}.json`, 'utf8');

        let LocalFind = JSON.parse(data).find(el => el.pk == LocalId);
        if (!LocalFind) {
            LocalReturnData.KReason = `No Data Found with Pk:${LocalId}`;
            return LocalReturnData;
        };

        LocalReturnData.KTF = true;
        LocalReturnData.JsonData = LocalFind;

        return LocalReturnData;
    } catch (err) {
        if (err.code === 'EEXIST') {
            console.log('File already exists.');
        } else {
            console.error('Error creating file:', err);
        }
    };

    return LocalReturnData;
};

export { StartFunc };