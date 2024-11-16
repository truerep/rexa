import { HttpStatusCode } from "axios";

const checkImageURLIsValid = async (url) => {
    if (!url) {
        return false;
    }

    let regex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;

    if (!regex.test(url)) {
        return false;
    }

    let response = await fetch(url);

    return response.status === HttpStatusCode.Ok;
};

const isString = (value) => {
    return typeof value === 'string' || value instanceof String;
};


export { checkImageURLIsValid, isString };