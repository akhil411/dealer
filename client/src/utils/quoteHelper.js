export const formatQA = (questionAnswer)  => {
    let criteria = {};

    questionAnswer.forEach(element => {
        if (element.target != '') {
            let target = element.target;

            if (element.validWith != questionAnswer[target].selectedValue) {
                return;
            }
        }
        criteria = {...criteria, [element.field]: element.selectedValue};
    });
    
    return criteria;
}