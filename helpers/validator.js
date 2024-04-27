const checkImageURLIsValid = async (url) => {
    if (!url) {
        return false;
    }
    
    let regex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;

    if (!regex.test(url)) {
        return false;
    }

    let response = await fetch(url);

    return response.status === 200;
};


export { checkImageURLIsValid };