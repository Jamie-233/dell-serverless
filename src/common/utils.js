export const parseJsonByString = (str, defaultValue) => {
    let returnValue = defaultValue;

    try {
        returnValue = JSON.parse(str);
    } catch (ex) {}

    return returnValue;
};
