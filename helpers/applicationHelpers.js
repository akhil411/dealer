
module.exports = {
    getCodeType: async function (code) {
        let firstCharacter = code.split('-');

        if (firstCharacter[0] == 'D') {
            return { type: 'dealer', isDealerCode: true };
        } else if (firstCharacter[0] == 'O') {
            return { type: 'opportunity', isDealerCode: false };
        } else {
            return false;
        }
    }
}