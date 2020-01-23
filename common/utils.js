// Define a function that takes and id and an array
const findById = (brewerId, brewerArray) => {
    for (let i = 0; i < brewerArray.length; i++) {
        const brewer = brewerArray[i];
        if (brewerId === brewer.id) {
            return brewer;
        }
    }
};

export default findById;